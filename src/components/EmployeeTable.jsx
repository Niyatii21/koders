import React, { useState, useEffect } from 'react';
import EmployeeRow from './EmployeeRow';
import man from '../assets/man.jpg';
import imgg from '../assets/imgg.png';
import './EmpTable.css';

function EmployeeTable() {
  const [emp, setEmp] = useState({});

  useEffect(() => {
    const initialEmp = {
      1: { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '74(2)', changes: '+1.5 hrs' },
      2: { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '74(1)', changes: '+1.5 hrs' },
      3: { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '74(0)', changes: '+1.5 hrs' },
      4: { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '73(7)', changes: '+1.5 hrs' },
      5: { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hoursWorked: '73(7)', changes: '+1.5 hrs' },
      6: { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '73(2)', changes: '-1.5 hrs' },
      7: { rank: 7, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '72(4)', changes: '-1.5 hrs' },
      8: { rank: 8, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '72(1)', changes: '-1.5 hrs' },
      9: { rank: 9, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '72(0)', changes: '-1.5 hrs' },
      10: { rank: 10, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '71(8)', changes: '-1.5 hrs' }
    };
    setEmp(initialEmp);
  }, []);

  return (
    <div className="container">
      {/* container child one */}
      <table className="employee-table">
        <colgroup>
            {/* setting the width of the columns */}
            <col style={{ width: '5%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
          <thead>
            <tr id="first">
              <th>Rank</th>
              <th>Name</th>
              <th>Designation</th>
              <th>No. of hours worked</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(emp).map((employee, index) => (
              <EmployeeRow key={index} employee={employee} />
            ))}
          </tbody>
      </table>

           {/* employee of the month section 
              container child two*/}
        <div className="emp-month">
          <div className='emp-month-content'>
            <img src={man} alt="Employee of the Month" className='man-img' />
            <h3>Employee of the Month</h3>
            <p>Rakesh Sharma</p>
            <h6>UI/UX Designer</h6>
            <img src={imgg} alt="Employee of the Month" className='img' />
          </div>
          
        </div>
      
    </div>
  );
}

export default EmployeeTable;
