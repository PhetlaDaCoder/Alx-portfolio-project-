const cron = require('node-cron');
const axios = require('axios');
const admin = require('../firebase');
const { getUserDeviceTokens } = require('./userService'); // Your method to pull tokens

// Run every day at 8 AM
cron.schedule('0 8 * * *', async () => {
  try {
    const { data } = await axios.get(process.env.ZEN_QUOTES_API);
    const quote = `${data[0].q} — ${data[0].a}`;

    const tokens = await getUserDeviceTokens(); // Array of FCM tokens

    const message = {
      notification: {
        title: "Daily Motivation 🌞",
        body: quote
      },
      tokens: tokens
    };

    const response = await admin.messaging().sendMulticast(message);
    console.log(`Sent to ${response.successCount} users`);
  } catch (err) {
    console.error("Quote push failed:", err.message);
  }
});

