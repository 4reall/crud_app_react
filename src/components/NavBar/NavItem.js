import React from 'react';
import PropTypes from 'prop-types';

import styles from './navBar.module.css';

const NavItem = ({ isActive, title, thumbnail, transform }) => {
	return (
		<>
			<span className={styles.text}>{title}</span>
			<span className={styles.icon}>
				<img src={thumbnail} alt={title} />
			</span>
			<div
				style={{
					display: isActive ? 'block' : 'none',
					transform: `translateX(${transform})`,
				}}
				className={styles.indicator}
			></div>
		</>
	);
};

NavItem.propTypes = {
	isActive: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
};

export default NavItem;
