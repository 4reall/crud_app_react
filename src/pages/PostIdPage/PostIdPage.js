import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/Container';
import { useParams } from 'react-router-dom';
import useFetching from '../../hooks/useFetching';
import PostService from '../../service/PostService';
import loading from '../../components/Loading/Loading';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './postIdPage.module.css';

const PostIdPage = (props) => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [isPostLoading, postError, fetchPost] = useFetching(async () => {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	});
	const [isCommentsLoading, commentsError, fetchComments] = useFetching(
		async (id) => {
			const response = await PostService.getCommentById(id);
			setComments(response.data);
		}
	);
	useEffect(() => {
		fetchPost(id);
		fetchComments(id);
	}, []);

	const postInfo = (
		<div>
			<div>Title: {post.title}</div>
			<div>Body: {post.body}</div>
		</div>
	);

	const comms = comments.map((comm, i) => (
		<li key={i}>
			<div className={styles.commentsBody}>
				{i + 1}. {comm.body}
			</div>
			<div className={styles.commentsTitle}>User: {comm.name}</div>
			<div className={styles.commentsEmail}>Email: {comm.email}</div>
		</li>
	));

	const spinner = isPostLoading && isCommentsLoading ? <Loading /> : null;
	const postErrorMessage = postError ? (
		<Error errorMessage={postError} />
	) : null;

	return (
		<Container>
			<h2 className={styles.title}>
				Information about post number {post.id}
			</h2>
			<div className={styles.postInfo}>
				<div className={styles.postTitle}>
					<span>Title:</span> {post.title}
				</div>
				<div className={styles.postBody}>
					<span>Body:</span> {post.body}
				</div>
			</div>
			<h3 className={styles.subtitle}>Comments</h3>
			<ul className={styles.comments}>{comms}</ul>
		</Container>
	);
};

PostIdPage.propTypes = {};

export default PostIdPage;
