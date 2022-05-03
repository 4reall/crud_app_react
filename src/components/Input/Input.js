import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ setState, ...props }) => {
	const inputHandler = (e) => setState(e.target.value);
	return (
		<input {...props} onChange={inputHandler} className={styles.input} />
	);
};

Input.propTypes = {
	setState: PropTypes.func.isRequired,
};

export default Input;
