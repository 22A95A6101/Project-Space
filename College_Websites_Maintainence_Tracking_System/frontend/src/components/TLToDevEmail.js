import React, { useState } from 'react';
import axios from 'axios';
import './EmailForm.css';
import About from './About';

function TLTODevEmailForm() {
  const [formData, setFormData] = useState({
    devName: '',
    devEmail: '',
    collegeName: '',
    issue: '',
    description: '',
    attachment: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, attachment: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //try {
     // const formDataToSend = new FormData();
     // Object.entries(formData).forEach(([key, value]) => {
      //  formDataToSend.append(key, value);
      //});
      try {
        // Send form data to backend
        const response = await axios.post('http://localhost:5000/send-email-to-dev', formData);
        console.log(response.data); // Log response from backend
        if (response.status === 200) {
          console.log(formData);
          alert('Email sent successfully!');
        }
    }catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      }
      setFormData({
        devName: '',
        devEmail: '',
        collegeName: '',
        issue: '',
        description: '',
        attachment: null
      });
    } 

  return (
    <div className="email-form-container">
      <h2>Send Email to Developers</h2>
      <form onSubmit={handleSubmit} className="email-form" encType="multipart/form-data">
        <div className="form-group">
          <label>Developer's Name:</label>
          <input type="text" name="devName" value={formData.devName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Developer's Email:</label>
          <input type="email" name="devEmail" value={formData.devEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>College Name:</label>
          <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Issue:</label>
          <input type="text" name="issue" value={formData.issue} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Attachment:</label>
          <input type="file" name="attachment" onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
    </div>
    
  );
}
<About/>

export default TLTODevEmailForm;