import React from "react";
import styles from '../styles/UserModal.module.css';
import closeIcon from "../assets/closeIcon.svg"

function UserModal({isOpen, setModalOpen}){

	if(isOpen){
		return(
			<main className={styles.mainContainer} >
				<form>
					<button className={styles.closeModal} onClick={setModalOpen}><img src={closeIcon} alt=""/></button>
					<div className={styles.inputsContainer}>
						<label>Nome:</label>
						<input type="text" placeholder="Insira o nome do colaborador"/>
	
						<label>Email:</label>
						<input type="email" placeholder="Insira o email do colaborador"/>
	
						<label>Cargo:</label>
						<input type="text" placeholder="Insira o cargo do colaborador"/>
					</div>
					<div className={styles.buttonsContainer}>
						<button className={styles.cancelButton} onClick={setModalOpen}>Cancelar</button>
						<button className={styles.singupButton} type="submit">Salvar</button>
					</div>
				</form>
			</main>
		)
		return null;
	}
}

export default UserModal;