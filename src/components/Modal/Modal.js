import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal.module.css';
import Form from '../Form/Form';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ children, active, setActive }) => {
	const onClose = () => {
		setActive(false);
	};

	// const modalClasses = active
	// 	? [styles.modal, styles.modalActive].join(' ')
	// 	: styles.modal;
	return (
		<CSSTransition
			in={active}
			timeout={300}
			classNames={'modal'}
			unmountOnExit
			mountOnEnter
		>
			<div className={styles.modal} onClick={() => setActive(false)}>
				<div
					className={styles.content}
					onClick={(e) => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</CSSTransition>
	);
};

Modal.propTypes = {};

export default Modal;
