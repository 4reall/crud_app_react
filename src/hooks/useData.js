import { useState } from 'react';

import { postDB } from '../dataBases/postDB';

export const useData = (initial = postDB) => {
	const [data, setData] = useState(initial);

	const addData = (newData) => {
		setData((oldData) => [...oldData, newData]);
	};
	const deleteData = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	return { data, addData, deleteData };
};
