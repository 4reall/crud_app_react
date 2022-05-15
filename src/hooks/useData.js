import { useState } from 'react';

export const useData = () => {
	const [data, setData] = useState([]);
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
		if (query === '') return data;
		return data.filter((item) =>
			item.title.toLowerCase().includes(query.toLowerCase())
		);
	};

	return {
		data,
		setData,
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
