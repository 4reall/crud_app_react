import React from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from './NavItem';

import { paths } from '../../pages/paths';

import styles from './navBar.module.css';
import homeThumbnail from '../../assets/icons/house-solid.svg';
import postThumbnail from '../../assets/icons/scroll-solid.svg';
import commentThumbnail from '../../assets/icons/comments-solid.svg';

const NavBar = () => {
	const isActive = ({ isActive }) => {
		return isActive ? `${styles.link} ${styles.active}` : styles.link;
	};
	const navItem = (title, thumbnail) => {
		return ({ isActive }) => {
			return (
				<NavItem
					isActive={isActive}
					title={title}
					thumbnail={thumbnail}
				/>
			);
		};
	};

	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				<li>
					<NavLink to={paths.mainPage} className={isActive}>
						{navItem('home', homeThumbnail)}
					</NavLink>
				</li>
				<li>
					<NavLink to={paths.postPage} className={isActive}>
						{navItem('posts', postThumbnail)}
					</NavLink>
				</li>
				<li>
					<NavLink to={paths.profilePage} className={isActive}>
						{navItem('comments', commentThumbnail)}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

NavBar.propTypes = {};

export default NavBar;
