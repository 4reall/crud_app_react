import Post from '../Post/Post';
import PropTypes from 'prop-types';

import styles from './postList.module.css';

const PostList = ({ postList, deletePostFromData }) => {
	const notEmptyList = postList.map((post, index) => (
		<li key={post.id}>
			<Post
				last={index + 1 === postList.length}
				number={index + 1}
				title={post.title}
				description={post.description}
				deletePostFromData={() => deletePostFromData(post.id)}
			/>
		</li>
	));
	const emptyList = <h2 className={styles.title}>There is no post here</h2>;

	const view = postList.length !== 0 ? notEmptyList : emptyList;

	return <ul className={styles.list}>{view}</ul>;
};
PostList.propTypes = {
	postList: PropTypes.array.isRequired,
	deletePostFromData: PropTypes.func.isRequired,
};

export default PostList;
