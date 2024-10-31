import React from 'react';

const Testing = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Testing Courses</h2>
      <table className="table table text-center table-bordered table-striped">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>view course content</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manual Testing</td>
            <td><a href="">click here..!</a></td>
           
          </tr>
          <tr>
            <td>Manual Testing + Automation Testing (Selenium)</td>
            <td><a href="">click here..!</a></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Testing;
