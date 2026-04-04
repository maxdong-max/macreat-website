const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../../data/admin.db'));

export default function handler(req, res) {
  if (req.method === 'GET') {
    const lang = req.query.lang || 'en';
    const cases = db.prepare('SELECT * FROM cases WHERE enabled = 1 ORDER BY sort_order ASC').all();
    const result = cases.map(c => ({
      id: c.id,
      title: lang === 'zh' && c.title_en ? c.title_en : c.title,
      description: lang === 'zh' && c.description_en ? c.description_en : c.description,
      image: c.image,
      client_name: c.client_name,
      location: c.location,
      capacity: c.capacity
    }));
    return res.status(200).json(result);
  }
  res.status(405).json({ error: 'Method not allowed' });
}