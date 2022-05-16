import { useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import useFetching from '../../hooks/useFetching';
import usePagination from '../../hooks/usePagination';
import useData from '../../hooks/useData';

import ModalButton from '../Button/ModalButton';
import PostList from '../PostList/PostList';
import AddForm from '../AddForm/AddForm';
import SearchForm from '../SearchForm/SearchForm';
import Modal from '../Modal/Modal';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import Container from '../Container/Container';
import PagesNavBar from '../PagesNavBar/PagesNavBar';

import PostService from '../../service/PostService';
import addKeyDownListener from '../../helpers/addKeyDownListner';
import getTotalPages from '../../helpers/getTotalPages';

import './app.css';

const App = () => {
	const data = useData();
	const { buttonsArrayMemo, setTotalPages } = usePagination();
	const { error, loading, fetching } = useFetching(async () => {
		const LIMIT = 2;
		const response = await PostService.getPosts(LIMIT);
		data.setData(response.data);
		setTotalPages(getTotalPages(+response.headers['x-total-count'], LIMIT));
	});
	useEffect(() => {
		addKeyDownListener('Enter', data.setModal);
		fetching();
	}, []);

	const searchedAndSortedPosts = data.searchedAndSortedPostsMemo;
	const buttonsArray = buttonsArrayMemo;

	const modalBtn =
		!data.modal && isMobile ? (
			<ModalButton onClick={data.setModal} />
		) : null;

	const errorMessage = error ? <Error errorMessage={error} /> : null;
	const spinner = loading ? <Loading /> : null;
	const postList =
		!error && !loading ? (
			<PostList
				postList={searchedAndSortedPosts}
				actionWithData={{ deleteData: data.deleteData }}
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
			<Modal active={data.modal} setActive={data.setModal}>
				<AddForm
					actionWithData={{ addData: data.addData }}
					option={data.filter.sortOption}
				/>
			</Modal>
			<SearchForm
				actionWithData={{
					sortData: data.sortData,
					searchData: data.searchData,
				}}
				setFilter={data.setFilter}
				filter={data.filter}
				options={[
					{ value: 'title', name: 'Title' },
					{ value: 'body', name: 'description' },
				]}
			/>
			{view}
			<PagesNavBar buttonsArray={buttonsArray} />
		</div>
	);
};

export default App;
