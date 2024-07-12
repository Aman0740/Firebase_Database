Project Video Link Task 1: https://drive.google.com/file/d/1U1e7daZ_mipd-wNVTts4jOne0PqQYV3a/view?usp=sharing


==================== Project Description ====================



![Screenshot 2024-07-05 131048](https://github.com/jay-228/React-Fairebase-GoogleAuth-Login/assets/122542095/769fe144-d11c-473d-b71c-5746dcbba4b3)
![Screenshot 2024-07-05 131102](https://github.com/jay-228/React-Fairebase-GoogleAuth-Login/assets/122542095/4bd475d5-2c63-4fcb-8e69-d4be5188a9e7)
![Screenshot 2024-07-05 131117](https://github.com/jay-228/React-Fairebase-GoogleAuth-Login/assets/122542095/d7df1621-352d-4e2a-9c1c-654a7217bb20)




# **Firebase Database**

**Objective:**
The objective of this assignment is to create a web application that uses Firebase for authentication and implements private routes that can only be accessed by authenticated users. The authentication method to be used is Google Sign-In provided by Firebase.

**Requirements:**

1. **Setup Firebase:**
    - Create a Firebase project in the Firebase console.
    - Set up Firebase Authentication and enable Google Sign-In.
    - Obtain the Firebase configuration object for your project.
2. **Project Setup:**
    - Create a new React application.
    - Install Firebase SDK and `react-router-dom`.
3. **Firebase Authentication:**
    - Configure Firebase in your application using the configuration object obtained from the Firebase console.
    - Implement Google Sign-In functionality. The user should be able to sign in using their Google account.
4. **Components:**
    - **Navbar.jsx:** Create a simple navigation bar that includes links to the home page and dashboard, and a sign-out button if the user is authenticated.
    - **PrivateRoutes.jsx:** Create a component that checks if the user is authenticated and either renders the requested component or redirects to the login page.
    - **Dashboard.jsx:** Create a dashboard component that is only accessible to authenticated users  and fetches products from an API to display.
    
    https://fakestoreapi.com/products
    
5. **Routing:**
    - Set up routing for the application.
    - Define routes for the home page, login page, and the dashboard.
    - Ensure the dashboard route is protected and can only be accessed by authenticated users.





