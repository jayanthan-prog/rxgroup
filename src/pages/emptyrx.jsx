import React, { useState } from 'react';
import '../styles/App.css';
import image from '../assets/image.png'; // Import the main image
import icon from '../components/icon.svg'; // Import the icon for the button

// Modal Component for creating Rx Group
function Modal({ isOpen, onClose, onSave }) {
  const [groupName, setGroupName] = useState(""); // State to store the entered RX Group name

  if (!isOpen) return null; // If modal is not open, don't render anything

  const handleSave = () => {
    if (groupName.trim()) {
      onSave(groupName); // Pass the entered group name to the parent
      onClose(); // Close the modal after saving
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span>CREATE RX GROUP</span>
          <button className="modal-close-button" onClick={onClose}>
            &times; {/* Close button */}
          </button>
        </div>
        <div className="modal-body">
          <label htmlFor="group-name">RX Group Name</label>
          <input
            id="group-name"
            type="text"
            placeholder="Enter RX Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)} // Update group name state
            className="input-group"
          />
        </div>
        <div className="modal-footer">
          <button className="save-button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

// New page after saving the RX Group name
function AddDrugsPage({ groupName }) {
  return (
    <div className="app-container">
      <div className="top-left-container">
        {/* Show RX Group name with "- Drugs" */}
        <div className="text">{groupName} - Drugs</div>
        <hr className="line" /> {/* Horizontal line */}
      </div>

      {/* Top right Save button */}
      <div className="top-right-container">
        <button className="save-button">SAVE</button>
      </div>

      {/* Add additional content related to adding drugs here */}
      <div className="center-image-container">
        <div className="image-text">
          {/* Content here can include drug search, etc. */}
          No drugs added yet
        </div>
      </div>
    </div>
  );
}

function EmptyRx() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState(""); // Store the RX Group name
  const [isGroupCreated, setIsGroupCreated] = useState(false); // Track whether the RX group is created

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveGroup = (name) => {
    setGroupName(name); // Save the RX Group name
    setIsGroupCreated(true); // Mark the group as created to show the new page
  };

  if (isGroupCreated) {
    // If the RX Group is created, show the AddDrugsPage
    return <AddDrugsPage groupName={groupName} />;
  }

  return (
    <div className="app-container">
      <div className="top-left-container">
        <div className="text">Rx-Groups</div>
        <div className="line"></div>
      </div>

      {/* Add image container */}
      <div className="center-image-container">
        <img src={image} alt="Center" className="center-image" />
        <div className="image-text">
          Create a group of drugs to provide <br />
          prescription easily during consultation<br />
          {/* Button with image inside */}
          <button className="add-rxgroup-button" onClick={openModal}>
            <img src={icon} alt="Icon" className="button-icon" />
            Add Rx Group
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveGroup} />
    </div>
  );
}

export default EmptyRx;
