import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import { useData } from '../../hooks/useData';
import './app.css';

function App() {
	const { data, addData, deleteData } = useData();

	return (
		<div className="app">
			<AddForm addPostToData={addData} />
			<PostList postList={data} deletePostFromData={deleteData} />
		</div>
	);
}

export default App;
