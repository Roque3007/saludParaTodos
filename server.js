require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));

app.post('/api/chat', async (req, res) => {
  try {
    const { default: fetch } = await import('node-fetch');
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      }
    );
    const data = await r.json();
    console.log('Gemini full response:', JSON.stringify(data, null, 2));
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));

app.get('/api/maps-key', (req, res) => {
  res.json({ key: process.env.GOOGLE_MAPS_KEY });
});