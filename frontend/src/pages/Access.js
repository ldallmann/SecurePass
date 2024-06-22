import React from "react";
import '../styles/styleAcessos.css';

function Access() {
    return (
        <main className="mainContainer">
            <section className="mainSectionContainer">
                <article className="articleTitleAccess">
                    <h2>Acessos</h2>
                </article>

                <article className="inputs">
                    <div className="containerSelects">
                        <h4>Usuário</h4>
                        <select name="users">
                            <option value="">Selecione um Usuário</option>
                            <option value="joao">João</option>
                            <option value="pedro">Pedro</option>
                            <option value="alice">Alice</option>
                            <option value="albert">Albert</option>
                            <option value="maicon">Maicon</option>
                        </select>
                    </div>

                    <div className="containerSelects">
                        <h4>Porta</h4>
                        <select name="users">
                            <option value="">Selecione uma Porta</option>
                            <option value="joao">Entrada Principal</option>
                            <option value="pedro">Sala de Reunião 1</option>
                            <option value="alice">Sala de Reunião 2</option>
                            <option value="albert">Sala de Reunião 3</option>
                            <option value="maicon">Entrada dos Fundos</option>
                            <option value="maicon">Saída</option>
                        </select>
                    </div>

                    <button type="submit" className="accessButton">Acessar</button>

                    <div className="containerSelects">
                        <h4>Status</h4>
                        <span className="spanStatus">Acesso permitido</span>
                    </div>
                </article>

                <article className="articleTable">
                    <div className="tableRow firsRow">
                        <span>USUÁRIO</span>
                        <span>LOCAL</span>
                        <span>DATA E HORA</span>
                        <span>STATUS</span>
                    </div>

                    <div className="line"></div>

                    <div className="overflowTable">
                        <div className="tableRow">
                            <span>João</span>
                            <span>Entrada Principal</span>
                            <span>12/02/2024 16:20:35</span>
                            <span className="accessGranted">Acesso permitido</span>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow">
                            <span>Ana</span>
                            <span>Entrada Principal</span>
                            <span>12/02/2024 15:23:26</span>
                            <span className="accessGranted">Acesso permitido</span>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow">
                            <span>Alice</span>
                            <span>Sala de Reunião 1</span>
                            <span>12/02/2024 14:05:30</span>
                            <span className="accessDenied">Acesso negado</span>
                        </div>

                        <div className="line"></div>

                        <div className="tableRow">
                            <span>Pedro</span>
                            <span>Entrada Principal</span>
                            <span>12/02/2024 14:00:15</span>
                            <span className="accessGranted">Acesso permitido</span>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )

}

export default Access;