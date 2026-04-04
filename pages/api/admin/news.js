const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../../data/admin.db'));

export default function handler(req, res) {
  if (req.method === 'GET') {
    const lang = req.query.lang || 'en';
    const news = db.prepare('SELECT * FROM news WHERE enabled = 1 ORDER BY sort_order ASC').all();
    const result = news.map(n => ({
      id: n.id,
      title: lang === 'zh' && n.title_en ? n.title_en : n.title,
      content: lang === 'zh' && n.content_en ? n.content_en : n.content,
      image: n.image,
      category: n.category,
      created_at: n.created_at
    }));
    return res.status(200).json(result);
  }
  res.status(405).json({ error: 'Method not allowed' });
}