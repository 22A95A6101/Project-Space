import React, { useState} from 'react';
import axios from 'axios';
import './EmailForm.css';
import './login.css';
import About from './About';
function EmailForm() {
  const [formDataToSend, setFormData] = useState({
    name: '',
    email: '',
    website: 'AEC',
    changeType: 'Update',
    description: '',
    attachment: null // New state for file attachment
  });
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Handle file input separately
      setFormData({ ...formDataToSend, attachment: e.target.files[0] });
    } else {
      setFormData({ ...formDataToSend, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
        //{/*try {
          // Prepare form data
         // const formDataToSend = new FormData();
         // Object.entries(formData).forEach(([key, value]) => {
            //formDataToSend.append(key, value);
          //});*/}
          
            try {
              // Send form data to backend
              const response = await axios.post('http://localhost:4000/send-email', formDataToSend);
              console.log(response.data); // Log response from backend
              if (response.status === 200) {
                console.log(formDataToSend);
                alert('Email sent successfully!');
              }
            } catch (error) {
              console.error('Error sending email:', error);
              alert('Error sending email. Please try again later.');
            }
          
          // Send form data to backend
    //const response = await axios.post('http://localhost:4000/send-email', formDataToSend)
    //.then((result)=>{
      //console.log(response.data); // Log response from backend
      //if(result.status===200)
      //{
        //console.log(formDataToSend);
        //alert('Email sent successfully!');
      //}
      //})
    //.catch ((error) =>{
      //  console.error('Error sending email:', error);
        //alert('Error sending email. Please try again later.');
      //});
      // Clear form data
    setFormData({
        name: '',
        email: '',
        website: 'AEC',
        changeType: 'Update',
        description: '',
        attachment: null
      });
    }
  
  return (
    <>
    <div className="email-form-container">
      <h2>Send Email to Team Lead</h2>
      <a href="/logout" style={{marginRight:'40px', paddingLeft:'50px',float:'right'}} className="button1">Logout</a>
      <br/>
      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <label>Coordinator's Name:</label>
          <input type="text" name="name" value={formDataToSend.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>TEAMlead's Email:</label>
          <input type="email" name="email" value={formDataToSend.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Website:</label>
          <select name="website" value={formDataToSend.website} onChange={handleChange} required>
            <option value="AEC">AEC</option>
            <option value="AECT">AECT</option>
            <option value="AEOC">AEOC</option>
            <option value="PHARMACY">Pharmacy</option>
            <option value="DIPLOMA">Diploma</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type of Change:</label>
          <select name="changeType" value={formDataToSend.changeType} onChange={handleChange} required>
            <option value="Update">Update</option>
            <option value="Add">Add</option>
            <option value="Change">Modify</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description of Change:</label>
          <textarea name="description" value={formDataToSend.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Attachment:</label>
          <input type="file" name="attachment" enctype="multipart/form-data" onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
     
    </div>
    <div>
    <About/>
    </div>
    </>
  );
  
 
}

export default EmailForm;