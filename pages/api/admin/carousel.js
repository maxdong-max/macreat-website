/**
 * 轮播图管理 API
 */
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import Database from 'better-sqlite3';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';
const dbPath = path.join(process.cwd(), 'data', 'admin.db');

function getDb() {
  if (!fs.existsSync(dbPath)) return null;
  return new Database(dbPath);
}

function authMiddleware(req) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return { error: '未授权', status: 401 };
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { user: decoded };
  } catch (err) {
    return { error: '无效的令牌', status: 401 };
  }
}

export default async function handler(req, res) {
  const { method } = req;
  const db = getDb();
  
  if (!db) return res.status(500).json({ error: '数据库未初始化' });

  // 确保表存在
  db.exec(`
    CREATE TABLE IF NOT EXISTS carousel (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      subtitle TEXT,
      image TEXT,
      cta_text TEXT,
      cta_link TEXT,
      lang TEXT DEFAULT 'en',
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1
    )
  `);
  
  if (method === 'GET') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const items = db.prepare('SELECT * FROM carousel ORDER BY sort_order').all();
    db.close();
    return res.status(200).json(items);
  }
  
  if (method === 'POST') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    try {
      const { title, subtitle, image, cta_text, cta_link, lang, sort_order } = req.body;
      const result = db.prepare('INSERT INTO carousel (title, subtitle, image, cta_text, cta_link, lang, sort_order, active) VALUES (?, ?, ?, ?, ?, ?, ?, 1)').run(title, subtitle, image, cta_text, cta_link, lang || 'en', sort_order || 0);
      db.close();
      return res.status(200).json({ id: result.lastInsertRowid, success: true });
    } catch (error) {
      db.close();
      return res.status(500).json({ error: error.message });
    }
  }
  
  if (method === 'PUT') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    try {
      const { id, title, subtitle, image, cta_text, cta_link, lang, sort_order, active } = req.body;
      db.prepare('UPDATE carousel SET title = ?, subtitle = ?, image = ?, cta_text = ?, cta_link = ?, lang = ?, sort_order = ?, active = ? WHERE id = ?').run(title, subtitle, image, cta_text, cta_link, lang, sort_order, active ? 1 : 0, id);
      db.close();
      return res.status(200).json({ success: true });
    } catch (error) {
      db.close();
      return res.status(500).json({ error: error.message });
    }
  }
  
  if (method === 'DELETE') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (id) {
      db.prepare('DELETE FROM carousel WHERE id = ?').run(id);
    }
    db.close();
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}