// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIZ4hP6wz-36hZ244yubLpR3RGg30UcKo",
  authDomain: "learning-lab-49eb6.firebaseapp.com",
  projectId: "learning-lab-49eb6",
  storageBucket: "learning-lab-49eb6.firebasestorage.app",
  messagingSenderId: "552825723183",
  appId: "1:552825723183:web:de6cd1a0230f0b23f0a9da",
  measurementId: "G-HVZLL11V2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
