import React from "react";
import styles from '../styles/Home.module.css';
import { Link } from "react-router-dom";
import GlassIcon from "../assets/magnifying-glass-icon.svg";
import GearIcon from "../assets/gear-icon.svg";

function Home() {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainSectionContainer}>
                <article className={styles.articleInputs}>
                    <h2>Usuários</h2>
                    <div className={styles.inputsContainer}>
                        <div className={styles.searchBarContainer}>
                            <img src={GlassIcon}/>
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>
                    </div>
                </article>

                <article className={styles.articleTable}>
                    <div className={styles.tableRow}>
                        <div className={styles.idNameContainer}>
                            <span className={`${styles.idCell} ${styles.firstRow}`}>ID</span>
                            <span className={`${styles.nameCell} ${styles.firstRow}`}>NOME</span>
                        </div>

                        <div className={styles.cargoSettingsContainer}>
                            <span className={`${styles.roleCell} ${styles.firstRow}`}>CARGO</span>
                            <span className={`${styles.activeCell} ${styles.firstRow}`}>ATIVO</span>
                            <span></span>
                        </div>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.overflowTable}>
                        <div className={`${styles.tableRow} ${styles.tableRowHover}`}>
                            <div className={styles.idNameContainer}>
                                <span className={styles.idCell}>001</span>
                                <span className={styles.nameCell}>João</span>
                            </div>

                            <div className={styles.cargoSettingsContainer}>
                                <span className={styles.roleCell}>Gestor</span>
                                <span className={styles.activeCell}>Sim</span>
                                <Link to="/profile" className={styles.optionsCell}><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className={styles.line}></div>

                        <div className={`${styles.tableRow} ${styles.tableRowHover}`}>
                            <div className={styles.idNameContainer}>
                                <span className={styles.idCell}>002</span>
                                <span className={styles.nameCell}>Pedro</span>
                            </div>

                            <div className={styles.cargoSettingsContainer}>
                                <span className={styles.roleCell}>Desenvolvedor</span>
                                <span className={styles.activeCell}>Sim</span>
                                <Link to="/profile" className={styles.optionsCell}><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className={styles.line}></div>

                        <div className={`${styles.tableRow} ${styles.tableRowHover}`}>
                            <div className={styles.idNameContainer}>
                                <span className={styles.idCell}>003</span>
                                <span className={styles.nameCell}>Alice</span>
                            </div>

                            <div className={styles.cargoSettingsContainer}>
                                <span className={styles.roleCell}>Desenvolvedor</span>
                                <span className={styles.activeCell}>Não</span>
                                <Link to="/profile" className={styles.optionsCell}><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className={styles.line}></div>

                        <div className={`${styles.tableRow} ${styles.tableRowHover}`}>
                            <div className={styles.idNameContainer}>
                                <span className={styles.idCell}>004</span>
                                <span className={styles.nameCell}>Albert</span>
                            </div>

                            <div className={styles.cargoSettingsContainer}>
                                <span className={styles.roleCell}>Infraestrutura</span>
                                <span className={styles.activeCell}>Sim</span>
                                <Link to="/profile" className={styles.optionsCell}><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className={styles.line}></div>

                        <div className={`${styles.tableRow} ${styles.tableRowHover}`}>
                            <div className={styles.idNameContainer}>
                                <span className={styles.idCell}>005</span>
                                <span className={styles.nameCell}>Maicon</span>
                            </div>

                            <div className={styles.cargoSettingsContainer}>
                                <span className={styles.roleCell}>Gestor</span>
                                <span className={styles.activeCell}>Não</span>
                                <Link to="/profile" className={styles.optionsCell}><img src={GearIcon} /></Link>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Home; 