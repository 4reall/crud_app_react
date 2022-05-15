import React from 'react';
import circlePlus from '../../assets/circle-plus-solid.svg';
import styles from './button.module.css';
function ModalButton({ onClick }) {
	return (
		<div onClick={() => onClick(true)} className={styles.modalButton}>
			<img src={circlePlus} alt="plus" />
		</div>
	);
}

export default ModalButton;
