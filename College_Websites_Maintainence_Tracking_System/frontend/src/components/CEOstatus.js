//import { Modal, Button } from "react-bootstrap";
import React, { useState ,useEffect} from "react";
import axios from "axios";
//import Form from 'react-bootstrap/Form';
import './status.css';
import './login.css';
import About from "./About";
function CEOstatus() {
    const [formData, setFormData] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:4000/ceodata')
        .then((response) => {
          console.log(response.data);
          setFormData(response.data.emails); 
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
            <div className="container" >
            <h2>Issues under Technical Hub maintainence</h2>
            <a href="/logout" style={{marginRight:'40px', paddingLeft:'50px',float:'right'}} className="button1">Logout</a>
            <br/>
            <table style={{marginTop:'20px',border:'8px solid black'}}>
            <tr>
                <th>S.NO</th>
                <th>Co-ordinator Email</th>
                <th>College Representing</th>
                <th>changeType</th>
                <th>Description</th>
            </tr>
            {formData.map((form, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {/*<td>{form.name}</td>*/}
              <td>{form.coordinatorEmail}</td>
              <td>{form.website}</td>
              <td>{form.changeType}</td>
              <td>{form.description}</td>
              {/*<td>{form.attachment}</td>*/}
            </tr>))}
            </table>
            
            </div>
            
            
    );
}
<About/>
export default CEOstatus;