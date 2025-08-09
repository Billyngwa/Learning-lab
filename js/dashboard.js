// Dashboard user profile handler
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Function to update UI with user profile
async function updateUserProfile(user) {
  // Get UI elements
  const usernameElement = document.querySelector('.username');
  const profileImage = document.querySelector('.profile-image');
  
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    
    try {
      // First, update from auth data
      // Update username - display name or email if no display name
      usernameElement.textContent = user.displayName || user.email.split('@')[0];
      
      // Update profile image if available
      if (user.photoURL) {
        profileImage.src = user.photoURL;
      }
      
      // Try to get additional user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("Additional user data:", userData);
        
        // If we have a custom username in Firestore, use that instead
        if (userData.fullName) {
          usernameElement.textContent = userData.fullName;
        } else if (userData.firstName && userData.lastName) {
          usernameElement.textContent = `${userData.firstName} ${userData.lastName}`;
        }
        
        // If we have a custom profile image in Firestore, use that
        if (userData.profileImage) {
          profileImage.src = userData.profileImage;
        }
        
        // Update other dashboard elements with user data
        // For example, you could update course progress, achievements, etc.
        updateDashboardStats(userData);
      } else {
        console.log("No additional user data found in Firestore");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  } else {
    // No user is signed in, redirect to login page
    console.log("No user signed in, redirecting to login");
    window.location.href = './login.html';
  }
}

// Function to update dashboard statistics based on user data
function updateDashboardStats(userData) {
  // This is a placeholder function that you can expand
  // to update statistics based on the user's data
  
  // Example: Update active courses count if available
  if (userData.activeCourses) {
    const activeCoursesElement = document.querySelector('.stat-card:nth-child(1) h3');
    if (activeCoursesElement) {
      activeCoursesElement.textContent = userData.activeCourses.length || 0;
    }
  }
  
  // Example: Update certifications count if available
  if (userData.certifications) {
    const certificationsElement = document.querySelector('.stat-card:nth-child(2) h3');
    if (certificationsElement) {
      certificationsElement.textContent = userData.certifications.length || 0;
    }
  }
  
  // You can expand this to update other elements as needed
}

// Function to handle logout
function handleLogout() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("User signed out successfully");
    window.location.href = './login.html';
  }).catch((error) => {
    // An error happened.
    console.error("Error signing out:", error);
  });
}

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  updateUserProfile(user);
});

// Export functions to be used in dashboard.html
export { updateUserProfile, handleLogout };
