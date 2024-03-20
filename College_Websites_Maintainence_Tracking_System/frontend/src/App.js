//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import Header from './components/Header';
import CEOstatus from './components/CEOstatus';
import EmailForm from './components/EmailForm';
import Forgot from './components/forgot';
import CEOLogin from './components/CEOlogin';
import DEVlogin from './components/DEVlogin';
import TEAMLeadlogin from './components/TEAMlead';
import CollegeCoordinatorLogin from './components/CollegeCoordinatorLogin';
import Home from './components/home';
import Action from './components/Action';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EmailData from './components/Leaddata';
import DeveloperEmailForm from './components/DeveloperEmailForm';
import Logout from "./components/logout";
import TLTODevEmailForm from './components/TLToDevEmail';
import MessageIcon from './components/MessageIcon';
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images from the backend
    fetch('http://localhost:4000/images')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {/* <Router> */}
        <Routes>
        <Route path='/' element={<Home images={images} />} />
       
        <Route path='/ceo' element={<CEOLogin/>}/>
        <Route path='/dev' element={<DEVlogin/>}/>
        <Route path='/lead' element={<TEAMLeadlogin/>}/>
        <Route path='/clg' element={<CollegeCoordinatorLogin/>}/>
        <Route path='/EmailForm' element={<EmailForm/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/CEOstatus' element={<CEOstatus/>}/>
        <Route path='/Forgot' element={<Forgot/>}/>
        <Route path='/EmailData' element={<EmailData/>}/>
        <Route path='/DeveloperEmailForm' element={<DeveloperEmailForm/>}/>
        <Route path='/TLToDevEmail' element={<TLTODevEmailForm/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/gpt" element={<MessageIcon/>}/>

        </Routes>
        {/* </Router> */}
      </BrowserRouter>
      {/* <About/> */}

    </div>
  );
}

export default App;
