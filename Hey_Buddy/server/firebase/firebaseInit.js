const admin = require('firebase-admin');
const serviceAccount = require('./serviceKey.json'); // Secure your key!

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
