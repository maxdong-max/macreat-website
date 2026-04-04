/**
 * 社交链接管理 API (Vercel兼容版本)
 */
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';

// 内存存储
let socialLinks = [
  { id: 1, icon: 'whatsapp', name: 'WhatsApp', href: 'https://wa.me/1234567890' },
  { id: 2, icon: 'email', name: 'Email', href: 'mailto:info@macreat.com' }
];

let nextId = 3;

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
    return res.status(200).json(socialLinks);
  }
  
  if (method === 'POST') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const { icon, name, href } = req.body;
    socialLinks.push({ id: nextId++, icon, name, href });
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
