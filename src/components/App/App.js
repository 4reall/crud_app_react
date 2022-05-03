import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import { useData } from '../../hooks/useData';
import './app.css';
import SearchForm from '../SearchForm/SearchForm';
import Form from '../Form/Form';
import Select from '../Select/Select';

function App() {
	const { data, addData, deleteData, sortData, option, setOption } =
		useData();

	return (
		<div className="app">
			<Form
				title={'Add a new post'}
				actionWithData={{ addData, sortData }}
				option={option}
				action={'add'}
			/>
			<Form
				title={'Search'}
				actionWithData={{ sortData }}
				action={'search'}
			>
				<Select
					actionWithData={{ sortData, setOption }}
					option={option}
					options={[
						{ value: 'title', name: 'Title' },
						{ value: 'description', name: 'description' },
					]}
				/>
			</Form>
			<PostList
				postList={data}
				actionWithData={{ deleteData, sortData }}
				option={option}
			/>
		</div>
	);
}

export default App;
