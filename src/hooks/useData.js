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
	const [filter, setFilter] = useState({ sortOption: '', searchQuery: '' });
	const [modal, setModal] = useState(false);

	const addData = (newData) => {
		setModal(false);
		setData((oldData) => [...oldData, newData]);
	};

	const deleteData = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const sortData = (data, option) => {
		if (option === '') return data;
		return [...data].sort((a, b) => a[option].localeCompare(b[option]));
	};

	const searchData = (data, query) => {
		const regExp = new RegExp(`${query}`, 'gmi');
		return data.filter((item) => regExp.test(item.title));
	};

	return {
		data,
		addData,
		deleteData,
		sortData,
		searchData,
		filter,
		setFilter,
		modal,
		setModal,
	};
};
