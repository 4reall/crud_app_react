import React from 'react';
import PropTypes from 'prop-types';

import styles from './select.module.css';

const Select = (props) => {
	return (
		<div className={styles.select}>
			<label className={styles.label} for="sorting">
				Sorting by
			</label>
			<select name="select" id="sorting">
				<option value="number">Number</option>
				<option value="title">Title</option>;
			</select>
		</div>
	);
};

Select.propTypes = {};

export default Select;
