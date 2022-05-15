import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import styles from './post.module.css';

const Post = ({ number, title, body, actionWithData }) => {
	return (
		<div className={styles.post}>
			<div className={styles.postContent}>
				<h2 className={styles.postTitle}>
					{number}. {title}
				</h2>
				<p className={styles.postDescription}>{body}</p>
			</div>
			<Button handleClick={actionWithData}>delete</Button>
		</div>
	);
};

Post.propTypes = {
	number: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	actionWithData: PropTypes.func.isRequired,
};

export default Post;
