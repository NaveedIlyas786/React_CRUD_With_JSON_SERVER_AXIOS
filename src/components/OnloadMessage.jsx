import React, { useState, useEffect } from 'react';

const OnloadMessage = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 5000);

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, []);

  return (
    <div className={`centered-card ${isActive ? 'active' : 'inactive'}`}>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Welcome Rspectable !</h1>
          <div>
          <h5 className="card-text">ALL Set, Deployment of "JSON SERVER" is remaining !</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnloadMessage;
