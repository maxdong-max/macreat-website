/**
 * Macreat 后台管理系统
 * 功能：
 * - 内容管理 (导航/轮播图/首页模块)
 * - 多语言支持 (中/英/印尼)
 * - 用户权限管理
 * - AI客服配置
 * - 社交链接管理
 * - 访问数据统计
 */

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3002;
const JWT_SECRET = process.env.JWT_SECRET || 'macreat-admin-secret-2024';

// 初始化数据库
const db = new Database(path.join(__dirname, '../data/admin.db'));

// 确保数据目录存在
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 初始化数据库表
function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS navigation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      href TEXT NOT NULL,
      hasDropdown INTEGER DEFAULT 0,
      lang TEXT DEFAULT 'en',
      sort_order INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS carousel (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      subtitle TEXT,
      image TEXT,
      cta_text TEXT,
      cta_link TEXT,
      lang TEXT DEFAULT 'en',
      sort_order INTEGER DEFAULT 0,
      active INTEGER DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS home_modules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_key TEXT NOT NULL,
      title TEXT,
      subtitle TEXT,
      enabled INTEGER DEFAULT 1,
      lang TEXT DEFAULT 'en',
      sort_order INTEGER DEFAULT 0
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

    CREATE TABLE IF NOT EXISTS ai_config (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT UNIQUE NOT NULL,
      value TEXT,
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS ai_chats (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      visitor_id TEXT,
      message TEXT NOT NULL,
      response TEXT,
      language TEXT DEFAULT 'en',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

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

  // 创建默认管理员
  const adminExists = db.prepare('SELECT id FROM users WHERE username = ?').get('admin');
  if (!adminExists) {
    const hashedPassword = bcrypt.hashSync('macreat2024', 10);
    db.prepare('INSERT INTO users (username, password, role) VALUES (?, ?, ?)').run('admin', hashedPassword, 'admin');
    console.log('✓ 默认管理员已创建: admin / macreat2024');
  }

  // 初始化默认社交链接
  const socialCount = db.prepare('SELECT COUNT(*) as count FROM social_links').get();
  if (socialCount.count === 0) {
    const defaultSocials = [
      { name: 'WhatsApp', icon: 'whatsapp', href: 'https://api.whatsapp.com/send?phone=8618615207548', position: 'header', sort: 1 },
      { name: 'Email', icon: 'email', href: 'mailto:pellet@macreat.com', position: 'header', sort: 2 },
      { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/macreatpellet/', position: 'header', sort: 3 },
      { name: 'Telegram', icon: 'telegram', href: 'https://t.me/macreat', position: 'header', sort: 4 },
      { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/macreat', position: 'header', sort: 5 },
      { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com/@macreatpelletmill2327', position: 'header', sort: 6 },
      { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/woodpelletmill', position: 'header', sort: 7 },
    ];
    const insert = db.prepare('INSERT INTO social_links (name, icon, href, position, sort_order) VALUES (?, ?, ?, ?, ?)');
    defaultSocials.forEach(s => insert.run(s.name, s.icon, s.href, 'header', s.sort));
  }
}

initDatabase();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// 认证中间件
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: '未授权' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: '无效的令牌' });
  }
}

// ============ 认证接口 ============

// 登录
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }
  
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
});

// 修改密码
app.post('/api/admin/change-password', authMiddleware, (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  
  if (!bcrypt.compareSync(oldPassword, user.password)) {
    return res.status(400).json({ error: '原密码错误' });
  }
  
  const hashed = bcrypt.hashSync(newPassword, 10);
  db.prepare('UPDATE users SET password = ? WHERE id = ?').run(hashed, req.user.id);
  res.json({ success: true });
});

// ============ 导航管理 ============

app.get('/api/admin/navigation', authMiddleware, (req, res) => {
  const items = db.prepare('SELECT * FROM navigation ORDER BY sort_order').all();
  res.json(items);
});

app.post('/api/admin/navigation', authMiddleware, (req, res) => {
  const { text, href, hasDropdown, lang, sort_order } = req.body;
  const result = db.prepare('INSERT INTO navigation (text, href, hasDropdown, lang, sort_order) VALUES (?, ?, ?, ?, ?)').run(text, href, hasDropdown ? 1 : 0, lang, sort_order || 0);
  res.json({ id: result.lastInsertRowid });
});

