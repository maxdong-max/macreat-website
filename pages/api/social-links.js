/**
 * 公开社交链接 API - 从数据库获取
 */
import path from 'path';
import fs from 'fs';
import { createClient } from '@libsql/client';

const dbPath = path.join(process.cwd(), 'data', 'admin.db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    if (!fs.existsSync(dbPath)) {
      return res.status(200).json([]);
    }
    
    const db = new (dbPath);
    const items = db.prepare('SELECT * FROM social_links WHERE enabled = 1 ORDER BY sort_order').all();
    db.close();
    
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}