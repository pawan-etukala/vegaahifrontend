import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
  FaUserLock,
} from "react-icons/fa"; // Changed to FaUserLock
import Logo from "../Assests/vegaahilogo.png";
import "../css/Navbar.css"; // Import the custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary px-3 py-2" id="nav">
      <div className="container-fluid d-flex align-items-center">
        {/* Left Section: Logo and Title */}
        <div className="d-flex align-items-center">
          <Link
            className="navbar-brand d-flex align-items-center text-decoration-none"
            to="/"
          >
            <img
              src={Logo}
              alt="Company Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            <div>
              <h3 className="mb-0 fw-bold text-white text-decoration-none">
                VEGAAHI IT PVT LTD
              </h3>
            </div>
          </Link>
        </div>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler text-white ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Section: Navigation Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {[
              { path: "/", label: "Home", icon: <FaHome className="me-2" /> },
              {
                path: "/aboutUs",
                label: "About",
                icon: <FaInfoCircle className="me-2" />,
              },
              {
                path: "/services",
                label: "Services",
                icon: <FaBriefcase className="me-2" />,
              },
              {
                path: "/contactus",
                label: "Contact Us",
                icon: <FaEnvelope className="me-2" />,
              },
              // { path: "/login", label: "Login", icon: <FaUserLock className="me-2" /> },
            ].map((item, index) => (
              <li key={index} className="nav-item mx-2">
                <Link
                  to={item.path}
                  className="nav-link text-white d-flex align-items-center nav-hover"
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
