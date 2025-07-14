const express = require('express');
const router = express.Router();
const admin = require('../firebase');

router.post('/sendQuote', async (req, res) => {
  const { quote, tokens } = req.body;

  const message = {
    notification: {
      title: "Your Boost ✨",
      body: quote
    },
    tokens: tokens
  };

  try {
    const response = await admin.messaging().sendMulticast(message);
    res.json({ success: response.successCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
