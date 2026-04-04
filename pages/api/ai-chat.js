/**
 * AI智能客服 API (Vercel兼容版本)
 */
import { v4 as uuidv4 } from 'uuid';

// 内存存储对话
const conversations = {};

export default async function handler(req, res) {
  const { method } = req;
  
  if (method === 'POST') {
    const { message, conversationId, config } = req.body;
    
    // 创建新对话ID
    const convId = conversationId || uuidv4();
    if (!conversations[convId]) {
      conversations[convId] = [];
    }
    
    // 简单响应（实际可接 Ollama 或 OpenAI）
    const replies = [
      "Thank you for your inquiry. Our biomass pellet machines are high-quality and energy-efficient.",
      "For more details about our products, please visit our product page.",
      "We offer competitive prices and worldwide shipping. Contact us for a quote.",
      "Our technical team can provide professional solution recommendations."
    ];
    
    const reply = replies[Math.floor(Math.random() * replies.length)];
    
    conversations[convId].push({ role: 'user', content: message });
    conversations[convId].push({ role: 'assistant', content: reply });
    
    return res.status(200).json({ 
      reply, 
      conversationId: convId,
      history: conversations[convId]
    });
  }
  
  if (method === 'GET') {
    return res.status(200).json({ status: 'ok' });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
