import React from 'react';
import PropTypes from 'prop-types';
import styles from './postIdPage.module.css';

const Comments = ({ comments }) => {
	const comms = comments.map((comm, i) => (
		<li key={comm.id}>
			<div>
				{i + 1}. {comm.body}
			</div>
			<div>User: {comm.name}</div>
			<div>Email: {comm.email}</div>
		</li>
	));
	return (
		<>
			<h3 className={styles.subtitle}>Comments</h3>
			<ul className={styles.comments}>{comms}</ul>
		</>
	);
};

Comments.propTypes = {
	comments: PropTypes.array.isRequired,
};

export default Comments;
