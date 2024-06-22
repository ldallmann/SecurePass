import React from "react";
import '../styles/home.css';
import { Link } from "reactRouter-dom";
import GlassIcon from "../assets/magnifying-glass-icon.svg";
import GearIcon from "../assets/gear-icon.svg";

function Home() {
    return (
        <main className="mainContainer">
            <section className="mainSectionContainer">
                <article className="articleInputs">
                    <h2>Usuários</h2>
                    <div className="inputsContainer">
                        <div className="searchBarContainer">
                            <img src={GlassIcon}/>
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>
                    </div>
                </article>

                <article className="articleTable">
                    <div className="tableRow">
                        <div className="idNameContainer">
                            <span className="idCell firstRow">ID</span>
                            <span className="nameCell firstRow">NOME</span>
                        </div>

                        <div className="cargoSettingsContainer">
                            <span className="roleCell firstRow">CARGO</span>
                            <span className="activeCell firstRow">ATIVO</span>
                            <span></span>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="overflowTable">
                        <div className="tableRow tableRowHover">
                            <div className="idNameContainer">
                                <span className="idCell">001</span>
                                <span className="nameCell">João</span>
                            </div>

                            <div className="cargoSettingsContainer">
                                <span className="roleCell">Gestor</span>
                                <span className="activeCell">Sim</span>
                                <Link to="/profile" className="optionsCell"><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow tableRow-hover">
                            <div className="idNameContainer">
                                <span className="idCell">002</span>
                                <span className="nameCell">Pedro</span>
                            </div>

                            <div className="cargoSettingsContainer">
                                <span className="roleCell">Desenvolvedor</span>
                                <span className="activeCell">Sim</span>
                                <Link to="/profile" className="optionsCell"><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow tableRow-hover">
                            <div className="idNameContainer">
                                <span className="idCell">003</span>
                                <span className="nameCell">Alice</span>
                            </div>

                            <div className="cargoSettingsContainer">
                                <span className="roleCell">Desenvolvedor</span>
                                <span className="activeCell">Não</span>
                                <Link to="/profile" className="optionsCell"><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow tableRow-hover">
                            <div className="idNameContainer">
                                <span className="idCell">004</span>
                                <span className="nameCell">Albert</span>
                            </div>

                            <div className="cargoSettingsContainer">
                                <span className="roleCell">Infraestrutura</span>
                                <span className="activeCell">Sim</span>
                                <Link to="/profile" className="optionsCell"><img src={GearIcon} /></Link>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow tableRow-hover">
                            <div className="idNameContainer">
                                <span className="idCell">005</span>
                                <span className="nameCell">Maicon</span>
                            </div>

                            <div className="cargoSettingsContainer">
                                <span className="roleCell">Gestor</span>
                                <span className="activeCell">Não</span>
                                <Link to="/profile" className="optionsCell"><img src={GearIcon} /></Link>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Home; 