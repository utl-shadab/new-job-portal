import React, { useState } from 'react';

const Otp = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    sendVerification: false,
  });

  const [phoneFormatError, setPhoneFormatError] = useState(false);

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === 'mobileNumber') {
        const phoneRegex = /^\+?\d{0,12}$/;
        const isValidPhone = phoneRegex.test(value);
        setPhoneFormatError(!isValidPhone || value.length > 13);
      }
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneFormatError) {
      console.log('Form data:', formData);
      // Perform actions to send OTP
    }
  };

  // Function to handle cancel action
  const handleCancel = () => {
    setFormData({
      mobileNumber: '',
      sendVerification: false,
    });
    setPhoneFormatError(false);
  };

  return (
    <div className="edit-mobile-number">
      <h2>Edit Mobile Number</h2>
      <p>Recruiters will contact you on this number</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number <span className='text-danger'>*</span></label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            placeholder="+91 Enter your mobile number"
            onChange={handleChange}
            required
          />
          {phoneFormatError && (
            <p className="text-danger">Please enter a valid phone number.</p>
          )}
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="sendVerification"
            name="sendVerification"
            checked={formData.sendVerification}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="sendVerification">
            We will send the verification code to this number
          </label>
        </div>
        <div className="form-group d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Send OTP
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Otp;
