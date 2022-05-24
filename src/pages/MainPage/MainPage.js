import React from 'react';

import Container from '../../components/Container/Container';
import NavBar from '../../components/NavBar/NavBar';

import styles from './mainPage.module.css';

const MainPage = () => {
	return (
		<div className={styles.mainPage}>
			<Container>
				<h1 className={styles.title}>CRUD application</h1>
				<p className={styles.text}>
					This app implements four basic features of most apps working
					with data: create, read, update, delete.
				</p>
				<h2 className={styles.subtitle}>
					Stack of technologies used to create this app:
				</h2>
				<ul className={styles.list}>
					<li>HTML</li>
					<li>CSS</li>
					<li>CSS-Modules</li>
					<li>JS</li>
					<li>ReactJS 18</li>
					<li>React Router v6</li>
					<li>React Transition Group</li>
					<li>React Hooks</li>
					<li>Axios</li>
				</ul>
			</Container>
		</div>
	);
};

export default MainPage;
