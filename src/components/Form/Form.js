import React from 'react';

import styles from '../Form/form.module.css';

const Form = ({ children }) => {
	return <form className={styles.form}>{children}</form>;
};

export default Form;
