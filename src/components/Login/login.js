import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function LoginRealPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');

    // Basic email and password validation
    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);

    if (isEmailValid && isPasswordValid) {
      // Format is correct, navigate to another page
      navigate('/about');
    } else {
      if (!isEmailValid) {
        setEmailError('Invalid email format');
      }
      if (!isPasswordValid) {
        setPasswordError('Password must be at least 8 characters long');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="form-group">
          <label>Username/Email</label>
          <input
            type="text"
            className="text-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="text-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {/* <button className="login-button" onClick={handleLoginAsHR}>
          Login as HR
        </button> */}
        <div className="register-text">Or Register using</div>
        <div className="register-button">
          <Link to="/register">
            <button className="register-link">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}

export default LoginRealPage;
