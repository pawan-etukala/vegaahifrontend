import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from'../Assests/vegaahilogo.png';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary-subtle px-3">
      <div className="container-fluid">
   
        <a className="navbar-brand" href="/">
          <img
            src={Logo} 
            alt="Company Logo"
            className="d-inline-block align-text-top"
            style={{ height: '100px'}}
          />
        </a>
        
        <div className="mx-auto text-center">
          <strong> <h3>VEGAAHI IT PVT LTD</h3></strong>
          <div className="small">Regd No: U62013TS2024PTC181697</div>
        </div>
        <div className='d-flex flex-column'>  
        <strong> <h6>E-mail: vegaahiitpvt.ltd@vegaahi.com</h6></strong>
        <strong> <h6>contact No: 9948457532 , 9182635762</h6></strong>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;