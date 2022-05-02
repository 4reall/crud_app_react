import { useState } from 'react';

const postDB = [
	{
		title: 'JavaScript',
		description:
			'There is description for JSThere is description for JSThere is description for JSThere is description for JSThere is description for JSThere is description for JSThere is description for JSThere is description for JSThere is description for JS',
		id: '1',
	},
	{
		title: 'Python',
		description: 'BThere is description for Python',
		id: '2',
	},
	{
		title: 'C#',
		description: 'AThere is description for C',
		id: '3',
	},
];

export const useData = (initial = postDB) => {
	const [data, setData] = useState(initial);

	const addData = (newData) => {
		setData((oldData) => [...oldData, newData]);
	};
	const deleteData = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const sortData = (option) => {
		setData([...data].sort((a, b) => a[option].localeCompare(b[option])));
	};

	return { data, addData, deleteData, sortData };
};
