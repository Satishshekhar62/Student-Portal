import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import './Styles/App.css'; // Assuming this file is in src/Styles
import Home from './Components/Home';
import StudentPortal from './Components/StudentPortal';
import FacultyPortal from './Components/FacultyPortal';
import Events from './Components/Events';
import News from './Components/News';
import Footer from './Components/Footer';
import StudentRegistration from './Components/StudentRegistration';

import FacultyRegistration from './Components/FacultyRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/student-portal' element = {<StudentPortal />} />
        <Route path='/faculty-portal' element = {<FacultyPortal />} />
        <Route path='/events' element ={<Events />} />
        <Route path='/news' element = {<News />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path='/faculty-register' element = {<FacultyRegistration />} />
        
      </Routes>
      
      </div>

      <Footer />
      
    </Router>
  );
}

export default App;
