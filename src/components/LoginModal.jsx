// components/LoginModal.js
import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onLogin, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Mock login - in real app this would be an API call
      onLogin(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDemoLogin = () => {
    onLogin({
      email: 'demo@example.com',
      password: 'demo123'
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-modal">
        <div className="modal-header">
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={errors.confirmPassword ? 'error' : ''}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
          )}

          <button type="submit" className="btn-login">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>

          <div className="demo-login">
            <button type="button" className="btn-demo" onClick={handleDemoLogin}>
              <i className="fas fa-user-secret"></i> Try Demo Account
            </button>
          </div>

          <div className="form-footer">
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button type="button" className="link-btn" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Login' : 'Sign Up'}
              </button>
            </p>
            
            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  <i className="fab fa-google"></i> Google
                </button>
                <button type="button" className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;