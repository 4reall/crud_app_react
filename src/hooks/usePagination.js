import { useMemo, useState } from 'react';
import getTotalPages from '../helpers/getTotalPages';

const usePagination = (callback) => {
	const [totalPages, setTotalPages] = useState(1);

	const buttonsArrayMemo = useMemo(() => {
		return new Array(totalPages).fill('').map((_, i) => i + 1);
	}, [totalPages]);

	return {
		buttonsArrayMemo,
		setTotalPages,
	};
};
export default usePagination;
