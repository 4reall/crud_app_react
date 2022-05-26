import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';

import { paths } from '../paths';

import styles from './page404.module.css';
import gif404 from '../../assets/icons/browser-error.svg';

const Page404 = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(paths.mainPage);
	};

	return (
		<Container>
			<img className={styles.img} src={gif404} alt="" />
			<div className={styles.message}>Page has not been found </div>
			<Button handleClick={handleClick}>main page</Button>
		</Container>
	);
};

export default Page404;
