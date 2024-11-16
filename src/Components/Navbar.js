import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaInfoCircle, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import Logo from '../Assests/vegaahilogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle px-4 py-1 shadow-sm">
      <div className="container-fluid">
        
        {/* Logo and Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={Logo} 
            alt="Company Logo"
            style={{ height: '80px', marginRight: '10px' }}
          />
          <div className="d-none d-lg-block">
            <h3 className="mb-0 fw-bold">VEGAAHI IT PVT LTD</h3>
            <div className="small">Regd No: U62013TS2024PTC181697</div>
          </div>
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link text-dark">
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link text-dark">
                <FaInfoCircle className="me-1" /> About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/services" className="nav-link text-dark">
                <FaBriefcase className="me-1" /> Services
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link text-dark">
                <FaEnvelope className="me-1" /> Contact
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
