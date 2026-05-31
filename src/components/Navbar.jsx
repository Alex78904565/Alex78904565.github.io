import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#header" className="nav-button">Profile</a>
        <a href="#experience" className="nav-button">Experience</a>
        <a href="#projects" className="nav-button">Projects</a>
        <a href="#reviews" className="nav-button">Reviews</a>
      </div>
    </nav>
  );
}