import React, { useState } from 'react';
import './TraderForm.css';

const TraderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    shopName: '',
    userType: 'Retailer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.status === 201) {
        console.log('Form submitted successfully');
        // Reset the form
        setFormData({
          name: '',
          mobile: '',
          email: '',
          shopName: '',
          userType: 'Retailer'
        });
      } else if (response.status === 409) {
        alert('User already exists');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Trader Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="shopName">Shop Name:</label>
          <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <select id="userType" name="userType" value={formData.userType} onChange={handleChange}>
            <option value="Retailer">Retailer</option>
            <option value="Wholesaler">Wholesaler</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TraderForm;
