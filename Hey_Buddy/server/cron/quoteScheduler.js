const cron = require('node-cron');
const axios = require('axios');
const admin = require('../firebase/firebaseInit');

const quoteScheduler = () => {
  cron.schedule('0 9 * * *', async () => {
    try {
      const { data } = await axios.get(process.env.ZEN_QUOTES_URL);
      const quote = `${data[0].q} — ${data[0].a}`;

      const message = {
        notification: {
          title: 'Daily Motivation',
          body: quote
        },
        topic: 'motivation'
      };

      await admin.messaging().send(message);
      console.log('🧘 Daily quote sent!');
    } catch (err) {
      console.error('Quote scheduler error:', err);
    }
  });
};

module.exports = quoteScheduler;
