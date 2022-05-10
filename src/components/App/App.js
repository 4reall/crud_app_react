import { useEffect, useMemo, useState } from 'react';
import { useData } from '../../hooks/useData';

import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import SearchForm from '../SearchForm/SearchForm';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import Button from '../Button/Button';

import './app.css';
import { CSSTransition } from 'react-transition-group';

const App = () => {
	const {
		data,
		addData,
		deleteData,
		sortData,
		searchData,
		filter,
		setFilter,
		modal,
		setModal,
	} = useData();

	useEffect(() => {
		const handler = (e) => {
			if (e.key === 'Enter') setModal(true);
		};

		window.addEventListener('keydown', handler);

		return () => window.removeEventListener('keydown', handler);
	}, []);

	const sortedPosts = useMemo(() => {
		return sortData(data, filter.sortOption);
	}, [filter.sortOption, data]);

	const searchedAndSortedPosts = useMemo(() => {
		return searchData(sortedPosts, filter.searchQuery);
	}, [filter.searchQuery, sortedPosts]);

	return (
		<div className="app">
			\\todo: - add button for open modal on mobile
			<Modal active={modal} setActive={setModal}>
				<AddForm
					actionWithData={{ addData }}
					option={filter.sortOption}
				/>
			</Modal>
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
};

export default App;
