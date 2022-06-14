import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../components/context/context';

import { paths } from '../paths';

import styles from './mainPage.module.css';

const MainPage = () => {
	const { isAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(paths.authorizationPage);
	};

	const publicView = (
		<>
			<h1 className={styles.title}>CRUD application</h1>
			<h2 className={styles.subtitle}>Sign in to use the app</h2>
			<Button handleClick={handleClick}>Sing in</Button>
		</>
	);

	const privateView = (
		<>
			<h1 className={styles.title}>CRUD application</h1>
			<p className={styles.text}>
				This app implements the four basic features of most apps working
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
		</>
	);

	const view = isAuth ? privateView : publicView;

	return (
		<div className={styles.mainPage}>
			<Container>{view}</Container>
		</div>
	);
};

export default MainPage;
