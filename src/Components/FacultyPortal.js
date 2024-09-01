// src/components/FacultyPortal.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FacultyPortal.css'; // Import CSS

const FacultyPortal = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve faculty data from localStorage
    const storedFaculty = JSON.parse(localStorage.getItem('faculty'));

    // Check if email and password match
    if (storedFaculty && storedFaculty.email === email && storedFaculty.password === password) {
      alert('Login successful!');
      setLoggedIn(true);
    } else {
      alert('Login failed. Please check your email and password.');
    }
  };

  const handleLogout = () =>{
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  }

  if (loggedIn) {
    return (
      <div className="faculty-portal">
        <h2>Welcome, {email}</h2>
        <p>Your Profile</p>
        {/* Add more profile information here */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="login-form">
      <h2>Faculty Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="/faculty-register">Register here</Link></p>
      
    </div>
  );
};

export default FacultyPortal;
