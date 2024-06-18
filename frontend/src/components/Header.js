import React from "react";

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
                <a href="index.html" class="navbar-links">
                    <img src="assets/home-icon.svg"/>
                    <p>Home</p>
                </a>
            </li>
            <li>
                <a href="acessPage.html" class="navbar-links">
                    <img src="assets/Acessos-icon.svg"/>
                    <p>Acessos</p>
                </a>
            </li>
        </ul>
    </nav>
</header>
}

export default Header;