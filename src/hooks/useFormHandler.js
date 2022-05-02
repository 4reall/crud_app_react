import { useState } from 'react';

export const useFormHandler = (initial) => {
	const [title, setTitle] = useState(initial);
	const [description, setDescription] = useState(initial);
	const [option, setOption] = useState(initial);

	const handleInput = (callback) => {
		callback({
			title,
			description,
			id: Date.now(),
		});
		setTitle('');
		setDescription('');
	};

	const handleSelect = (e, callback) => {
		setOption(e.target.value);
		callback(e.target.value);
	};

	return {
		handleInput,
		handleSelect,
		title,
		setTitle,
		description,
		setDescription,
		option,
	};
};
