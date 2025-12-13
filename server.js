require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// 1. Serve static files (css, js, images)
app.use(express.static(__dirname));

// 2. Serve the HTML file for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// The Proxy Route
app.get('/api/news', async (req, res) => {
  const location = req.query.q;
  if (!location) return res.status(400).json({ error: 'Location is required' });

  try {
    const apiKey = process.env.NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(location)}&apiKey=${apiKey}`;

    const apiRes = await fetch(url);
    const data = await apiRes.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));