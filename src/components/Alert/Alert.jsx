import React, { useState } from 'react';
import './alert.css';

export default function Alert() {
  const [displayAlert, setDisplayAlert] = useState(true);

  const toggle = () => {
    setDisplayAlert(!displayAlert);
  };

  return (
    <>
      {displayAlert && (
        <div className={displayAlert ? "alert show" : "alert"} onClick={toggle}>
          <span className="closebtn">&times;</span>
          <strong>Notice</strong> Website Still Under Development.
        </div>
      )}
    </>
  );
}
