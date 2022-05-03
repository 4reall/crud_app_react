import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import { useData } from '../../hooks/useData';
import './app.css';
import SearchForm from '../SearchForm/SearchForm';
import Form from '../Form/Form';
import Select from '../Select/Select';
import Input from '../Input/Input';
import { useState } from 'react';

function App() {
	const { data, addData, deleteData, sortData, searchData } = useData();
	const [option, setOption] = useState('');

	return (
		<div className="app">
			<AddForm
				actionWithData={{ addData, sortData }}
				option={option}
				action={'add'}
			/>
			<Form title={'Search'}>
				<Input
					setState={setOption}
					placeholder={'Search'}
					actionWithData={{ searchData }}
				/>
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
