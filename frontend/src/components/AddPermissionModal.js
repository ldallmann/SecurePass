import React from "react";
import styles from '../styles/PermissionModal.module.css';
import closeIcon from "../assets/closeIcon.svg"

function AddPermissionModal({isOpen, setModalOpen}){

	if(isOpen){
		return(
			<main className={styles.mainContainer} >
				<form>
					<button className={styles.closeModal} onClick={setModalOpen}><img src={closeIcon} alt=""/></button>
					<div className={styles.inputsContainer}>
						<label>Portas de Acesso:</label>
						<select name="cargo">
							<option>Informe uma porta</option>
							<option value="entradaPrincipal">Entrada Principal</option>
							<option value="salaReuniaoUm">Sala de Reunião 1</option>
							<option value="salaReuniaoDois">Sala de Reunião 2</option>
							<option value="salaReuniaoTres">Sala de Reunião 3</option>
							<option value="entradFundos">Entrada dos Fundos</option>
							<option value="saida">Saída</option>
						</select>
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

export default AddPermissionModal;