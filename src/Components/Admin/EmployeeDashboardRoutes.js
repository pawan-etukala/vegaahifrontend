import React from "react";
import {  Route, Routes } from "react-router-dom";
import "../../css/Admin.css";
import EmployeeSidebar from "./EmployeeSidebar";
import EmployeeDashboard from "./EmployeeDashboard";
import Profile from "./Profile";


function EmployeeDashboardRoutes() {
  return (
    <>
      <div className="d-flex">
        <EmployeeSidebar />

        <div className="col-md-9 col-lg-10">
          <Routes>
            <Route path="/" element={<EmployeeDashboard/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboardRoutes;
