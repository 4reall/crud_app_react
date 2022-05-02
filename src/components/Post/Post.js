import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import styles from './post.module.css';

const Post = ({ number, title, description, last, deletePostFromData }) => {
	const postClasses = last
		? `${styles.post} ${styles.postLast}`
		: `${styles.post}
		`;
	return (
		<div className={postClasses}>
			<div className={styles.postContent}>
				<h2 className={styles.postTitle}>
					{number}. {title}
				</h2>
				<p className={styles.postDescription}>{description}</p>
			</div>
			<Button handleClick={deletePostFromData}>delete</Button>
		</div>
	);
};

Post.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	deletePostFromData: PropTypes.func.isRequired,
};

export default Post;
