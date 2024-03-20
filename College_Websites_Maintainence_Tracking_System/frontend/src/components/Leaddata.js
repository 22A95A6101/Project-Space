import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './EmailForm.css';
import './login.css';
import About from './About';
function EmailData() {
    const [formData, setFormData] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:4000/getemaildata')
        .then((response) => {
          console.log(response.data);
          setFormData(response.data.emails); 
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
  return (
        <>
            <br/>
            <h2>Issues under maintainance</h2>
            <a href="/logout" style={{marginRight:'40px', paddingLeft:'50px',float:'right'}} className="button1">Logout</a>
            <br/>
            <table border={1} align="center">
            <tr>
                <th>S.NO</th>
                <th>Co-ordinator Name</th>
                <th>Teamlead Email</th>
                <th>College Representing</th>
                <th>changeType</th>
                <th>Description</th>
                <th>Attachment</th>
            </tr>
            {formData.map((form, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.website}</td>
              <td>{form.changeType}</td>
              <td>{form.description}</td>
              <td>{form.attachment}</td>
            </tr>
          ))}
        </table>
        <About/>
        </>
        
  );
};
export default EmailData;