import React from "react";
import styles from '../styles/Home.module.css';
import { Link } from "react-router-dom";
import GearIcon from "../assets/gear-icon.svg";
import AddIcon from "../assets/addicon.svg";
import UserModal from "../components/UserModal";
import {useState} from "react";

function Home({ usersHome, getAccessLog, getPermissionsUser }) {
    const [openModal, setOpenModal] = useState(false);

    const handleProfileClick = (userID) => {
        getAccessLog(userID);
        getPermissionsUser(userID);
    };

    const formatStatus = (status) => {
        return status === 'A' ? 'Sim' : 'Não';
    };

    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainSectionContainer}>
                <article className={styles.articleTable}>
                    <div className={styles.tableRow}>
                        <div className={styles.idNameContainer}>
                            <span className={`${styles.idCell} ${styles.firstRow}`}>ID</span>
                            <span className={`${styles.nameCell} ${styles.firstRow}`}>NOME</span>
                        </div>

                        <div className={styles.cargoSettingsContainer}>
                            <span className={`${styles.roleCell} ${styles.firstRow}`}>CARGO</span>
                            <span className={`${styles.activeCell} ${styles.firstRow}`}>ATIVO</span>
                            <button onClick={() => setOpenModal(true)}><img src={AddIcon} alt="Adicionar"/></button>
                        </div>
                        <UserModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.overflowTable}>
                        {usersHome.map((user, i) => (
                            <React.Fragment key={i}>
                                <div className={`${styles.tableRow} ${styles.tableRowHover}`}>
                                    <div className={styles.idNameContainer}>
                                        <span className={styles.idCell}>{user.ID_Usuario}</span>
                                        <span className={styles.nameCell}>{user.Nome_Usuario}</span>
                                    </div>

                                    <div className={styles.cargoSettingsContainer}>
                                        <span className={styles.roleCell}>{user.Cargo}</span>
                                        <span className={styles.activeCell}>{formatStatus(user.Status)}</span>
                                        <Link to={`/profile/${user.ID_Usuario}`} className={styles.optionsCell} onClick={() => handleProfileClick(user.ID_Usuario)}>
                                            <img src={GearIcon} alt="Configurações"/>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.line}></div>
                            </React.Fragment>
                        ))}
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Home;