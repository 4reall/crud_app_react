import { Route, BrowserRouter } from 'react-router-dom';
import { paths } from '../../pages/paths';
import PostPage from '../../pages/PostPage/PostPage';
import MainPage from '../../pages/MainPage/MainPage';
import CommentPage from '../../pages/CommentPage/CommentPage';
import NavBar from '../NavBar/NavBar';
import Page404 from '../../pages/Page404/Page404';
import Routes from '../../pages/Routes';
// import './app.css';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes />
		</BrowserRouter>
	);
};

export default App;
