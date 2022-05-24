import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import styles from './post.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../pages/paths';

const Post = ({ id, title, body, actionWithData }) => {
	const navigate = useNavigate();

	const goToComment = () => {
		navigate(`${paths.postPage}${id}`);
	};

	return (
		<div className={styles.post}>
			<div className={styles.postContent}>
				<h2 className={styles.postTitle}>
					{id}. {title}
				</h2>
				<p className={styles.postDescription}>{body}</p>
			</div>
			<div className={styles.buttons}>
				{/*<Button>*/}
				{/*	<Link to={paths.page404}>Open</Link>*/}
				{/*</Button>*/}
				<Button handleClick={goToComment}>comment</Button>

				<Button handleClick={actionWithData}>delete</Button>
			</div>
		</div>
	);
};

Post.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	actionWithData: PropTypes.func.isRequired,
};

export default Post;
