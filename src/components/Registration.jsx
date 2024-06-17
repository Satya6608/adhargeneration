import React, { useState } from 'react';

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    dob: '',
    address: '',
    locality: '',
    pinCode: '',
    state: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.pinCode.length !== 6) {
      alert("Pin code must be exactly 6 characters long.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <img src="https://res.cloudinary.com/debbsefe/image/upload/f_auto,c_fill,dpr_auto,e_grayscale/image_fz7n7w.webp" alt="header-image" className="cld-responsive" />
          <h2 className="form-title">Adhar Registeration</h2>    
          <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Father's Name:</label>
        <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Full Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Locality:</label>
        <input type="text" name="locality" value={formData.locality} onChange={handleChange} required />
      </div>
      <div>
        <label>Pin Code:</label>
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} maxLength="6" required />
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
      </div>
      <div>
        <label>Contact:</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} maxLength="10" required />
      </div>
      <button type="submit">Submit</button>
    </form>
        </div>
      </div>

    </>
  );
};

export default RegistrationForm;
