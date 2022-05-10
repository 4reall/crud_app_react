import React from 'react';

import styles from '../Form/form.module.css';

const Form = ({ children, title }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<form onSubmit={(e) => e.preventDefault()} className={styles.form}>
				{children}
			</form>
		</div>
	);
};

export default Form;
