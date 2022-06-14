import axios from 'axios';

class PostService {
	static #URL = 'https://jsonplaceholder.typicode.com';

	static async getPosts(limit = 10, page = 1) {
		return await axios.get(`${this.#URL}/posts/`, {
			params: {
				_limit: limit,
				_page: page,
			},
		});
	}
	static async getPostById(id) {
		return await axios.get(`${this.#URL}/posts/${id}`);
	}
	static async getCommentById(id) {
		return await axios.get(`${this.#URL}/posts/${id}/comments`);
	}
}
export default PostService;
