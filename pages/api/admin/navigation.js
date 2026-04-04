/**
 * 导航管理 API (Vercel兼容版本)
 */
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';

// 内存存储
let navigation = [
  { id: 1, name: 'Home', path: '/', order: 1 },
  { id: 2, name: 'Products', path: '/machine/products', order: 2 },
  { id: 3, name: 'Solutions', path: '/solution', order: 3 },
  { id: 4, name: 'About', path: '/about-macreat', order: 4 },
  { id: 5, name: 'Contact', path: '/contact', order: 5 }
];

let nextId = 6;

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
    return res.status(200).json(navigation);
  }
  
  if (method === 'POST') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const { name, path: link, order } = req.body;
    navigation.push({ id: nextId++, name, path: link, order });
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
