/**
 * 访问追踪 API
 */
import path from 'path';
import fs from 'fs';
import { createClient } from '@libsql/client';

const dbPath = path.join(process.cwd(), 'data', 'admin.db');

function ensureAnalyticsDb() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  const db = new (dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS analytics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT,
      country TEXT,
      city TEXT,
      device TEXT,
      os TEXT,
      browser TEXT,
      url TEXT,
      referer TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  return db;
}

export default async function handler(req, res) {
  const { method } = req;
  
  if (method === 'POST') {
    try {
      const { ip, country, city, device, os, browser, url, referer } = req.body;
      
      const db = ensureAnalyticsDb();
      db.prepare('INSERT INTO analytics (ip, country, city, device, os, browser, url, referer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').run(ip, country, city, device, os, browser, url, referer);
      db.close();
      
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  if (method === 'GET') {
    const days = parseInt(req.query.days || '7');
    
    if (!fs.existsSync(dbPath)) {
      return res.status(200).json({ totalVisitors: 0, todayVisitors: 0 });
    }
    
    const db = new (dbPath);
    
    try {
      const totalVisitors = db.prepare(`SELECT COUNT(DISTINCT ip) as count FROM analytics WHERE timestamp > datetime('now', '-${days} days')`).get();
      const todayVisitors = db.prepare(`SELECT COUNT(DISTINCT ip) as count FROM analytics WHERE date(timestamp) = date('now')`).get();
      
      const topPages = db.prepare(`
        SELECT url, COUNT(*) as views 
        FROM analytics 
        WHERE timestamp > datetime('now', '-${days} days')
        GROUP BY url 
        ORDER BY views DESC 
        LIMIT 10
      `).all();
      
      const byDevice = db.prepare(`
        SELECT device, COUNT(*) as count 
        FROM analytics 
        WHERE timestamp > datetime('now', '-${days} days')
        GROUP BY device
      `).all();
      
      const byCountry = db.prepare(`
        SELECT country, COUNT(*) as count 
        FROM analytics 
        WHERE timestamp > datetime('now', '-${days} days')
        GROUP BY country
        ORDER BY count DESC
        LIMIT 10
      `).all();
      
      db.close();
      
      return res.status(200).json({
        totalVisitors: totalVisitors.count,
        todayVisitors: todayVisitors.count,
        topPages,
        byDevice,
        byCountry
      });
    } catch (error) {
      db.close();
      return res.status(500).json({ error: error.message });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}