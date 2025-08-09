// Sample script showing how to use Firebase in other pages

// Import what you need from the firebase-config.js file
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Example: Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user.uid);
    // You can access user info like:
    // user.email
    // user.displayName
    // user.photoURL
    // etc.
  } else {
    // User is signed out
    console.log("User is signed out");
    // You might want to redirect to login page
    // window.location.href = './pages/login.html';
  }
});

// Example: Add data to Firestore
async function addDataToFirestore(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    return null;
  }
}

// Example usage:
// addDataToFirestore('users', {
//   name: 'John Doe',
//   email: 'john@example.com',
//   role: 'student'
// });

// Export functions that might be useful in other files
export { addDataToFirestore };
