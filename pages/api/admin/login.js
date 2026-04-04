/**
 * 后台管理 - 登录 API (Vercel兼容版本)
 */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'macreat2024';

export default async function handler(req, res) {
  const { method } = req;
  
  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { password } = req.body;
  
  // 简单密码验证
  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ token });
  }
  
  return res.status(401).json({ error: 'Invalid password' });
}
