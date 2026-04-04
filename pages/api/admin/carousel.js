/**
 * 轮播图管理 API (Vercel兼容版本)
 */
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';

// 内存存储
let carousels = [
  { id: 1, image: '/images/hero-1.jpg', title: 'Welcome to Macreat', link: '/' },
  { id: 2, image: '/images/hero-2.jpg', title: 'Biomass Pellet Machine', link: '/product/biomass-pellet-machine' }
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
    return res.status(200).json(carousels);
  }
  
  if (method === 'POST') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const { image, title, link } = req.body;
    carousels.push({ id: nextId++, image, title, link });
    return res.status(200).json({ success: true, id: nextId - 1 });
  }
  
  if (method === 'DELETE') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    const { id } = req.body;
    carousels = carousels.filter(c => c.id !== id);
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
