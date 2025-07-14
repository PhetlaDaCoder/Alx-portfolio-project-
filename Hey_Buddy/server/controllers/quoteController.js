const axios = require('axios');

exports.getDailyQuote = async (req, res) => {
  try {
    const { data } = await axios.get('https://zenquotes.io/api/today');
    res.json(data[0]);
  } catch {
    res.json({ q: "Keep pushing!", a: "Hey_Buddy" });
  }
};
