/**
 * AI智能客服 API
 */
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import Database from 'better-sqlite3';

const dbPath = path.join(process.cwd(), 'data', 'admin.db');

function ensureDb() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  const db = new Database(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS ai_chats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      visitor_id TEXT,
      message TEXT NOT NULL,
      response TEXT,
      language TEXT DEFAULT 'en',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  return db;
}

function generateAIResponse(message, language) {
  const lowerMsg = message.toLowerCase();
  
  const responses = {
    en: {
      price: "For pricing details on our pellet machines, please contact our sales team via WhatsApp +86-15207548 or email pellet@macreat.com",
      machine: "We offer various biomass pellet machines including LD700C, RH&RV series, and complete production lines. Visit https://macreat.com/product/ for details.",
      delivery: "We provide worldwide shipping. Delivery time varies by destination, typically 15-45 days after order confirmation.",
      warranty: "Our machines come with 1-year warranty. We also provide lifetime technical support.",
      contact: "Contact us: WhatsApp +86-15207548, Email pellet@macreat.com",
      default: "Thank you for your inquiry! Our team will respond within 24 hours. For urgent matters, please WhatsApp us at +86-15207548."
    },
    zh: {
      price: "关于颗粒机价格详情，请联系销售团队：WhatsApp +86-15207548 或邮件 pellet@macreat.com",
      machine: "我们提供各种生物质颗粒机，包括LD700C、RH&RV系列。请访问 https://macreat.com/product/ 查看详情。",
      delivery: "我们提供全球运输。交货时间通常在确认订单后15-45天。",
      warranty: "我们的机器提供1年保修和终身技术支持。",
      contact: "联系我们：WhatsApp +86-15207548，邮箱 pellet@macreat.com",
      default: "感谢您的咨询！我们的团队将在24小时内回复。"
    },
    id: {
      price: "Untuk detail harga, hubungi WhatsApp +86-15207548 atau email pellet@macreat.com",
      machine: "Kami menawarkan berbagai mesin pellet biomassa. Kunjungi https://macreat.com/product/ untuk detailnya.",
      delivery: "Kami menyediakan pengiriman ke seluruh dunia, biasanya 15-45 hari.",
      warranty: "Mesin kami dilengkapi garansi 1 tahun dan dukungan teknis seumur hidup.",
      contact: "Hubungi kami: WhatsApp +86-15207548, Email pellet@macreat.com",
      default: "Terima kasih! Tim kami akan merespons dalam 24 jam."
    }
  };
  
  const langResponses = responses[language] || responses.en;
  
  if (lowerMsg.includes('price') || lowerMsg.includes('报价') || lowerMsg.includes('harga') || lowerMsg.includes('cost')) {
    return langResponses.price;
  } else if (lowerMsg.includes('machine') || lowerMsg.includes('机器') || lowerMsg.includes('mesin') || lowerMsg.includes('equipment')) {
    return langResponses.machine;
  } else if (lowerMsg.includes('delivery') || lowerMsg.includes('物流') || lowerMsg.includes('pengiriman') || lowerMsg.includes('shipping')) {
    return langResponses.delivery;
  } else if (lowerMsg.includes('warranty') || lowerMsg.includes('售后') || lowerMsg.includes('garansi')) {
    return langResponses.warranty;
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('联系') || lowerMsg.includes('hubungi')) {
    return langResponses.contact;
  }
  
  return langResponses.default;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { message, language = 'en', visitorId } = req.body;
    const sessionId = uuidv4();
    
    const response = generateAIResponse(message, language);
    
    const db = ensureDb();
    db.prepare('INSERT INTO ai_chats (session_id, visitor_id, message, response, language) VALUES (?, ?, ?, ?, ?)').run(sessionId, visitorId, message, response, language);
    db.close();
    
    return res.status(200).json({ response, sessionId });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}