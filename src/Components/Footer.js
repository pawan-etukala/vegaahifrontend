import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          
          {/* Course List Column */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Course List</h5>
            <ul className="list-unstyled">
              <li><Link to="/trainings" className="text-white">Training</Link></li>
              <li><Link to="/acadamicprojects" className="text-white">Academic Projects</Link></li>
              <li><Link to="/publications" className="text-white">Publications</Link></li>
              <li><Link to="/" className="text-white"> Go to Home page</Link></li>
            </ul>
          </div>
          
          {/* Service Column */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Service</h5>
            <ul className="list-unstyled">
              <li><Link to="/testimonaials" className="text-white">Educational Clients</Link></li>
              <li><Link to="/developmentclients" className="text-white">Development Clients</Link></li>
            </ul>
          </div>
          
          {/* Blog Column */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Blog</h5>
            <ul className="list-unstyled">
              <li><Link to="/latestnews" className="text-white">Latest News</Link></li>
              <li><Link to="/updates" className="text-white">Updates</Link></li>
              <li><Link to="/tutorials" className="text-white">Tutorials</Link></li>
            </ul>
          </div>

          {/* Careers Column */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Careers</h5>
            <ul className="list-unstyled">
              <li><Link to="/jobs" className="text-white">Job Openings</Link></li>
              <li><Link to="/internships" className="text-white">Internship Opportunities</Link></li>
              {/* <li><Link to="/apply" className="text-white">Apply Now</Link></li> */}
              <li><Link to="/lifeatvegaahi" className="text-white">Life at Vegaahi</Link></li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Address</h5>
            <address>
              Sai Pooja Complex, 1st Floor<br />
              Beside Big-C, Kishanpura<br />
              Hanamkonda, Warangal, Telangana 506001<br />
              Email: <a href="mailto:vegaahiitpvt.ltd@vegaahi.com" className="text-white">vegaahiitpvt.ltd@vegaahi.com</a>
              , <a href="mailto:vegaahiit@gmail.com" className="text-white">vegaahiit@gmail.com</a><br />
              Phone: <a href="tel:9494579988" className="text-white">9494579988</a><br></br>
              <a href="tel:9494569988" className="text-white">9494569988</a>
            </address>
          </div>

          {/* Location Column */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5>Location</h5>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.296200126762!2d79.55611577464066!3d18.011452284528698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f7d0d2f8115%3A0xcac6d50449738e5b!2sVEGAAHI%20IT%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1731644668362!5m2!1sen!2sin"
              width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <hr className="bg-white my-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} VEGAAHI IT PVT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
