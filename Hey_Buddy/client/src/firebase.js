import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD4-hFtox7Viu06V8P20ufpXH1ny9qgMCE",
  authDomain: "hey-buddy-af4c2.firebaseapp.com",
  projectId: "hey-buddy-af4c2",
  messagingSenderId: "10346188544",
  appId: "1:10346188544:web:53667895671bc1100eade5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const messaging = getMessaging(app);

export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "your_vapid_key" });
    console.log("FCM Token:", token);
  } catch (error) {
    console.error("Notification permission denied", error);
  }
};
