// src/components/StudentRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/StudentRegistration.css';

const StudentRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [courses, setCourses] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Split courses string into an array
    const courseList = courses.split(',').map((course) => course.trim());

    const newStudent = {
      name,
      email,
      password,
      enrollmentNumber,
      courses: courseList,
      profilePicture,
    };

    // Save the student data to localStorage
    localStorage.setItem('student', JSON.stringify(newStudent));
    alert('Registration successful!');

    // Clear form fields
    setName('');
    setEmail('');
    setPassword('');
    setEnrollmentNumber('');
    setCourses('');
    setProfilePicture('');

    // Redirect to the student portal page
    navigate('/student-portal');
  };

  return (
    <div className="registration-form">
      <h2>Student Registration</h2>
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
        <div>
          <label>Enrollment Number:</label>
          <input
            type="text"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Courses (comma-separated):</label>
          <input
            type="text"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
