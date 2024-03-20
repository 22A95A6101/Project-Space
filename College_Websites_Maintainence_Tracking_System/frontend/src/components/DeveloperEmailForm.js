import React, { useState } from 'react';
import axios from 'axios';
import './EmailForm.css';
import './login.css';
import About from './About';
function DeveloperEmailForm() {
  const [formData, setFormData] = useState({
    coordinatorEmail: '',
    website: 'AEC',
    changeType: 'Update',
    description: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:4000/sendresolvedmail', formData);
      if (response.status === 200) {
        console.log(formData);
        alert('Email sent successfully!');
      }
    }
     catch (error) {
      console.error('Error sending email:', error);
    }
      setFormData({
        coordinatorEmail: '',
        website: 'AEC',
        changeType: 'Update',
        description: '',
        status: ''
      });
  };

  return (
    <>
    <div className="email-form-container">
      <h2>Send Resolved Issue Email to College Coordinator</h2>
      <a href="/logout" style={{marginRight:'40px', paddingLeft:'50px',float:'right'}} className="button1">Logout</a>
      <br/>
      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <label>Coordinator's Email:</label>
          <input type="email" name="coordinatorEmail" value={formData.coordinatorEmail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Website Name:</label>
          <select name="website" value={formData.website} onChange={handleChange} required>
            <option value="AEC">AEC</option>
            <option value="AECT">AECT</option>
            <option value="AEOC">AEOC</option>
            <option value="PHARMACY">Pharmacy</option>
            <option value="DIPLOMA">Diploma</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type of Change:</label>
          <select name="changeType" value={formData.changeType} onChange={handleChange} required>
            <option value="Update">Update</option>
            <option value="Modify">Modify</option>
            <option value="Change">Change</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description of Change:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        {/*{formData.status === 'completed' && <p>Status: Completed</p>}*/}
        <button type="submit" className="submit-btn" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
    <About/>
    </>
  );
}

export default DeveloperEmailForm;