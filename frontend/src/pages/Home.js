import React from "react";
import '../styles/home.css';

function Home() {
    <main id="main-container">
        <section id="main-section-container">
            <article id="article-inputs">
                <h2>Usuários</h2>
                <div id="inputs-container">
                    <div id="search-bar-container">
                        <img src="assets/magnifying-glass-icon.svg" />
                        <input type="text" placeholder="Pesquisar..."></input>
                    </div>
                    <div id="filter-button-container">
                        <button type="submit" id="filter-button">
                            <img src="assets/filter-icon.svg" />
                            <span>Filtro</span>
                        </button>
                    </div>
                </div>
            </article>

            <article id="article-table">
                <div className="table-row">
                    <div className="id-name-container">
                        <span className="id-cell first-row">ID</span>
                        <span className="name-cell first-row">NOME</span>
                    </div>

                    <div className="cargo-settings-container">
                        <span className="role-cell first-row">CARGO</span>
                        <span className="active-cell first-row">ATIVO</span>
                        <span></span>
                    </div>
                </div>

                <div className="line"></div>

                <div id="overflow-table">
                    <div className="table-row table-row-hover">
                        <div className="id-name-container">
                            <span className="id-cell">001</span>
                            <span className="name-cell">João</span>
                        </div>

                        <div className="cargo-settings-container">
                            <span className="role-cell">Gestor</span>
                            <span className="active-cell">Sim</span>
                            <a href="profile.html" className="options-cell"><img src="assets/gear-icon.svg" /></a>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="table-row table-row-hover">
                        <div className="id-name-container">
                            <span className="id-cell">002</span>
                            <span className="name-cell">Pedro</span>
                        </div>

                        <div classNameName="cargo-settings-container">
                            <span className="role-cell">Desenvolvedor</span>
                            <span className="active-cell">Sim</span>
                            <a href="profile.html" className="options-cell"><img src="assets/gear-icon.svg" /></a>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="table-row table-row-hover">
                        <div className="id-name-container">
                            <span className="id-cell">003</span>
                            <span className="name-cell">Alice</span>
                        </div>

                        <div className="cargo-settings-container">
                            <span className="role-cell">Desenvolvedor</span>
                            <span className="active-cell">Não</span>
                            <a href="profile.html" className="options-cell"><img src="assets/gear-icon.svg" /></a>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="table-row table-row-hover">
                        <div className="id-name-container">
                            <span className="id-cell">004</span>
                            <span className="name-cell">Albert</span>
                        </div>

                        <div className="cargo-settings-container">
                            <span className="role-cell">Infraestrutura</span>
                            <span className="active-cell">Sim</span>
                            <a href="profile.html" className="options-cell"><img src="assets/gear-icon.svg" /></a>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="table-row table-row-hover">
                        <div className="id-name-container">
                            <span className="id-cell">005</span>
                            <span className="name-cell">Maicon</span>
                        </div>

                        <div className="cargo-settings-container">
                            <span className="role-cell">Gestor</span>
                            <span className="active-cell">Não</span>
                            <a href="profile.html" className="options-cell"><img src="assets/gear-icon.svg" /></a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>
}

export default Home; 