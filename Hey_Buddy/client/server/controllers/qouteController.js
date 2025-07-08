const axios = require('axios');

exports.getDailyQuote = async (req, res) => {
  try {
    const { data } = await axios.get(process.env.ZEN_QUOTES_URL);
    const quote = `${data[0].q} — ${data[0].a}`;
    res.status(200).json({ quote });
  } catch (err) {
    console.error('Error fetching daily quote:', err);
    res.status(500).json({ error: 'Could not fetch quote' });
  }
};

