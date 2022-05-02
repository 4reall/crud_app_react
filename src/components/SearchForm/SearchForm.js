import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form';
import Select from '../Select/Select';

import styles from './searchForm.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SearchForm = (props) => {
	return (
		<Form>
			<div className={styles.search}>
				<Input
					// setState={setTitle}
					type={'text'}
					placeholder={'Title'}
					// value={getPostFromState().title}
				/>
				<Input
					// setState={setDescription}
					type={'text'}
					placeholder={'Description'}
					// value={getPostFromState().description}
				/>
				{/*<Button handleClick={addPostToData} disabled={disabled}>*/}
				{/*    add*/}
				{/*</Button>*/}
				<Button>search</Button>
			</div>
			<Select />
		</Form>
	);
};

SearchForm.propTypes = {};

export default SearchForm;
