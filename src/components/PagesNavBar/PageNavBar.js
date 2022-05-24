import PropTypes from 'prop-types';

import styles from './pageNavBar.module.css';

const PageNavBar = ({ buttonsArray, changePage, page }) => {
	const setActive = (btnIndex, page) => {
		return btnIndex === page
			? [styles.button, styles.active].join(' ')
			: styles.button;
	};
	const view = buttonsArray.map((button, i) => (
		<button
			key={i}
			onClick={() => changePage(i + 1)}
			className={setActive(i + 1, page)}
		>
			{button}
		</button>
	));
	return (
		<div className={styles.container}>
			<div className={styles.inner}>{view}</div>
		</div>
	);
};

PageNavBar.propTypes = {
	buttonsArray: PropTypes.array.isRequired,
	changePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
};

export default PageNavBar;
