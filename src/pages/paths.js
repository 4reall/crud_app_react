import MainPage from './MainPage/MainPage';
import PostPage from './PostPage/PostPage';
import ProfilePage from './ProfilePage/ProfilePage';
import Page404 from './Page404/Page404';
import PostIdPage from './PostIdPage/PostIdPage';
import AuthorizationPage from './AuthorizationPage/AuthorizationPage';

export const paths = {
	mainPage: '/crud_app_react/',
	postPage: '/crud_app_react/post/',
	postIdPage: '/crud_app_react/post/:id',
	profilePage: '/crud_app_react/comments/',
	authorizationPage: '/crud_app_react/authorization/',
	page404: '*',
};

export const privateRoutes = [
	{ path: paths.mainPage, component: <MainPage />, exact: true },
	{ path: paths.postPage, component: <PostPage />, exact: true },
	{ path: paths.postIdPage, component: <PostIdPage />, exact: true },
	{ path: paths.profilePage, component: <ProfilePage />, exact: true },
	{ path: paths.page404, component: <Page404 /> },
];

export const publicRoutes = [
	{ path: paths.mainPage, component: <MainPage />, exact: true },
	{
		path: paths.authorizationPage,
		component: <AuthorizationPage />,
		exact: true,
	},
	{ path: paths.page404, component: <Page404 /> },
];
