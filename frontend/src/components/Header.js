import React from "react";
import styles from '../styles/Header.module.css';
import { Link } from "react-router-dom";
import HomeIcon from "../assets/home-icon.svg";
import AcessosIcon from "../assets/Acessos-icon.svg";

function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerTitles}>
                <h2>SecurePass</h2>
                <h3>Módulos</h3>
            </div>
            <span className={styles.border}></span>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/" className={styles.navbarLinks}>
                            <img src={HomeIcon} alt="home" />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/access" className={styles.navbarLinks}>
                            <img src={AcessosIcon} alt="Acessos" />
                            <p>Acessos</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;