import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import Comments from './Comments';
import PostInfo from './PostInfo';
import withConditionalRendering from '../../components/withConditionalRendering/withConditionalRendering';

import PostService from '../../service/PostService';
import useFetching from '../../hooks/useFetching';

import styles from './postIdPage.module.css';

const PostIdPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [postError, isPostLoading, fetchPost] = useFetching(async () => {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	});
	const [commentsError, isCommentsLoading, fetchComments] = useFetching(
		async (id) => {
			const response = await PostService.getCommentById(id);
			setComments(response.data);
		}
	);
	useEffect(() => {
		fetchPost(id);
		fetchComments(id);
	}, []);

	const PostWithConditionalRendering = withConditionalRendering([
		Error,
		Loading,
		PostInfo,
	]);
	const CommentsWithConditionalRendering = withConditionalRendering([
		Error,
		Loading,
		Comments,
	]);

	return (
		<div className={styles.postIdPage}>
			<Container>
				<PostWithConditionalRendering
					errorMessage={postError}
					isLoading={isPostLoading}
					id={post.id}
					title={post.title}
					body={post.body}
				/>
				<CommentsWithConditionalRendering
					errorMessage={commentsError}
					isLoading={isCommentsLoading}
					comments={comments}
				/>
			</Container>
		</div>
	);
};

PostIdPage.propTypes = {};

export default PostIdPage;
