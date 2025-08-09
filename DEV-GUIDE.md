# Seven Kids Code - Development Guide

## Running the Application Locally

To properly run the application with Firebase integration, you need to use a local development server instead of opening the HTML files directly.

### Starting the Development Server

1. Open a terminal in the project root directory
2. Run the following command:

```bash
npm run start
```

3. Open your browser and navigate to:

```
http://localhost:8080
```

This will serve all your files from a proper HTTP server, which will resolve the CORS issues when using ES6 modules and Firebase.

### Available Pages

- Home: http://localhost:8080/index.html
- Login: http://localhost:8080/pages/login.html
- Register: http://localhost:8080/pages/register.html
- Dashboard: http://localhost:8080/pages/dashboard.html

## Firebase Integration

This project uses Firebase for authentication and possibly other services.

- Firebase configuration is centralized in `js/firebase-config.js`
- Firebase is initialized once in this file and exported for use across the app
- Always import Firebase services from this file to maintain consistency

### Example Import

```javascript
import { auth, db } from '../js/firebase-config.js';
```

## Troubleshooting

- If you see CORS errors, make sure you're accessing the app through the development server (http://localhost:8080) and not via file:// URLs.
- If Firebase isn't connecting, check the browser console for specific error messages.
