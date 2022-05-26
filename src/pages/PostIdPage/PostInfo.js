import React from 'react';
import PropTypes from 'prop-types';
import styles from './postIdPage.module.css';

const PostInfo = ({ id, title, body }) => {
	return (
		<>
			<h2 className={styles.title}>Information about post number {id}</h2>
			<div className={styles.postInfo}>
				<div>
					<span>Title:</span> {title}
				</div>
				<div>
					<span>Body:</span> {body}
				</div>
			</div>
		</>
	);
};

PostInfo.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string,
};

export default PostInfo;
