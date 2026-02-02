
import db from '../models/db';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  db.all('SELECT * FROM Products', [], (err, rows) => {
    if (err) {
      console.error('Failed to fetch products:', err.message);
      return res.status(500).json({ error: 'Server error' });
    }

    res.status(200).json(rows);
  });
}
