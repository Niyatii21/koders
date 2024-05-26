import React from 'react';
import goldmedal from '../assets/goldmedal.png';
import silvermedal from '../assets/silvermedal.jpg';
import bronzemedal from '../assets/bronzemedal.png';
import './EmployeeRow.css';

function EmployeeRow({ employee }) {
  const getMedal = (rank) => {
    switch (rank) {
      case 1:
        return <img src={goldmedal} alt="Gold Medal" className="medal" />;
      case 2:
        return <img src={silvermedal} alt="Silver Medal" className="medal" />;
      case 3:
        return <img src={bronzemedal} alt="Bronze Medal" className="medal" />;
      default:
        return null;
    }
  };

  return (
    <tr>
      <td>{getMedal(employee.rank)} {employee.rank}</td>
      <td>{employee.name}</td>
      <td>{employee.designation}</td>
      <td>{employee.hoursWorked}</td>
      <td>{employee.changes}</td>
    </tr>
  );
}

export default EmployeeRow;
