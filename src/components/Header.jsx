import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    //usestate hook to store current date and time
  const [currentDate, setCurrentDate] = useState(new Date());


   //making useeffect hook with dependency as an empty array to continue change the date
  useEffect(() => {
    //setting up timer for udpating current date every second
    //currentDate is changing every 1 second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    
});

  const formatDate = (date) => {
             const options = { year: 'numeric',
                               month: 'long', 
                               day: 'numeric', 
                               hour: '2-digit', 
                               minute: '2-digit'
                            
                            };

    return date.toLocaleDateString(undefined, options);
  };

  return (
    <header className="header">
        <div className='first'>
         <img src={logo} alt="KODERS Logo" className="logo" />
         <h2>Employees Activity Dashboard</h2>
        </div>
        <div className='second'>
        <p>{formatDate(currentDate)}</p>
        </div>
      
    </header>
  );
}

export default Header;
