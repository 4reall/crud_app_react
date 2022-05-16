import { useState } from 'react';
import { useMemo } from 'react';

const useData = () => {
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

	const sortedPostsMemo = useMemo(() => {
		return sortData(data, filter.sortOption);
	}, [filter.sortOption, data]);

	const searchedAndSortedPostsMemo = useMemo(() => {
		return searchData(sortedPostsMemo, filter.searchQuery);
	}, [filter.searchQuery, sortedPostsMemo]);

	return {
		data,
		setData,
		addData,
		deleteData,
		sortData,
		searchData,
		searchedAndSortedPostsMemo,
		filter,
		setFilter,
		modal,
		setModal,
	};
};

export default useData;
