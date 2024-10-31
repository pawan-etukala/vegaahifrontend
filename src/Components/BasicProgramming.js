import React from 'react';

const BasicProgramming = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Basic Programming Courses</h2>
      <div className="d-flex justify-content-center">
        <table className="table text-center table-bordered table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>View Course Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic Computer + C Language</td>
              <td>
                <a
                  href="https://drive.google.com/file/d/12mYS11PfFwCRiOIP_zag9Egdkgo_cx5i/view?usp=sharing"
                  aria-label="View Basic Computer and C Language course content"
                >
                  Click here..!
                </a>
              </td>
            </tr>
            <tr>
              <td>C Language + Data Structures</td>
              <td>
                <a
                  href="#"
                  aria-label="View C Language and Data Structures course content"
                >
                  Click here..!
                </a>
              </td>
            </tr>
            <tr>
              <td>C Language + DS + C++ + AL (Algorithm)</td>
              <td>
                <a
                  href="#"
                  aria-label="View C Language, Data Structures, C++, and Algorithm course content"
                >
                  Click here..!
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicProgramming;
