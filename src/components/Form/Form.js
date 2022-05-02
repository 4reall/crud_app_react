import React from 'react';

import styles from '../Form/form.module.css';

const Form = ({ children, title }) => {
	return (
		<form className={styles.form}>
			<h2 className={styles.title}>{title}</h2>
			{children}
		</form>
	);
};

export default Form;
