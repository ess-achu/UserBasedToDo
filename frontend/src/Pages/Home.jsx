import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import '../Pages/Styles/Home.css'; // Import your CSS file for styling

// Functional component for the homepage
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Todo App</h1>
      <p>
        Manage your tasks efficiently with our simple and powerful todo app.
        Sign in or create an account to get started.
      </p>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
