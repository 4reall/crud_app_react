import { useState } from 'react';

const useFetching = (callback) => {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const fetching = async (...args) => {
		try {
			setLoading(true);
			await callback(...args);
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	return [error, loading, fetching];
};

export default useFetching;
