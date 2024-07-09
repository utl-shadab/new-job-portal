import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DashboardLeft from './DashboardLeft'
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [passwordValidations, setPasswordValidations] = useState({
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumberOrSymbol: false,
      isAtLeast8Chars: false,
    });
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const validatePassword = (password) => {
      const validations = {
        hasUpperCase: /[A-Z]/.test(password),
        hasLowerCase: /[a-z]/.test(password),
        hasNumberOrSymbol: /[0-9!@#$%^&*]/.test(password),
        isAtLeast8Chars: password.length >= 8,
      };
      setPasswordValidations(validations);
      return Object.values(validations).every(Boolean);
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!oldPassword) newErrors.oldPassword = 'Old Password is required';
      if (!newPassword) newErrors.newPassword = 'New Password is required';
      if (!validatePassword(newPassword)) newErrors.newPassword = 'New Password does not meet the requirements';
      if (newPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Handle form submission
        console.log('Form submitted');
      }
    };

  return (
    <div>
    <Navbar />
    <section style={{ backgroundColor: "#f8fbfe" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 position-sticky top-0">
            <DashboardLeft />
          </div>
          <div className="col-lg-9 py-3" style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none", paddingTop: "20px", paddingBottom: "20px", "WebkitScrollbar": { display: "none" } }}>
          <div className="change-password-container  p-5 ">
             <h2 className='mb-2 header-change-password'>Change Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className='label-change-password'>Old Password</label>
                  <div className="input-group my-3  password-input-group  ">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      className="form-control p-3"
                      placeholder="Type old Password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <i 
                        className={`password-toggle-icon ${showOldPassword ? "fas fa-eye-slash" : "fas fa-eye"}`} 
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                      ></i>
                    </div>
                  </div>
                  {errors.oldPassword && <small className="text-danger">{errors.oldPassword}</small>}
                </div>
                <div className="form-group">
                  <label className='label-change-password'>New Password</label>
                  <div className="input-group my-3  password-input-group  ">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      className="form-control p-3"
                      placeholder="Type new Password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                    />
                    <div className="input-group-append ">
                      <i 
                        className={`password-toggle-icon ${showNewPassword ? "fas fa-eye-slash" : "fas fa-eye"}`} 
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                      ></i>
                    </div>
                  </div>
                  {errors.newPassword && <small className="text-danger">{errors.newPassword}</small>}
                  <div className="password-requirements">
                    <p style={{ color: passwordValidations.hasUpperCase ? 'green' : 'red' }}>
                      {passwordValidations.hasUpperCase ? '✔' : '✘'} include both lower and upper case characters.
                    </p>
                    <p style={{ color: passwordValidations.hasNumberOrSymbol ? 'green' : 'red' }}>
                      {passwordValidations.hasNumberOrSymbol ? '✔' : '✘'} include at least one number or symbol.
                    </p>
                    <p style={{ color: passwordValidations.isAtLeast8Chars ? 'green' : 'red' }}>
                      {passwordValidations.isAtLeast8Chars ? '✔' : '✘'} be at least 8 characters long.
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className='label-change-password'>Confirm Password</label>
                  <div className="input-group my-3  password-input-group  ">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control p-3"
                      placeholder="Confirm your Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <i 
                        className={`password-toggle-icon ${showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"}`} 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                      ></i>
                    </div>
                  </div>
                  {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                  <button 
                    type="submit" 
                    className="btn btn-primary mt-3" 
                    style={{
                      backgroundColor: '#0B5ED7', 
                      color: '#fff', 
                      border: 'none', 
                      borderRadius: '4px', 
                      padding: '10px 20px', 
                      fontSize: '16px', 
                      fontWeight: 'semibold', 
                      cursor: 'pointer',
                      display: 'inline-block',
                      textAlign: 'center'
                    }}
                  >
                    Update
                  </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export default ChangePassword
