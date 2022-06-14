import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import { AuthContext } from '../../components/context/context';

import { paths } from '../paths';

import styles from './authorizationPage.module.css';

const AuthorizationPage = () => {
	const { setIsAuth } = useContext(AuthContext);
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const onSubmit = () => {
		setIsAuth(true);
		navigate(paths.mainPage);
		localStorage.setItem('auth', 'true');
	};
	return (
		<div className={styles.authorizationPage}>
			<Form title={'Sign in to CRUD app'} onSubmit={onSubmit}>
				<Input
					onChange={setLogin}
					value={login}
					type={'text'}
					placeholder={'Login'}
				/>
				<Input
					onChange={setPassword}
					value={password}
					type={'password'}
					placeholder={'Password'}
				/>
				<Button>sign in</Button>
			</Form>
		</div>
	);
};

AuthorizationPage.propTypes = {};

export default AuthorizationPage;
