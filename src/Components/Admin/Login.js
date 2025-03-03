import React, { useState } from "react";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Correct Font Awesome import
import "../../css/AdminLogin.css"; // Custom CSS
import login from "../../Assests/login.jpg"; // Login image import
import api from "../../api";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      role.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Role, email, and password are required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      // API call for login
      const response = await api.post("/auth/login", {
        role,
        email,
        password,
      });

      // Handle successful login
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Login successful:", response.data);

      // Clear form
      setRole("");
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle login error
      toast.error("Invalid role, email, or password!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear form
      setRole("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container-fluid admin-login">
      <ToastContainer />
      <div className="row align-items-center">
        {/* Left Section with Image */}
        <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
          <img src={login} alt="Admin Login" className="img-fluid" />
        </div>

        {/* Right Section with Form */}
        <div className="col-12 col-md-8">
          <div className="login-form">
            <h2 className="mb-4"> Login</h2>
            <p className="text-muted">
              Please select your role and enter your email and password to
              login.
            </p>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3 ">
                <select
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="MD/Board-of-directors">
                    MD/Board of Directors
                  </option>
                  <option value="Manager">Manager</option>
                  <option value="HR">HR</option>
                  <option value="Employee">Employee</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <label htmlFor="rememberMe" className="ms-2"></label>
                </div>
                <a href="#forgot-password" className="text-decoration-none">
                  Forgot Password ?
                </a>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
