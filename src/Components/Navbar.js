import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    
        <div className="navbar-brand">Welcome to your college</div>
        <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/student-portal'>Student Portal</Link></li>
            <li><Link to ='/faculty-portal'>Faculty Portal</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/news">News</Link></li>
        </ul>
    </nav>
    
  )
}

export default Navbar
