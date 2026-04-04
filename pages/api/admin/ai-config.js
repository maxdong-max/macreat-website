/**
 * AI客服配置 API (Vercel兼容版本 - 无数据库)
 */
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';

// 内存存储配置
let aiConfig = {
  provider: 'local',
  openai_api_key: '',
  openai_model: 'gpt-3.5-turbo',
  local_llm_url: 'http://localhost:11434/api/generate',
  local_llm_model: 'llama2',
  system_prompt: 'You are Macreat AI assistant, specializing in biomass pellet machines.',
  fallback_language: 'en'
};

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
    const items = Object.entries(aiConfig).map(([key, value]) => ({ key, value }));
    return res.status(200).json(items);
  }
  
  if (method === 'PUT' || method === 'POST') {
    const auth = authMiddleware(req);
    if (auth.error) return res.status(auth.status).json({ error: auth.error });
    
    try {
      const { key, value } = req.body;
      if (key && value !== undefined) {
        aiConfig[key] = value;
      }
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}