// src/components/Drugs.jsx
import React from 'react';

function Drugs({ groupName }) {
  return (
    <div className="app-container">
      <h1>{groupName} - Drugs</h1>
      <hr className="line" />
      <div className="center-image-container">
        <div className="image-text">No drugs added yet</div>
      </div>
    </div>
  );
}

export default Drugs;
