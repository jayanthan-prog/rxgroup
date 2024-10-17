import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from '../pages/SignInPage';
import EmptyRx from '../pages/emptyrx';
import DoctorProfile from '../pages/doctorprofile';
import Drugs from '../pages/Drugs';
function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Sign In Route */}
        <Route path="/" element={<SignInPage />} />
        
        {/* Empty Rx Route */}
        <Route path="/emptyrx" element={<EmptyRx />} />

        {/* Doctor Profile Route */}
        <Route path="/doctorprofile" element={<DoctorProfile />} />
        <Route path="/drugs/:groupName" element={<Drugs />} />
      </Routes>
    </div>
  );
}

export default App;