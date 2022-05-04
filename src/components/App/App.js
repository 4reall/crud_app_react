import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import { useData } from '../../hooks/useData';
import './app.css';
import SearchForm from '../SearchForm/SearchForm';
import { useMemo, useState } from 'react';

function App() {
	const { data, addData, deleteData, sortData, searchData } = useData();
	const [filter, setFilter] = useState({ sortOption: '', searchQuery: '' });

	const sortedPosts = useMemo(() => {
		return sortData(data, filter.sortOption);
	}, [filter.sortOption, data]);

	const searchedAndSortedPosts = useMemo(() => {
		return searchData(sortedPosts, filter.searchQuery);
	}, [filter.searchQuery, sortedPosts]);

	return (
		<div className="app">
			<AddForm actionWithData={{ addData }} option={filter.sortOption} />
			<SearchForm
				actionWithData={{ sortData, searchData }}
				setFilter={setFilter}
				filter={filter}
				options={[
					{ value: 'title', name: 'Title' },
					{ value: 'description', name: 'description' },
				]}
			/>
			<PostList
				postList={searchedAndSortedPosts}
				actionWithData={{ deleteData }}
			/>
		</div>
	);
}

export default App;
