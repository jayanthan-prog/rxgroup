import React, { useState } from 'react';
import '../styles/App.css';
import image from '../assets/image.png'; // Main image import
import icon from '../components/icon.svg'; // Icon for the button import
import profile from '../assets/profile.svg'; // Profile image import
import emptyImage from '../assets/empty.svg'; // Empty image import
import Navbar from '../components/navbar/navbar.jsx'; // Import the Navbar component

// Modal Component for creating Rx Group
function Modal({ isOpen, onClose, onSave }) {
  const [groupName, setGroupName] = useState(""); // Store RX Group name

  if (!isOpen) return null; // Don't render if the modal is not open

  const handleSave = () => {
    if (groupName.trim()) {
      onSave(groupName); // Pass group name to parent
      onClose(); // Close modal after saving
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
            onChange={(e) => setGroupName(e.target.value)}
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

// Page after saving the RX Group
function AddDrugsPage({ groupName }) {
  const [drugs, setDrugs] = useState([]); // State for drugs (assuming you manage drugs here)

  return (
    <div className="app-container">
      <Navbar /> {/* Place Navbar here */}
      <div className="top-left-container">
        <div className="text">{groupName} - Drugs</div>
        <hr className="line" />
      </div>
      <div className="top-right-container">
        <button className="save-button">SAVE</button>
      </div>
      <div className="center-image-container">
        {drugs.length === 0 && (
          <img src={emptyImage} alt="No Drugs" className="empty-image" />
        )}
        <div className="image-text">No drugs added yet</div>
      </div>
    </div>
  );
}

function EmptyRx() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState(""); // Store RX Group name
  const [isGroupCreated, setIsGroupCreated] = useState(false); // Track group creation

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveGroup = (name) => {
    setGroupName(name);
    setIsGroupCreated(true);
  };

  if (isGroupCreated) {
    return <AddDrugsPage groupName={groupName} />;
  }

  return (
    <div className="app-container">
      <Navbar /> {/* Place Navbar here */}
      <div className="top-left-container">
        <div className="text">Rx-Groups</div>
        <div className="line"></div>
      </div>

      {/* Top-right profile container */}
      <div className="top-right-container">
        <img src={profile} alt="Profile" className="profile-icon" />
      </div>

      <div className="center-image-container">
        <img src={image} alt="Center" className="center-image" />
        <div className="image-text">
          Create a group of drugs to provide <br />
          prescription easily during consultation<br />
          <button className="add-rxgroup-button" onClick={openModal}>
            <img src={icon} alt="Icon" className="button-icon" />
            Add Rx Group
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveGroup} />
    </div>
  );
}

export default EmptyRx;
