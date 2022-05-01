import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import styles from './post.module.css';

const Post = ({ title, description, deletePostFromData }) => {
	return (
		<div className={styles.post}>
			<div className={styles.postContent}>
				<div className={styles.postTitle}>{title}</div>
				<p className={styles.postDescr}>{description}</p>
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
