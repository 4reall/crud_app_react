import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import { useData } from '../../hooks/useData';
import './app.css';
import SearchForm from '../SearchForm/SearchForm';

function App() {
	const { data, addData, deleteData } = useData();

	return (
		<div className="app">
			<AddForm addPostToData={addData} />
			<SearchForm />
			<PostList postList={data} deletePostFromData={deleteData} />
		</div>
	);
}

export default App;
