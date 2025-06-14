import React from 'react';
import "./navbar.css";
import logo from "../../logo.png"

export default function Navbar() {
    return (
        <nav className='navbar'>
            {/* logo */}
            <img src={logo} alt='city tours logo'></img>
            <ul className='nav-links'>
                {/* Home */}
                <li>
                    <a href='/' className='nav-link'> Home</a>
                </li>
                {/* About */}
                <li>
                    <a href='/' className='nav-link'> About</a>
                </li>
                {/* Tours */}
                <li>
                    <a href='/' className='nav-link'> Tours</a>
                </li>
            </ul>
        </nav>

    )
}
