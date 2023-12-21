import React, { useState } from 'react';
import './CustReg.css'
import { NavLink } from 'react-router-dom';

const CustReg = () => {
  const [formData, setFormData] = useState({
    name: '',
    cellNumber: '',
    dob: '',
    pob: '',
    tob: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formDataToSend = new FormData();

    // Append form data to FormData object
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // Send form data to the server using fetch API
      const response = await fetch('YOUR_SERVER_API_ENDPOINT', {
        method: 'POST',
        body: formDataToSend,
      });

      // Handle the server response as needed
      if (response.ok) {
        console.log('Form submitted successfully!');
        // Optionally reset the form after successful submission
        setFormData({
          name: '',
          cellNumber: '',
          dob: '',
          pob: '',
          tob: '',
          photo: null,
        });
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Cell Number:
        <input
          type="tel"
          name="cellNumber"
          value={formData.cellNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Place of Birth:
        <input
          type="text"
          name="pob"
          value={formData.pob}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Time of Birth:
        <input
          type="time"
          name="tob"
          value={formData.tob}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Upload Photo:
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    
  );
};


export default CustReg;
