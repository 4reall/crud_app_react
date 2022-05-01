import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({ children, handleClick, disabled }) => {
	const [isShake, setIsShake] = useState(false);

	const onClick = (e) => {
		e.preventDefault();

		setIsShake(true);
		handleClick();

		setTimeout(() => {
			setIsShake(false);
		}, 1300);
	};

	const shakeAnimationClass = isShake ? styles.buttonShake : null;
	return (
		<button
			className={`${styles.button} ${shakeAnimationClass}`}
			onClick={onClick}
			disabled={isShake || disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	disabled: PropTypes.bool,
	handleClick: PropTypes.func.isRequired,
};

export default Button;
