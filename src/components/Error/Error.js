import React from 'react';

import styles from './error.module.css';
import errorSvg from '../../assets/triangle-exclamation-solid.svg';
import PropTypes from 'prop-types';

const Error = ({ errorMessage }) => {
	return (
		<div className={styles.container}>
			<img src={errorSvg} alt="error" />
			<div>{errorMessage}</div>
		</div>
	);
};

Error.propType = {
	errorMessage: PropTypes.string.isRequired,
};

export default Error;
