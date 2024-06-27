import React, { useState } from 'react';
import styles from '../styles/Profile.module.css';
import ProfileImagem from "../assets/profileImage.jpeg";
import RemoveButton from "../assets/removebutton.svg";
import AddButton from "../assets/addicon.svg";
import AddPermissionModal from "../components/AddPermissionModal";

function Profile( {permission, permissionUser, accessLog, userInfo} ) {
    const [showFirstTable, setShowFirstTable] = useState(true);
    const[openModal, setOpenModal] = useState(false)

    const handleToggleTable = () => {
        setShowFirstTable(!showFirstTable);
    };

    const getStatusText = (status) => {
        if (status === 'A') {
            return 'Acesso permitido';
        } else if (status === 'D') {
            return 'Acesso negado';
        }
    };

    const isActive = userInfo.Status === 'A';

    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainSectionContainer}>
                <article className={styles.articleInputs}>
                    <h2>Usuário</h2>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputs}>
                            <label>Nome</label>
                            <input className={styles.inputText} type="text" value={userInfo.Nome_Usuario} placeholder="Insira um nome" required />

                            <label>E-mail</label>
                            <input className={styles.inputText} type="email" value={userInfo.Email} placeholder="Insira um email" required />

                            <label htmlFor="click">Ativo</label>
                            <input type="checkbox" id="click" checked={isActive} value="active" />

                            <label>Cargo</label>
                            <select name="permission">
                                <option value="">Selecione um Cargo</option>
                                {permission.map(permission => (
                                    <option key={permission.ID_Permissao} value={permission.ID_Permissao}>
                                        {permission.Cargo}
                                    </option>
                                ))}
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
                            <button onClick={() => setOpenModal(true)} className={styles.addButton}><img src={AddButton} alt=""/></button>
                        </div>
                        <AddPermissionModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>

                        <div className={styles.line}></div>

                        <div className={styles.overflowTable}>
                            {permissionUser.map((permissionUser, i) => (
                                <>
                                    <div className={styles.line}></div>
                                    
                                    <div key={i} className={styles.tableRow}>
                                        <span>{permissionUser.ID_Porta}</span>
                                        <span>{permissionUser.Nome}</span>
                                        <button className={styles.removeButton}><img src={RemoveButton} alt=""/></button>
                                    </div>
                                </>
                            ))}
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
                            {accessLog.map((accessLog, i) => (
                                <>
                                    <div className={styles.line}></div>

                                    <div key={i} className={styles.tableRow}>
                                        <span>{accessLog.Nome}</span>
                                        <span>{accessLog.Data_Hora_Acesso}</span>
                                        <span className={accessLog.Status === 'A' ? styles.accessGranted : styles.accessDenied}>{getStatusText(accessLog.Status)}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                    </article>
                )}
            </section>
        </main>
    );
}

export default Profile;