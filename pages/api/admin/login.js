/**
 * 后台管理 - 登录 API
 */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import { createClient } from '@libsql/client';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'admin.db');
const db = new (dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS social_links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    icon TEXT,
    href TEXT,
    enabled INTEGER DEFAULT 1,
    position TEXT DEFAULT 'header',
    sort_order INTEGER DEFAULT 0
  );
`);

const adminExists = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
if (!adminExists) {
  const hashedPassword = bcrypt.hashSync('macreat2024', 10);
  db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)').run('admin', hashedPassword, 'admin');
}

const socialCount = db.prepare('SELECT COUNT(*) as count FROM social_links').get();
if (socialCount.count === 0) {
  const defaultSocials = [
    { name: 'WhatsApp', icon: 'whatsapp', href: 'https://api.whatsapp.com/send?phone=8618615207548', position: 'header', sort: 1 },
    { name: 'Email', icon: 'email', href: 'mailto:pellet@macreat.com', position: 'header', sort: 2 },
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/macreatpellet/', position: 'header', sort: 3 },
    { name: 'Telegram', icon: 'telegram', href: 'https://t.me/macreat', position: 'header', sort: 4 },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/macreat', position: 'header', sort: 5 },
  ];
  const insert = db.prepare('INSERT INTO social_links (name, icon, href, position, sort_order) VALUES (?, ?, ?, ?, ?)');
  defaultSocials.forEach(s => insert.run(s.name, s.icon, s.href, 'header', s.sort));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { username, password } = req.body;
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: '用户名或密码错误' });
    }
    
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}