import React from 'react';
import styles from '../styles/Profile.module.css';
import ProfileImagem from "../assets/profileImage.jpeg"

function Profile() {
	return (
		<main className="mainContainer">
			<section className="mainSectionContainer">
				<article className="articleInputs">
					<h2>Usuário</h2>
					<div className="inputsContainer">
						<div className="inputs">
							<label>Nome</label>
							<input className="inputText" type="text" placeholder="Insira um nome" required />

							<label>E-mail</label>
							<input className="inputText" type="email" placeholder="Insira um email" required />

							<label for="click">Ativo</label>
							<input type="checkbox" checked id="click" value="active" />

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
							<img src={ProfileImagem} alt="Imagem do funcionário" className="profile-image" />
						</div>
					</div>
				</article>

				<article className="trustedLogButton">
						<a href="profile.html">Permissões</a>
						<a href="acessLog.html">Log de Acesso</a>
				</article>


{/* ----------------------------------------------------PRIMEIRA TABELA --------------------------------------------------*/}


				<article className="article-table">
					<div className="table-row firs-row">
						<span>ID</span>
						<span>LOCAL</span>
						<button className="add-button">+</button>
					</div>

					<div className="line"></div>

					<div className="overflow-table">
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


{/* ---------------------------------------------------SEGUNDA TABELA --------------------------------------------------*/}


				<article className="article-table">
					<div className="table-row firs-row">
						<span>LOCAL</span>
						<span>DATA E HORA</span>
						<span>STATUS</span>
					</div>
					
					<div className="line"></div>

					<div className="overflow-table">
						<div className="table-row">
							<span>Entrada Principal</span>
							<span>12/022024 16:20:35</span>
							<span>Acesso permitido</span>	
						</div>
						
						<div className="line"></div>
						
						<div className="table-row">
							<span>Sala de Reuniões 1</span>
							<span>12/022024 16:20:35</span>
							<span>Acesso negado</span>					
						</div>
						
						<div className="line"></div>
						
						<div className="table-row">
							<span>Entrada Principal</span>
							<span>12/022024 16:20:35</span>
							<span>Acesso permitido</span>					
						</div>
					</div>
				</article>
			</section>
		</main>
	)

}

export default Profile;