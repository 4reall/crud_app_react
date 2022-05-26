import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../components/context/context';

import { paths } from '../paths';

const ProfilePage = () => {
	const { setIsAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const logout = () => {
		setIsAuth(false);
		navigate(paths.mainPage);
		localStorage.removeItem('auth');
	};
	return (
		<Container>
			<Button handleClick={logout}>log out</Button>
		</Container>
	);
};

ProfilePage.propTypes = {};

export default ProfilePage;
