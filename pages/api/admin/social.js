/**
 * 社交链接管理 API
 */
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import { createClient } from '@libsql/client';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';
const dbPath = path.join(process.cwd(), 'data', 'admin.db');

function getDb() {
  if (!fs.existsSync(dbPath)) return null;
  return createClient({ url: 'file:' + dbPath });
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
  
  if (method === 'GET') {
    const db = getDb();
    if (!db) return res.status(200).json([]);
    
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const items = db.prepare('SELECT * FROM social_links ORDER BY sort_order').all();
    db.close();
    return res.status(200).json(items);
  }
  
  if (method === 'POST') {
    const db = getDb();
    if (!db) return res.status(500).json({ error: '数据库未初始化' });
    
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    try {
      const { name, icon, href, enabled, position, sort_order } = req.body;
      const result = db.prepare('INSERT INTO social_links (name, icon, href, enabled, position, sort_order) VALUES (?, ?, ?, ?, ?, ?)').run(name, icon, href, enabled ? 1 : 0, position, sort_order || 0);
      db.close();
      return res.status(200).json({ id: result.lastInsertRowid, success: true });
    } catch (error) {
      db.close();
      return res.status(500).json({ error: error.message });
    }
  }
  
  if (method === 'PUT') {
    const db = getDb();
    if (!db) return res.status(500).json({ error: '数据库未初始化' });
    
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    try {
      const { id, name, icon, href, enabled, position, sort_order } = req.body;
      db.prepare('UPDATE social_links SET name = ?, icon = ?, href = ?, enabled = ?, position = ?, sort_order = ? WHERE id = ?').run(name, icon, href, enabled ? 1 : 0, position, sort_order, id);
      db.close();
      return res.status(200).json({ success: true });
    } catch (error) {
      db.close();
      return res.status(500).json({ error: error.message });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}