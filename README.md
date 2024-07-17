# Firebase_Database

### 1. Setup Firebase
#### a. Create a Firebase Project
1. Go to the Firebase Console at [firebase.google.com](https://firebase.google.com/).
2. Click on "Get Started" and then "Add Project".
3. Follow the on-screen instructions to create a new project.

#### b. Set Up Firebase Authentication
1. In the Firebase Console, navigate to "Authentication" in the left sidebar.
2. Click on the "Sign-in method" tab.
3. Enable "Google" as a sign-in provider and configure it as needed.

#### c. Obtain Firebase Configuration Object
1. In the Firebase Console, go to "Project Settings" (gear icon).
2. Scroll down to "Your apps" and click on the web icon ("</>").
3. Follow the instructions to register your app and obtain the Firebase configuration object. This object includes keys like `apiKey`, `authDomain`, `projectId`, etc.

### 2. Project Setup
#### a. Create a New React Application
1. Ensure you have Node.js and npm installed.
2. Create a new React app using Vite by running the following command in your terminal:
   ```bash
   npm create vite@latest my-react-app --template react
   ```
3. Navigate into your project directory:
   ```bash
   cd my-react-app
   ```

#### b. Install Firebase SDK and `react-router-dom`
1. Install the Firebase SDK:
   ```bash
   npm install firebase
   ```
2. Install `react-router-dom` for routing:
   ```bash
   npm install react-router-dom
   ```

### 3. Firebase Authentication
#### a. Configure Firebase in Your Application
1. Create a new file (e.g., `firebaseConfig.js`) and add your Firebase configuration object.
2. Initialize Firebase in your app using this configuration.

#### b. Implement Google Sign-In Functionality
1. In your app, create a function to handle Google Sign-In using Firebase Authentication.
2. Use Firebase's `signInWithPopup` method with GoogleAuthProvider to authenticate users.

### 4. Components
#### a. Navbar.jsx
1. Create a navigation bar component that includes links to the home page and dashboard.
2. Include a sign-out button that appears if the user is authenticated.

#### b. PrivateRoutes.jsx
1. Create a component to check if a user is authenticated.
2. If authenticated, render the requested component; if not, redirect to the login page.

#### c. Dashboard.jsx
1. Create a dashboard component that fetches and displays products from an API (e.g., Fake Store API).

### 5. Routing
#### a. Set Up Routing
1. Use `react-router-dom` to set up routing for your application.
2. Define routes for the home page, login page, and dashboard.
3. Ensure the dashboard route is protected by using the `PrivateRoutes` component.

### Summary of Steps:
1. **Firebase Setup**: Create a project, enable Google Sign-In, and obtain the configuration object.
2. **Project Setup**: Create a new React app with Vite and install necessary dependencies.
3. **Authentication**: Configure Firebase in the app and implement Google Sign-In.
4. **Components**: Create Navbar, PrivateRoutes, and Dashboard components.
5. **Routing**: Define routes and protect the dashboard route.

