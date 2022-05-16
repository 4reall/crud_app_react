import axios from 'axios';

class PostService {
	static #URL = 'https://jsonplaceholder.typicode.com';

	static async getPosts(limit = 10) {
		return await axios.get(`${this.#URL}/posts/`, {
			params: {
				_limit: limit,
			},
		});
	}
}
export default PostService;
