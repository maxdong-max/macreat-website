/**
 * AI客服配置 API
 * 支持 OpenAI API 和本地LLM
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

  db.exec(`
    CREATE TABLE IF NOT EXISTS ai_config (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT UNIQUE NOT NULL,
      value TEXT,
      description TEXT
    )
  `);
  
  // 初始化默认配置
  const defaults = [
    { key: 'provider', value: 'local', description: 'AI provider: openai, local, rulebased' },
    { key: 'openai_api_key', value: '', description: 'OpenAI API Key' },
    { key: 'openai_model', value: 'gpt-3.5-turbo', description: 'OpenAI Model' },
    { key: 'local_llm_url', value: 'http://localhost:11434/api/generate', description: 'Local LLM URL (Ollama)' },
    { key: 'local_llm_model', value: 'llama2', description: 'Local LLM Model' },
    { key: 'system_prompt', value: 'You are Macreat AI assistant, specializing in biomass pellet machines. Help customers with product inquiries, pricing, delivery, and technical questions.', description: 'System prompt' },
    { key: 'fallback_language', value: 'en', description: 'Fallback language' }
  ];
  
  const stmt = db.prepare('INSERT OR IGNORE INTO ai_config (key, value, description) VALUES (?, ?, ?)');
  defaults.forEach(d => stmt.run(d.key, d.value, d.description));
  
  if (method === 'GET') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const items = db.prepare('SELECT * FROM ai_config').all();
    db.close();
    return res.status(200).json(items);
  }
  
  if (method === 'PUT' || method === 'POST') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    try {
      const { key, value, description } = req.body;
      db.prepare('INSERT OR REPLACE INTO ai_config (key, value, description) VALUES (?, ?, ?)').run(key, value, description || '');
      db.close();
      return res.status(200).json({ success: true });
    } catch (error) {
      db.close();
      return res.status(500).json({ error: error.message });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}