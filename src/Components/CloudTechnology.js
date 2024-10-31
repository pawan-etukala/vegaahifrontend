import React from 'react';

const CloudTechnology = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Cloud Technology Courses</h2>
      <table className="table  table text-center table-bordered table-striped">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>view course content</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cloud Technology</td>
            <td><a href="">click here..!</a></td>
            
          </tr>
          <tr>
            <td>AWS + Cloud</td>
            <td><a href="">click here..!</a></td>
          
          </tr>
          <tr>
            <td>AWS (DevOps + Kubernetes)</td>
            <td><a href="">click here..!</a></td>
           
          </tr>
          <tr>
            <td>Networking</td>
            <td><a href="">click here..!</a></td>
            
          </tr>
          <tr>
            <td>Servers (Windows & Linux)</td>
            <td><a href="">click here..!</a></td>
         
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CloudTechnology;
