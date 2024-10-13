import React from 'react';
import './App.css'; // Optional: Create a CSS file for styling if needed

const SaveButton = ({ onClick }) => {
  return (
    <button className="save-button" onClick={onClick}>
      SAVE
    </button>
  );
};

export default SaveButton;
