const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.join(__dirname, '../../data/admin.db'));

export default function handler(req, res) {
  if (req.method === 'GET') {
    const lang = req.query.lang || 'en';
    const products = db.prepare('SELECT * FROM products WHERE enabled = 1 ORDER BY sort_order ASC').all();
    const result = products.map(p => ({
      id: p.id,
      name: lang === 'zh' && p.name_en ? p.name_en : p.name,
      description: lang === 'zh' && p.description_en ? p.description_en : p.description,
      image: p.image,
      category: p.category,
      specs: p.specs ? JSON.parse(p.specs) : null
    }));
    return res.status(200).json(result);
  }
  res.status(405).json({ error: 'Method not allowed' });
}