import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
    <header>
        <nav>
            <ul>
                <li><a href="index.html"> Home</a></li>
                <li><a href="#contact-us">Contact us</a></li>
            </ul>
        </nav>
        <h1 class="header-h2">Travel Destination</h1>
    </header>
    </div>
  );
}

export default Header;