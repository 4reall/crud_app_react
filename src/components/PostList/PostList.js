import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import styles from './postList.module.css';

const PostList = ({ postList, actionWithData }) => {
	const list = postList.map((post, index) => (
		<CSSTransition key={post.id} timeout={500} classNames="post">
			<li>
				<Post
					id={post.id}
					title={post.title}
					body={post.body}
					actionWithData={() => actionWithData.deleteData(post.id)}
				/>
			</li>
		</CSSTransition>
	));

	const view =
		postList.length !== 0 ? (
			// <TransitionGroup>{list}</TransitionGroup>
			list
		) : (
			<CSSTransition timeout={500} classNames="post">
				<li className={styles.title}>There is no post here</li>
			</CSSTransition>
		);

	return (
		<ul className={styles.list}>
			<TransitionGroup>{view}</TransitionGroup>
		</ul>
	);
};

PostList.propTypes = {
	postList: PropTypes.array.isRequired,
	actionWithData: PropTypes.object.isRequired,
};

export default PostList;
