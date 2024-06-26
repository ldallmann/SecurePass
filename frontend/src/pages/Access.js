import React from "react";
import styles from '../styles/Acessos.module.css';

function Access({ users = [], doors = [], accessTest = [] }) {
    const getStatusText = (status) => {
        if (status === 'A') {
            return 'Acesso permitido';
        } else if (status === 'D') {
            return 'Acesso negado';
        }
    };

    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainSectionContainer}>
                <article className={styles.articleTitleAccess}>
                    <h2>Acessos</h2>
                </article>

                <article className={styles.inputs}>
                    <div className={styles.containerSelects}>
                        <h4>Usuário</h4>
                        <select name="users">
                            <option value="">Selecione um Usuário</option>
                            {users.map(user => (
                                <option key={user.ID_Usuario} value={user.ID_Usuario}>
                                    {user.Nome_Usuario}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.containerSelects}>
                        <h4>Porta</h4>
                        <select name="doors">
                            <option value="">Selecione uma Porta</option>
                            {doors.map(door => (
                                <option key={door.ID_Porta} value={door.ID_Porta}>
                                    {door.Nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className={styles.accessButton}>Acessar</button>

                    {/* <div className={styles.containerSelects}>
                        <h4>Status</h4>
                        <span className={styles.spanStatusActive}>Acesso permitido</span>
                    </div> */}
                </article>

                <article className={styles.articleTable}>
                    <div className={`${styles.tableRow} ${styles.firsRow}`}> 
                        <span>USUÁRIO</span>
                        <span>LOCAL</span>
                        <span>DATA E HORA</span>
                        <span>STATUS</span>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.overflowTable}>
                        {accessTest.map((item, i) => (
                            <React.Fragment key={i}>
                                <div className={styles.line}></div>

                                <div className={styles.tableRow}>
                                    <span>{item.Nome_Usuario}</span>
                                    <span>{item.Nome}</span>
                                    <span>{item.Data_Hora_Acesso}</span>
                                    <span className={item.Status === 'A' ? styles.accessGranted : styles.accessDenied}>{getStatusText(item.Status)}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Access;