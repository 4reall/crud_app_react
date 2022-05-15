import PropTypes from 'prop-types';
import React from 'react';

import styles from '../Form/form.module.css';
import Container from '../Container/Container';

const Form = ({ children, title, isOneCol }) => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Container>
			<h2 className={styles.title}>{title}</h2>
			<form onSubmit={onSubmit} className={styles.form}>
				{children}
			</form>
		</Container>
	);
};

Form.propTypes = {
	title: PropTypes.string,
	colNumberClass: PropTypes.bool,
};

export default Form;
