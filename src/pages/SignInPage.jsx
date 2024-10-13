import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/signin.css"; 
import doctorOnboarding from "../assets/doctorOnboarding.png"; 
import logoIcon from "../assets/logo-icon.png"; 
import VisibilityIcon from '@mui/icons-material/Visibility';

function SignInPage() {
  const [email, setEmail] = useState('admin@gmail.com'); // Default email
  const [password, setPassword] = useState('admin'); // Default password
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [loading, setLoading] = useState(false);  // To track if the API is called
  const [error, setError] = useState({ email: '', password: '' }); // Track errors
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    // Validation Logic
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Please enter your email' }));
      return;
    }
    if (!password) {
      setError((prev) => ({ ...prev, password: 'Please enter your password' }));
      return;
    }

    setError({ email: '', password: '' }); // Reset errors

    setLoading(true);  // Start loading

    try {
      // Simulate an API call for sign-in (replace with actual API call)
      const response = await fakeApiCall(email, password);
      
      if (response.success) {
        // If sign-in is successful, redirect
        navigate('/emptyrx');
      } else {
        // If sign-in fails, show error
        setError({ email: '', password: 'Invalid email or password' });
      }
    } catch (error) {
      // Handle any other errors that might occur during the API call
      setError({ email: '', password: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false); // Stop loading after API response
    }
  };

  // Simulate an API call (replace with actual call)
  const fakeApiCall = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'admin@gmail.com' && password === 'admin') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="signin-container">
      {/* Image Section */}
      <div className="image-section">
        <img src={doctorOnboarding} alt="Doctor Onboarding" className="doctor-image" />
      </div>

      {/* Form Section */}
      <div className="form-section">
        <div className="form-box">
          {/* Health Circles Logo */}
          <div className="logo-container">
            <img src={logoIcon} alt="Health Circles" className="logo-icon" />
            <h2 className="form-title">Health Circles</h2>
          </div>
          
          <h3 className="form-subtitle">Welcome</h3>

          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
            />
            {error.email && <span className="error-text">{error.email}</span>}
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password">Password <span className="required">*</span></label>
            <div className="password-field">
              <input 
                type={passwordVisible ? "text" : "password"}
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
              />
              <VisibilityIcon 
                className="toggle-password"
                onClick={() => setPasswordVisible(!passwordVisible)} 
                style={{ cursor: 'pointer' }}
              />
            </div>
            {error.password && <span className="error-text">{error.password}</span>}
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button 
            className="login-button" 
            onClick={handleLogin}
            disabled={loading} // Disable when loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
