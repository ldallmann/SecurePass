import React from "react";
import '../styles/access.css';

function Access() {
    <main id="main-container">
        <section id="main-section-container">
            <article id="article-title-access">
                <h2>Acessos</h2>
            </article>

            <article id="inputs">
                <div class="container-selects">
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

                <div class="container-selects">
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

                <button type="submit" id="access-button">Acessar</button>

                <div class="container-selects">
                    <h4>Status</h4>
                    <span id="span-status">Acesso permitido</span>
                </div>
            </article>

            <article id="article-table">
                <div class="table-row firs-row">
                    <span>USUÁRIO</span>
                    <span>LOCAL</span>
                    <span>DATA E HORA</span>
                    <span>STATUS</span>
                </div>

                <div class="line"></div>

                <div id="overflow-table">
                    <div class="table-row">
                        <span>João</span>
                        <span>Entrada Principal</span>
                        <span>12/02/2024 16:20:35</span>
                        <span class="access-granted">Acesso permitido</span>
                    </div>

                    <div class="line"></div>

                    <div class="table-row">
                        <span>Ana</span>
                        <span>Entrada Principal</span>
                        <span>12/02/2024 15:23:26</span>
                        <span class="access-granted">Acesso permitido</span>
                    </div>

                    <div class="line"></div>

                    <div class="table-row">
                        <span>Alice</span>
                        <span>Sala de Reunião 1</span>
                        <span>12/02/2024 14:05:30</span>
                        <span class="access-denied">Acesso negado</span>
                    </div>

                    <div class="line"></div>

                    <div class="table-row">
                        <span>Pedro</span>
                        <span>Entrada Principal</span>
                        <span>12/02/2024 14:00:15</span>
                        <span class="access-granted">Acesso permitido</span>
                    </div>
                </div>
            </article>
        </section>
    </main>
}

export default Access;