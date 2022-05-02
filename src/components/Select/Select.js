import React from 'react';
import PropTypes from 'prop-types';

import { useFormHandler } from '../../hooks/useFormHandler';

import styles from './select.module.css';

const Select = ({ options, actionWithData }) => {
	const { option, handleSelect } = useFormHandler();

	const view = options.map(({ value, name }, index) => {
		return (
			<option key={value} value={value}>
				{name}
			</option>
		);
	});

	return (
		<div className={styles.select}>
			<select
				onChange={(e) => handleSelect(e, actionWithData.sortData)}
				value={option}
				name="select"
			>
				<option disabled value="">
					Sorting by
				</option>
				{view}
			</select>
		</div>
	);
};

Select.propTypes = {};

export default Select;
