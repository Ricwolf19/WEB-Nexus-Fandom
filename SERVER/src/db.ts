import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import 'dotenv/config';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  databaseURL: process.env.DATABASE_URL,
};

// Initialize firebase app
const app = initializeApp(firebaseConfig);

// Export database instance
export const db = getDatabase(app);
