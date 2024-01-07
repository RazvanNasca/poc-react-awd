import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand">Răzvan Nașca</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Personal Info</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/teaching">Teaching</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