app.put('/api/admin/navigation/:id', authMiddleware, (req, res) => {
  const { text, href, hasDropdown, lang, sort_order } = req.body;
  db.prepare('UPDATE navigation SET text = ?, href = ?, hasDropdown = ?, lang = ?, sort_order = ? WHERE id = ?').run(text, href, hasDropdown ? 1 : 0, lang, sort_order, req.params.id);
  res.json({ success: true });
});

app.delete('/api/admin/navigation/:id', authMiddleware, (req, res) => {
  db.prepare('DELETE FROM navigation WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// ============ 轮播图管理 ============

app.get('/api/admin/carousel', authMiddleware, (req, res) => {
  const items = db.prepare('SELECT * FROM carousel ORDER BY sort_order').all();
  res.json(items);
});

app.post('/api/admin/carousel', authMiddleware, (req, res) => {
  const { title, subtitle, image, cta_text, cta_link, lang, sort_order } = req.body;
  const result = db.prepare('INSERT INTO carousel (title, subtitle, image, cta_text, cta_link, lang, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)').run(title, subtitle, image, cta_text, cta_link, lang, sort_order || 0);
  res.json({ id: result.lastInsertRowid });
});

app.put('/api/admin/carousel/:id', authMiddleware, (req, res) => {
  const { title, subtitle, image, cta_text, cta_link, lang, sort_order, active } = req.body;
  db.prepare('UPDATE carousel SET title = ?, subtitle = ?, image = ?, cta_text = ?, cta_link = ?, lang = ?, sort_order = ?, active = ? WHERE id = ?').run(title, subtitle, image, cta_text, cta_link, lang, sort_order, active ? 1 : 0, req.params.id);
  res.json({ success: true });
});

app.delete('/api/admin/carousel/:id', authMiddleware, (req, res) => {
  db.prepare('DELETE FROM carousel WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// ============ 首页模块管理 ============

app.get('/api/admin/home-modules', authMiddleware, (req, res) => {
  const items = db.prepare('SELECT * FROM home_modules ORDER BY sort_order').all();
  res.json(items);
});

app.put('/api/admin/home-modules/:id', authMiddleware, (req, res) => {
  const { title, subtitle, enabled, sort_order } = req.body;
  db.prepare('UPDATE home_modules SET title = ?, subtitle = ?, enabled = ?, sort_order = ? WHERE id = ?').run(title, subtitle, enabled ? 1 : 0, sort_order, req.params.id);
  res.json({ success: true });
});

// ============ 社交链接管理 ============

app.get('/api/admin/social-links', authMiddleware, (req, res) => {
  const items = db.prepare('SELECT * FROM social_links ORDER BY sort_order').all();
  res.json(items);
});

app.post('/api/admin/social-links', authMiddleware, (req, res) => {
  const { name, icon, href, enabled, position, sort_order } = req.body;
  const result = db.prepare('INSERT INTO social_links (name, icon, href, enabled, position, sort_order) VALUES (?, ?, ?, ?, ?, ?)').run(name, icon, href, enabled ? 1 : 0, position, sort_order || 0);
  res.json({ id: result.lastInsertRowid });
});

app.put('/api/admin/social-links/:id', authMiddleware, (req, res) => {
  const { name, icon, href, enabled, position, sort_order } = req.body;
  db.prepare('UPDATE social_links SET name = ?, icon = ?, href = ?, enabled = ?, position = ?, sort_order = ? WHERE id = ?').run(name, icon, href, enabled ? 1 : 0, position, sort_order, req.params.id);
  res.json({ success: true });
});

app.delete('/api/admin/social-links/:id', authMiddleware, (req, res) => {
  db.prepare('DELETE FROM social_links WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// ============ AI客服配置 ============

app.get('/api/admin/ai-config', authMiddleware, (req, res) => {
  const items = db.prepare('SELECT * FROM ai_config').all();
  res.json(items);
});

app.post('/api/admin/ai-config', authMiddleware, (req, res) => {
  const { key, value, description } = req.body;
  db.prepare('INSERT OR REPLACE INTO ai_config (key, value, description) VALUES (?, ?, ?)').run(key, value, description);
  res.json({ success: true });
});

// 获取AI聊天记录
app.get('/api/admin/ai-chats', authMiddleware, (req, res) => {
  const { limit = 50, offset = 0, language } = req.query;
  let sql = 'SELECT * FROM ai_chats';
  const params = [];
  if (language) {
    sql += ' WHERE language = ?';
    params.push(language);
  }
  sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));
  const items = db.prepare(sql).all(...params);
  res.json(items);
});

// ============ 数据统计分析 ============

// 获取统计数据
app.get('/api/admin/analytics/summary', authMiddleware, (req, res) => {
  const { days = 7 } = req.query;
  
  const totalVisitors = db.prepare('SELECT COUNT(DISTINCT ip) as count FROM analytics WHERE timestamp > datetime("now", "-' + days + ' days")').get();
  const todayVisitors = db.prepare('SELECT COUNT(DISTINCT ip) as count FROM analytics WHERE date(timestamp) = date("now")').get();
  const yesterdayVisitors = db.prepare('SELECT COUNT(DISTINCT ip) as count FROM analytics WHERE date(timestamp) = date("now", "-1 day")').get();
  
  // 热门页面
  const topPages = db.prepare(`
    SELECT url, COUNT(*) as views 
    FROM analytics 
    WHERE timestamp > datetime("now", "-' + days + ' days")
    GROUP BY url 
    ORDER BY views DESC 
    LIMIT 10
  `).all();
  
  // 按设备统计
  const byDevice = db.prepare(`
    SELECT device, COUNT(*) as count 
    FROM analytics 
    WHERE timestamp > datetime("now", "-' + days + ' days")
    GROUP BY device
  `).all();
  
  // 按国家统计
  const byCountry = db.prepare(`
    SELECT country, COUNT(*) as count 
    FROM analytics 
    WHERE timestamp > datetime("now", "-' + days + ' days")
    GROUP BY country
    ORDER BY count DESC
    LIMIT 10
  `).all();
  
  // 按小时统计
  const byHour = db.prepare(`
    SELECT strftime("%H", timestamp) as hour, COUNT(*) as count 
    FROM analytics 
    WHERE timestamp > datetime("now", "-' + days + ' days")
    GROUP BY hour
    ORDER BY hour
  `).all();
  
  res.json({
    totalVisitors: totalVisitors.count,
    todayVisitors: todayVisitors.count,
    yesterdayVisitors: yesterdayVisitors.count,
    topPages,
    byDevice,
    byCountry,
    byHour
  });
});

// 获取详细日志
app.get('/api/admin/analytics/logs', authMiddleware, (req, res) => {
  const { limit = 100, offset = 0, ip, country, url } = req.query;
  let sql = 'SELECT * FROM analytics WHERE 1=1';
  const params = [];
  
  if (ip) {
    sql += ' AND ip LIKE ?';
    params.push(`%${ip}%`);
  }
  if (country) {
    sql += ' AND country = ?';
    params.push(country);
  }
  if (url) {
    sql += ' AND url LIKE ?';
    params.push(`%${url}%`);
  }
  
  sql += ' ORDER BY timestamp DESC LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));
  
  const items = db.prepare(sql).all(...params);
  res.json(items);
});

// 前端追踪接口 (不需要认证)
app.post('/api/track', (req, res) => {
  const { ip, country, city, device, os, browser, url, referer } = req.body;
  db.prepare('INSERT INTO analytics (ip, country, city, device, os, browser, url, referer) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').run(ip, country, city, device, os, browser, url, referer);
  res.json({ success: true });
});

// ============ 前端公开接口 ============

// 获取公开的社交链接
app.get('/api/social-links', (req, res) => {
  const items = db.prepare('SELECT * FROM social_links WHERE enabled = 1 ORDER BY sort_order').all();
  res.json(items);
});

// 获取公开的导航
app.get('/api/navigation', (req, res) => {
  const lang = req.query.lang || 'en';
  const items = db.prepare('SELECT * FROM navigation WHERE lang = ? ORDER BY sort_order').all();
  res.json(items);
});

// AI聊天接口 (公开)
app.post('/api/ai-chat', async (req, res) => {
  const { message, language = 'en', visitorId } = req.body;
  const sessionId = require('uuid').v4();
  
  // 简单AI回复 (生产环境可接入OpenAI)
  let response = generateAIResponse(message, language);
  
  // 记录对话
  db.prepare('INSERT INTO ai_chats (session_id, visitor_id, message, response, language) VALUES (?, ?, ?, ?, ?)').run(sessionId, visitorId, message, response, language);
  
  res.json({ response, sessionId });
});

// 简单AI回复逻辑
function generateAIResponse(message, language) {
  const lowerMsg = message.toLowerCase();
  
  const responses = {
    en: {
      price: "For pricing details on our pellet machines, please contact our sales team via WhatsApp +86-15207548 or email pellet@macreat.com",
      machine: "We offer various biomass pellet machines including LD700C, RH&RV series, and complete production lines. Visit our products page for details.",
      delivery: "We provide worldwide shipping. Delivery time varies by destination, typically 15-45 days after order confirmation.",
      warranty: "Our machines come with 1-year warranty. We also provide lifetime technical support and spare parts supply.",
      default: "Thank you for your inquiry! Our team will respond within 24 hours. For urgent matters, please WhatsApp us at +86-15207548."
    },
    zh: {
      price: "关于颗粒机价格详情，请联系销售团队：WhatsApp +86-15207548 或邮件 pellet@macreat.com",
      machine: "我们提供各种生物质颗粒机，包括LD700C、RH&RV系列以及完整的生产线。请访问产品页面查看详情。",
      delivery: "我们提供全球运输。交货时间因目的地而异，通常在确认订单后15-45天。",
      warranty: "我们的机器提供1年保修。我们还提供终身技术支持和备件供应。",
      default: "感谢您的咨询！我们的团队将在24小时内回复。如有紧急事项，请联系WhatsApp +86-15207548。"
    },
    id: {
      price: "Untuk detail harga mesin pellet, hubungi tim sales kami melalui WhatsApp +86-15207548 atau email pellet@macreat.com",
      machine: "Kami menawarkan berbagai mesin pellet biomassa termasuk LD700C, seri RH&RV, dan lini produksi lengkap. Kunjungi halaman produk kami untuk detailnya.",
      delivery: "Kami menyediakan pengiriman ke seluruh dunia. Waktu pengiriman bervariasi berdasarkan tujuan, biasanya 15-45 hari setelah konfirmasi pesanan.",
      warranty: "Mesin kami dilengkapi garansi 1 tahun. Kami juga menyediakan dukungan teknis seumur hidup dan pasokan suku cadang.",
      default: "Terima kasih atas pertanyaan Anda! Tim kami akan merespons dalam 24 jam. Untuk masalah mendesak, hubungi kami di WhatsApp +86-15207548."
    }
  };
  
  const langResponses = responses[language] || responses.en;
  
  if (lowerMsg.includes('price') || lowerMsg.includes('报价') || lowerMsg.includes('harga')) {
    return langResponses.price;
  } else if (lowerMsg.includes('machine') || lowerMsg.includes('机器') || lowerMsg.includes('mesin')) {
    return langResponses.machine;
  } else if (lowerMsg.includes('delivery') || lowerMsg.includes('物流') || lowerMsg.includes('pengiriman')) {
    return langResponses.delivery;
  } else if (lowerMsg.includes('warranty') || lowerMsg.includes('售后') || lowerMsg.includes('garansi')) {
    return langResponses.warranty;
  }
  
  return langResponses.default;
}

// 启动服务器
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║          Macreat 后台管理系统                               ║
╠═══════════════════════════════════════════════════════════╣
║  后台地址: http://localhost:${PORT}/admin                    ║
║  默认账号: admin                                            ║
║  默认密码: macreat2024                                      ║
╠═══════════════════════════════════════════════════════════╣
║  API端点:                                                   ║
║  - POST /api/admin/login        登录                       ║
║  - GET/POST /api/admin/navigation  导航管理                ║
║  - GET/POST /api/admin/carousel    轮播图管理              ║
║  - GET/POST /api/admin/social-links 社交链接               ║
║  - GET /api/admin/analytics/summary 数据统计               ║
║  - POST /api/ai-chat             AI客服                     ║
║  - POST /api/track              访问追踪                    ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;