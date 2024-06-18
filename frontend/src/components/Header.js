import React from "react";
import '../styles/header.css';
import { Link } from "react-router-dom";

function Header(){
<header id="header-container">
    <div id="header-titles">
        <h2>SecurePass</h2>
        <h3>Módulos</h3>
    </div>
    <span id="border"></span>
    <nav id="navbar">
        <ul>
            <li>
                <Link to="/" className="navbar-links">
                    <img src="../assets/home-icon.svg"/>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link to="/access" className="navbar-links">
                    <img src="../assets/Acessos-icon.svg"/>
                    <p>Acessos</p>
                </Link>
            </li>
        </ul>
    </nav>
</header>
}

export default Header;