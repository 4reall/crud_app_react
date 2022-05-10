import React from 'react';
import PropTypes from 'prop-types';

import Form from '../Form/Form';
import Select from '../Select/Select';
import Input from '../Input/Input';

import styles from './searchForm.module.css';

const SearchForm = ({ actionWithData, filter, setFilter, options }) => {
	return (
		<Form title={'Search'}>
			<Input
				type={'text'}
				placeholder={'Search'}
				onChange={(searchQuery) =>
					setFilter({ ...filter, searchQuery: searchQuery })
				}
				value={filter.searchQuery}
				actionWithData={actionWithData.searchData}
			/>
			<Select
				onChange={(selectedSort) =>
					setFilter({ ...filter, sortOption: selectedSort })
				}
				value={filter.sortOption}
				options={options}
			/>
		</Form>
	);
};

SearchForm.propTypes = {
	actionWithData: PropTypes.object.isRequired,
	filter: PropTypes.object.isRequired,
	setFilter: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
};

export default SearchForm;
