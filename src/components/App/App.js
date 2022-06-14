import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Routes from '../../pages/Routes';
import { AuthContext } from '../context/context';
import { useEffect, useState } from 'react';
// import './app.css';

const App = () => {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('auth')) setIsAuth(true);
	}, []);

	const navBar = isAuth ? <NavBar /> : null;
	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<BrowserRouter>
				{navBar}
				<Routes />
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
