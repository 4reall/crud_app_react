import MainPage from './MainPage/MainPage';
import PostPage from './PostPage/PostPage';
import CommentPage from './CommentPage/CommentPage';
import Page404 from './Page404/Page404';
import PostIdPage from './PostIdPage/PostIdPage';

export const paths = {
	mainPage: '/crud_app_react/',
	postPage: '/crud_app_react/post/',
	postIdPage: '/crud_app_react/post/:id',
	commentPage: '/crud_app_react/comments/',
	page404: '*',
};

export const routes = [
	{ path: paths.mainPage, component: <MainPage />, exact: true },
	{ path: paths.postPage, component: <PostPage />, exact: true },
	{ path: paths.postIdPage, component: <PostIdPage />, exact: true },
	{ path: paths.commentPage, component: <CommentPage />, exact: true },
	{ path: paths.page404, component: <Page404 /> },
];
