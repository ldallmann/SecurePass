import React, { useState } from 'react';
import styles from '../styles/Profile.module.css';
import ProfileImagem from "../assets/profileImage.jpeg";

function Profile() {
    const [showFirstTable, setShowFirstTable] = useState(true);

    const handleToggleTable = () => {
        setShowFirstTable(!showFirstTable);
    };

    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainSectionContainer}>
                <article className={styles.articleInputs}>
                    <h2>Usuário</h2>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputs}>
                            <label>Nome</label>
                            <input className={styles.inputText} type="text" placeholder="Insira um nome" required />

                            <label>E-mail</label>
                            <input className={styles.inputText} type="email" placeholder="Insira um email" required />

                            <label htmlFor="click">Ativo</label>
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
                            <img src={ProfileImagem} alt="Imagem do funcionário" className={styles.profileImage} />
                        </div>
                    </div>
                </article>

                <article className={styles.trustedLogButton}>
                    <button onClick={() => setShowFirstTable(true)}>Permissões</button>
                    <button onClick={() => setShowFirstTable(false)}>Log de Acesso</button>
                </article>

                {showFirstTable && (
                    <article className={styles.articleTable}>
                        <div className={`${styles.tableRow} ${styles.firsRow}`}>
                            <span>ID</span>
                            <span>LOCAL</span>
                            <button className={styles.addButton}>+</button>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.overflowTable}>
                            <div className={styles.tableRow}>
                                <span>002</span>
                                <span>Entrada Principal</span>
                                <button className={styles.removeButton}>-</button>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.tableRow}>
                                <span>005</span>
                                <span>Sala de Reuniões 1</span>
                                <button className={styles.removeButton}>-</button>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.tableRow}>
                                <span>008</span>
                                <span>Refeitório</span>
                                <button className={styles.removeButton}>-</button>
                            </div>
                        </div>
                    </article>
                )}

                {!showFirstTable && (
                    <article className={styles.articleTable}>
                        <div className={`${styles.tableRow} ${styles.firsRow}`}>
                            <span>LOCAL</span>
                            <span>DATA E HORA</span>
                            <span>STATUS</span>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.overflowTable}>
                            <div className={styles.tableRow}>
                                <span>Entrada Principal</span>
                                <span>12/02/2024 16:20:35</span>
                                <span>Acesso permitido</span>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.tableRow}>
                                <span>Sala de Reuniões 1</span>
                                <span>12/02/2024 16:20:35</span>
                                <span>Acesso negado</span>
                            </div>

                            <div className={styles.line}></div>

                            <div className={styles.tableRow}>
                                <span>Entrada Principal</span>
                                <span>12/02/2024 16:20:35</span>
                                <span>Acesso permitido</span>
                            </div>
                        </div>
                    </article>
                )}
            </section>
        </main>
    );
}

export default Profile;