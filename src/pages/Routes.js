import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes as RoutesDOM } from 'react-router-dom';
import { paths, routes } from './paths';
import MainPage from './MainPage/MainPage';
import PostPage from './PostPage/PostPage';
import CommentPage from './CommentPage/CommentPage';
import Page404 from './Page404/Page404';

const Routes = (props) => {
	const privateRoutes = routes.map((page, index) => (
		<Route
			key={index}
			exact={page.exact}
			path={page.path}
			element={page.component}
		/>
	));
	return <RoutesDOM>{privateRoutes}</RoutesDOM>;
};

Routes.propTypes = {};

export default Routes;
