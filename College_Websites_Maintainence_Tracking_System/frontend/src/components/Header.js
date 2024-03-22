import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Make sure this points to the correct file path 
import './CEOlogin';
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="https://technicalhub.io/images/technicalhub_logs/GREEN%20TM.png" alt="Logo" className="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/action"><b>Actions</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gpt"><b>Query Quarters</b></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Login</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/ceo"><b>CEOlogin</b></a></li>
            <li><a class="dropdown-item" href="/lead"><b>Team Lead</b></a></li>
            <li><a class="dropdown-item" href="/dev"><b>Dev Login</b></a></li>
            <li><a class="dropdown-item" href="/clg"><b>Representative</b></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );  
  }
export default Header;
