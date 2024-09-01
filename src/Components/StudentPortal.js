// src/components/StudentPortal.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/StudentPortal.css'; // Import CSS

const StudentPortal = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Additional student information (for demonstration)
  const [studentName, setStudentName] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [courses, setCourses] = useState([]);
  const [profilePicture, setProfilePicture] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('student'));

    // Check if email and password match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      setLoggedIn(true);
      // Simulating retrieval of additional user information
      setStudentName(storedUser.name || 'John Doe');
      setEnrollmentNumber(storedUser.enrollmentNumber || '123456');
      setCourses(storedUser.courses || ['Mathematics', 'Science', 'History']);
      setProfilePicture(storedUser.profilePicture || '');
    } else {
      alert('Login failed. Please check your email and password.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail('');
    setPassword('');
    setStudentName('');
    setEnrollmentNumber('');
    setCourses([]);
    setProfilePicture('');
  };

  const handleNavigation = (e, path) => {
    if (loggedIn) {
      e.preventDefault();
      alert('Please log out before navigating to a different page.');
    } else {
      navigate(path);
    }
  };

  if (loggedIn) {
    return (
      <div className="student-portal">
        <h2>Welcome, {studentName}!</h2>
        {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
        <p>Email: {email}</p>
        <p>Enrollment Number: {enrollmentNumber}</p>

        <h3>Your Courses</h3>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        {/* Links to other pages */}
        <nav>
          <a href="/" onClick={(e) => handleNavigation(e, '/')}>Home</a> |{' '}
          <a href="/about" onClick={(e) => handleNavigation(e, '/about')}>About</a> |{' '}
          <a href="/contact" onClick={(e) => handleNavigation(e, '/contact')}>Contact</a>
        </nav>

        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="login-form">
      <h2>Student Login</h2>
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

      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default StudentPortal;
