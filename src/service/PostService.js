import axios from 'axios';

class PostService {
	static #URL = 'https://jsonplaceholder.typicode.com';

	static async getAllPosts() {
		const response = await axios.get(`${this.#URL}/posts/`);
		return response.data;
	}
}

export default PostService;
