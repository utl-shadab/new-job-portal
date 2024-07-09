import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import jobseeker from "../../assets/small-icon/form.jpg";
const MAX_FILE_SIZE = 2 * 1024 * 1024; 
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/rtf',
];
const JobseekerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    otp: ['', '', '', '', '', ''],
    resume: null,
    experience: '',
    sendUpdates: false,
    agreeTerms: false,
  });

  const [fileSizeError, setFileSizeError] = useState(false);
  const [phoneFormatError, setPhoneFormatError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [timer, setTimer] = useState(30);
  const [resumeFileName, setResumeFileName] = useState('');
  const otpRefs = useRef([]);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      if (file.size > MAX_FILE_SIZE || !ACCEPTED_FILE_TYPES.includes(file.type)) {
        setFileSizeError(true);
      } else {
        setFileSizeError(false);
        setFormData({ ...formData, [name]: file });
        setResumeFileName(file.name);
      }
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'mobileNumber') {
      const phoneRegex = /^\+?\d{0,12}$/;
      const isValidPhone = phoneRegex.test(value);
      setPhoneFormatError(!isValidPhone || value.length > 13);
    }

    if (name === 'password') {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
      const isValidPassword = passwordRegex.test(value);
      setPasswordError(
        !isValidPassword ? 'Password must contain at least 8 characters, including uppercase, lowercase, and special characters.' : ''
      );
    }
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && ACCEPTED_FILE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
      setFormData({ ...formData, resume: file });
      setResumeFileName(file.name);
      setFileSizeError(false);
    } else {
      setFileSizeError(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });

      if (value && index < 5) {
        otpRefs.current[index + 1].focus();
      } else if (!value && index > 0) {
        otpRefs.current[index - 1].focus();
      }
    }
  };

  const handleSendOtp = () => {
    if (!phoneFormatError && formData.mobileNumber) {
      setOtpSent(true);
      setShowOtpInput(true);
      startTimer();
      console.log('OTP sent to:', formData.mobileNumber);
    } else {
      alert('Please enter a valid phone number.');
    }
  };

  const startTimer = () => {
    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setShowOtpInput(false);
    }, 30000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneFormatError && !passwordError && formData.agreeTerms && otpSent) {
      console.log('Form data:', formData);
      setFormData({
        fullName: '',
        email: '',
        password: '',
        mobileNumber: '',
        otp: ['', '', '', '', '', ''],
        resume: null,
        experience: '',
        sendUpdates: false,
        agreeTerms: false,
      });
      setOtpSent(false);
      setShowOtpInput(false);
      setResumeFileName('');
    } else {
      if (!formData.agreeTerms) {
        alert('Please agree to the terms and conditions.');
      } else if (phoneFormatError) {
        alert('Please enter a valid phone number.');
      } else if (passwordError) {
        alert('Please enter a valid password.');
      } else if (!otpSent) {
        alert('Please send and verify OTP.');
      }
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setShowOtpInput(false);
    }
  }, [timer]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
  });
  return (
    <div>
      <Navbar />
      <hr />
      <section className="form-section registred-page-job-seeker d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row custom-row">
          <div className="col-lg-6">
            <div className="job-seeker-form">
              <form id="jobSeekerForm" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className='text-danger'>*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
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
                      className='position-relative'
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-group-append">
                      <span 
                        className="input-group-text position-absolute"
                        onClick={handlePasswordVisibility}
                        style={{
                          fontSize: "14px",
                          right: "8px",
                          top: "9px",
                          background: "none",
                          border:"none",
                          color: "#fff",
                          cursor:"pointer"

                        }}
                      >
                        {passwordVisible ? '🙈' : '👁️'}
                      </span>
                    </div>
                  </div>
                  {passwordError && <p className="text-danger">{passwordError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number <span className='text-danger'>*</span></label>
                  <div className="input-group">
                    <input
                      className='position-relative'
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn position-absolute"
                        onClick={handleSendOtp}
                        style={{
                          fontSize: "8px",
                          right: "8px",
                          top: "14px",
                          background: "#007bff",
                          color: "#fff"
                        }}
                      >
                        Send OTP
                      </button>
                    </div>
                  </div>
                  {phoneFormatError && (
                    <p className="text-danger">Please enter a valid phone number (up to 13 digits).</p>
                  )}
                </div>
           
                {showOtpInput && (
                  <div className="form-group">
                    <label htmlFor="otp">Enter OTP <span className='text-danger'>*</span></label>
                    <div className="d-flex gap-5 justify-content-start">
                      {formData.otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          name={`otp${index}`}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          ref={(el) => (otpRefs.current[index] = el)}
                          maxLength="1"
                          className="otp-input"
                          required
                        />
                      ))}
                    </div>
                    <p className="text-center text-muted">OTP expires in {timer} seconds</p>
                  </div>
                )}
                 <div className="form-group">
                  <label htmlFor="experience">Experience <span className='text-danger'>*</span></label>
                  <select
                  className='form-select'
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="resume">Upload Resume <span className='text-danger'>*</span> (DOC, DOCX, PDF, RTF MAX: 2MB)</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx,.rtf"
                    onChange={handleChange}
                    required
                    onClick={(e) => { e.target.value = null; }}
                  />
                  {fileSizeError && (
                    <p className="text-danger">File size should not exceed 2MB and must be a DOC, DOCX, PDF, or RTF.</p>
                  )}
                  {resumeFileName && (
                    <p>Selected file: {resumeFileName}</p>
                  )}
                </div>
                <div className="form-group resume-drop-zone" {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the file here ...</p>
                  ) : (
                    <p>Drag and drop your resume here (DOC, DOCX, PDF, RTF files only)</p>
                  )}
                  {resumeFileName && (
                    <p>Selected file: {resumeFileName}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="d-flex justify-content-center gap-2" style={{ fontSize: '14px' }}>
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      className="w-auto"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                    />
                    By clicking Register, you agree to our Terms & Conditions
                  </label>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-register">
                    Register Now
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account? <Link to="/job-seeker-login">Login Here</Link></p>
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

export default JobseekerForm;
