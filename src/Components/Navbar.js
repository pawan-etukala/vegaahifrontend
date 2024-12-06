import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaInfoCircle, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion
import Logo from '../Assests/vegaahilogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle px-4 py-0 mt-0 shadow-m">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <div className="d-flex justify-content-between w-100 align-items-center">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={Logo}
              alt="Company Logo"
              style={{ height: '60px', marginRight: '10px' }}
            />
            <div className="d-block  d-lg-block">
              <h4 className="mb-0 fw-bold fs-3 fs-sm-4 fs-md-5">VEGAAHI IT PVT LTD</h4>
              <div className="small fs-6 fs-sm-7">Regd No: U62013TS2024PTC181697</div>
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
            style={{ border: 'none', padding: '0' }} // Remove extra border and padding
          >
            <span className="navbar-toggler-icon" style={{ width: '24px', height: '24px' }}></span> {/* Smaller icon */}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end "  id="navbarNav">
          <ul className="navbar-nav text-center ">
            {[{ path: "/", label: "Home", icon: <FaHome className="me-3" /> },
              { path: "/aboutus", label: "About Us", icon: <FaInfoCircle className="me-3" /> },
              { path: "/services", label: "Services", icon: <FaBriefcase className="me-3" /> },
              { path: "/contactus", label: "Contact Us", icon: <FaEnvelope className="me-3" /> }
            ].map((item, index) => (
              <motion.li
                key={index}
                className="nav-item mx-1"
                whileHover={{ scale: 1.1, color: "#007bff" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={item.path} className="nav-link text-dark">
                  {item.icon} {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
