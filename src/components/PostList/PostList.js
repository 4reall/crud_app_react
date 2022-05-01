import Post from '../Post/Post';
import PropTypes from 'prop-types';

import styles from './postList.module.css';

const PostList = ({ postList, deletePostFromData }) => {
	return (
		<ul className={styles.list}>
			{postList.map((post) => (
				<li key={post.id}>
					<Post
						title={post.title}
						description={post.description}
						deletePostFromData={() => deletePostFromData(post.id)}
					/>
				</li>
			))}
		</ul>
	);
};
PostList.propTypes = {
	postList: PropTypes.array.isRequired,
	deletePostFromData: PropTypes.func.isRequired,
};

export default PostList;
