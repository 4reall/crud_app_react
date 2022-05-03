import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ setState, actionWithData, ...props }) => {
	const inputHandler = (e) => {
		actionWithData.searchData(e.target.value);
		setState(e.target.value);
	};
	return (
		<input {...props} onChange={inputHandler} className={styles.input} />
	);
};

Input.propTypes = {
	setState: PropTypes.func.isRequired,
};

export default Input;
