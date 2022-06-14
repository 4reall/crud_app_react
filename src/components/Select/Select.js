import React from 'react';
import PropTypes from 'prop-types';

import styles from './select.module.css';

const Select = ({ options, value, onChange }) => {
	const view = options.map(({ value, name }) => {
		return (
			<option key={value} value={value}>
				{name}
			</option>
		);
	});

	return (
		<div className={styles.select}>
			<select
				onChange={(e) => onChange(e.target.value)}
				value={value}
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

Select.propTypes = {
	options: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Select;
