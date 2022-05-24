import { useMemo, useState } from 'react';

const usePagination = () => {
	const [totalPages, setTotalPages] = useState(1);
	const [page, setPage] = useState(1);

	const buttonsArrayMemo = useMemo(() => {
		return new Array(totalPages).fill('').map((_, i) => i + 1);
	}, [totalPages]);

	return {
		buttonsArrayMemo,
		setTotalPages,
		page,
		setPage,
	};
};
export default usePagination;
