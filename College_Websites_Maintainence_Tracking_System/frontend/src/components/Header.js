import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Make sure this points to the correct file path 
import './CEOlogin';
import About from "./About";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigation = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="https://technicalhub.io/images/technicalhub_logs/GREEN%20TM.png" alt="Logo" className="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/action">Actions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gpt">Query Quarters</a>
          </li>
          <li className="nav-item dropdown">
            <select className="nav-link dropdown-toggle"  aria-expanded="false" onChange={(event)=>{
              const selectedValue = event.target.value;
              navigation(`/${selectedValue}`)
              //if(selectedValue=='ceo'){
                //navigation(`/ceo`)
              //}
              //else{
                //navigation(`/dev`)
              //}
            }}>
              <option>Login</option>
              <option value="ceo">
                Ceo Login
              </option>
              <option value="dev">DEV Login</option>
              <option value="lead">Team Lead Login</option>
              <option value="clg">College Coordinator Login</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
    
  );
  <About/>

}
export default Header;