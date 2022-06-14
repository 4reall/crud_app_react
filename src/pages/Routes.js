import React, { useContext } from 'react';
import { Route, Routes as RoutesDOM } from 'react-router-dom';

import { AuthContext } from '../components/context/context';

import { publicRoutes, privateRoutes } from './paths';

const Routes = () => {
	const { isAuth } = useContext(AuthContext);
	const privateView = privateRoutes.map((page, index) => (
		<Route
			key={index}
			exact={page.exact}
			path={page.path}
			element={page.component}
		/>
	));
	const publicView = publicRoutes.map((page, index) => (
		<Route
			key={index}
			exact={page.exact}
			path={page.path}
			element={page.component}
		/>
	));
	const view = isAuth ? privateView : publicView;
	return <RoutesDOM>{view}</RoutesDOM>;
};

Routes.propTypes = {};

export default Routes;
