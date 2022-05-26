import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import useFetching from '../../hooks/useFetching';
import usePagination from '../../hooks/usePagination';
import useData from '../../hooks/useData';

import ModalButton from '../../components/Button/ModalButton';
import PostList from '../../components/PostList/PostList';
import AddForm from '../../components/AddForm/AddForm';
import SearchForm from '../../components/SearchForm/SearchForm';
import Modal from '../../components/Modal/Modal';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import Container from '../../components/Container/Container';
import PageNavBar from '../../components/PagesNavBar/PageNavBar';
import withConditionalRendering from '../../components/withConditionalRendering/withConditionalRendering';

import PostService from '../../service/PostService';
import addKeyDownListener from '../../helpers/addKeyDownListner';
import getTotalPages from '../../helpers/getTotalPages';

import styles from './postPage.module.css';

const PostPage = () => {
	const data = useData();
	const { buttonsArrayMemo, setTotalPages, page, setPage } = usePagination();
	const [currentPostCount, setCurrentPostCount] = useState(page * 10);
	const [error, loading, fetchPosts] = useFetching(async (page) => {
		const LIMIT = 10;
		const response = await PostService.getPosts(LIMIT, page);
		data.setData(response.data);
		const totalCount = response.headers['x-total-count'];
		setCurrentPostCount(+totalCount);
		setTotalPages(getTotalPages(totalCount, LIMIT));
	});
	useEffect(() => {
		addKeyDownListener('Enter', data.setModal);
		fetchPosts(page);
	}, []);

	const changePage = (page) => {
		setPage(page);
		fetchPosts(page);
	};

	const searchedAndSortedPosts = data.searchedAndSortedPostsMemo;
	const buttonsArray = buttonsArrayMemo;

	const modalBtn =
		!data.modal && isMobile ? (
			<ModalButton onClick={data.setModal} />
		) : null;

	const pageNavbar =
		!error && !loading ? (
			<PageNavBar
				changePage={changePage}
				buttonsArray={buttonsArray}
				page={page}
			/>
		) : null;

	const PostListWithConditionalRendering = withConditionalRendering([
		Error,
		Loading,
		PostList,
	]);

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
		<>
			<Container>
				{errorMessage}
				{spinner}
				{postList}
				{/*<PostListWithConditionalRendering*/}
				{/*	errorMessage={error}*/}
				{/*	isLoading={loading}*/}
				{/*	postList={searchedAndSortedPosts}*/}
				{/*	actionWithData={{ deleteData: data.deleteData }}*/}
				{/*/>*/}
			</Container>
			{pageNavbar}
		</>
	);

	return (
		<div className={styles.postPage}>
			{modalBtn}
			<Modal active={data.modal} setActive={data.setModal}>
				<AddForm
					actionWithData={{ addData: data.addData }}
					currentPostCount={currentPostCount}
					setCurrentPostCount={setCurrentPostCount}
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
		</div>
	);
};

export default PostPage;
