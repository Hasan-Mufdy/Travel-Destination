import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contactus">Contact us</Link></li>
                {/* <li><Link to="/tour">Tour</Link></li> */}
            </ul>
        </nav>
        </div>
    );
}
export default Navbar;