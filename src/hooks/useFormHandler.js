import { useState } from 'react';

export const useFormHandler = (initial) => {
	const [title, setTitle] = useState(initial);
	const [description, setDescription] = useState(initial);
	const getPostFromState = () => {
		return {
			title,
			description,
			id: Date.now(),
		};
	};

	return {
		getPostFromState,
		setTitle,
		setDescription,
	};
};
