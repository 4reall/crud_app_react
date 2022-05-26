import PropTypes from 'prop-types';
import React from 'react';

import styles from '../Form/form.module.css';
import Container from '../Container/Container';

const Form = ({ children, title, onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSubmit) onSubmit();
	};

	return (
		<Container>
			<h2 className={styles.title}>{title}</h2>
			<form onSubmit={handleSubmit} className={styles.form}>
				{children}
			</form>
		</Container>
	);
};

Form.propTypes = {
	title: PropTypes.string,
};

export default Form;
