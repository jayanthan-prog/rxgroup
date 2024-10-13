import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignInPage from '../pages/SignInPage.jsx';
import EmptyRx from '../pages/emptyrx.jsx';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Sign In Route */}
        <Route path="/" element={<SignInPage />} />
        
        {/* Empty Rx Route */}
        <Route path="/emptyrx" element={<EmptyRx />} />
      </Routes>
    </div>
  );
}

export default App;
