const addKeyDownListener = (key, action) => {
	const handler = (e) => {
		if (e.key === key) action(true);
	};

	window.addEventListener('keydown', handler);

	return () => window.removeEventListener('keydown', handler);
};
export default addKeyDownListener;
