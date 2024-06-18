import React from 'react';
import '../styles/styleProfile.css';

function Profile() {
    <main id="main-container">
			<section id="main-section-container">
				<article id="article-inputs">
					<h2>Usuário</h2>
					<div id="inputs-container">
                        <div id="inputs">
                            <label>Nome</label>
                            <input className="input-text" type="text" placeholder="Insira um nome" required/>

                            <label>E-mail</label>
                            <input className="input-text" type="email" placeholder="Insira um email" required/>

                            <label for="click">Ativo</label>
                            <input type="checkbox" checked id="click" value="active"/>

                            <label>Cargo</label>
                            <select name="cargo">
                                <option value="administrativo">Administrativo</option>
                                <option value="desenvolvedor">Desenvolvedor</option>
                                <option value="financeiro">Financeiro</option>
                                <option value="gestor">Gestor</option>
                                <option value="infraestrutura">Infraestrutura</option>
                            </select>

                            <button type="submit">Salvar</button>
                        </div>

                        <div>
                            <img src="assets/profileImage.jpeg" alt="Imagem do funcionário" id="profile-image"/>
                        </div>
					</div>
				</article>

				<article id="trusted-log-button">
					<a href="profile.html">Permissões</a>
					<a href="acessLog.html">Log de Acesso</a>
				</article>

                <article id="article-table">
					<div className="table-row firs-row">
						<span>ID</span>
						<span>LOCAL</span>
						<button id="add-button">+</button>
					</div>
					
					<div className="line"></div>

					<div id="overflow-table">
						<div className="table-row">
							<span>002</span>
							<span>Entrada Principal</span>
							<button className="remove-button">-</button>	
						</div>
						
						<div className="line"></div>
						
						<div className="table-row">
							<span>005</span>
							<span>Sala de Reuniões 1</span>
							<button className="remove-button">-</button>					
						</div>
						
						<div className="line"></div>
						
						<div className="table-row">
							<span>008</span>
							<span>Refeitório</span>
							<button className="remove-button">-</button>					
						</div>
					</div>
				</article>
			</section>
		</main>
}

export default Profile;