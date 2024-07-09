import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import jobseeker from "../../assets/small-icon/form.jpg";
import { useAuth } from '../../context/AuthContext';
import "./loginSignup.css"

const JobSeekerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
      const isValidPassword = passwordRegex.test(value);
      setPasswordError(!isValidPassword ? 'Password must contain at least 8 characters, including uppercase, lowercase, and special characters.' : '');
    }
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    localStorage.setItem('isAuthenticate',true);
    navigate('/');
  }

  return (
    <div>
     <Navbar/>
      <hr />
      <section className="form-section login-page-job-seeker d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center custom-row">
            <div className="col-lg-6">
              <div className="login-form">
                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email ID <span className='text-danger'>*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password <span className='text-danger'>*</span></label>
                    <div className="input-group">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text"
                          onClick={handlePasswordVisibility}
                          style={{ cursor: 'pointer' }}
                        >
                          {passwordVisible ? '🙈' : '👁️'}
                        </span>
                      </div>
                    </div>
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                  </div>
                  <div className="form-group form-check d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input w-auto p-2"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label className="form-check-label mx-2" htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <Link to="/forgot-password" className="d-flex justify-content-end  mb-2">Forgot Password?</Link>
                  <div className="form-group">
                    <button type="submit" className="btn-login d-block">
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>Don't have an account? <Link to="/job-seeker-register">Register Here</Link></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="job-seeker-image">
                <img src={jobseeker} alt="jobseeker" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
};

export default JobSeekerLogin;
