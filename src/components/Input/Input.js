import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ onChange, value, ...props }) => {
	return (
		<input
			{...props}
			onChange={(e) => onChange(e.target.value)}
			className={styles.input}
		/>
	);
};

Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default Input;
