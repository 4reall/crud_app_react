import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ onChange, actionWithData, ...props }) => {
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
	actionWithData: PropTypes.func,
};

export default Input;
