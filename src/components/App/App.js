import { useEffect, useMemo, useState } from 'react';
import { useData } from '../../hooks/useData';
import { CSSTransition } from 'react-transition-group';
import { isMobile } from 'react-device-detect';

import ModalButton from '../Button/ModalButton';
import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import SearchForm from '../SearchForm/SearchForm';
import Modal from '../Modal/Modal';

import Form from '../Form/Form';
import Button from '../Button/Button';
import './app.css';
import addKeyDownListener from '../../helpers/addKeyDownListner';
import PostService from '../../service/PostService';
import Error from '../Error/Error';
import useFetching from '../../hooks/useFetching';
import loading from '../Loading/Loading';
import Loading from '../Loading/Loading';
import Container from '../Container/Container';
import { logDOM } from '@testing-library/react';

const App = () => {
	const {
		data,
		setData,
		addData,
		deleteData,
		sortData,
		searchData,
		filter,
		setFilter,
		modal,
		setModal,
	} = useData();

	const { error, loading, fetching } = useFetching(async () => {
		const response = await PostService.getAllPosts();
		setData(response);
		// .catch((error) => console.log(error));
	});

	useEffect(() => {
		addKeyDownListener('Enter', setModal);
		fetching();
	}, []);

	const sortedPosts = useMemo(() => {
		return sortData(data, filter.sortOption);
	}, [filter.sortOption, data]);

	const searchedAndSortedPosts = useMemo(() => {
		return searchData(sortedPosts, filter.searchQuery);
	}, [filter.searchQuery, sortedPosts]);

	const modalBtn =
		!modal && isMobile ? <ModalButton onClick={setModal} /> : null;

	const errorMessage = error ? <Error errorMessage={error} /> : null;
	const spinner = loading ? <Loading /> : null;
	const postList =
		!error && !loading ? (
			<PostList
				postList={searchedAndSortedPosts}
				actionWithData={{ deleteData }}
			/>
		) : null;

	const view = (
		<Container>
			{errorMessage}
			{spinner}
			{postList}
		</Container>
	);

	return (
		<div className="app">
			{modalBtn}
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
					{ value: 'body', name: 'description' },
				]}
			/>
			{view}
		</div>
	);
};

export default App;
