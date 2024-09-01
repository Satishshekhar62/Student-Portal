// src/components/FacultyRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/FacultyRegistration.css';

const FacultyRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleRegister = (e) => {
    e.preventDefault();
    const newFaculty = { name, email, password };

    // Save the faculty data to localStorage
    localStorage.setItem('faculty', JSON.stringify(newFaculty));
    alert('Registration successful!');

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');

    // Redirect to the faculty portal page
    navigate('/faculty-portal');
  };

  return (
    <div className="registration-form">
      <h2>Faculty Registration</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FacultyRegistration;
