import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';

import Form from '../Form/Form';
import styles from './addForm.module.css';

const AddForm = ({ actionWithData, currentPostCount, setCurrentPostCount }) => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addNewPost = () => {
		actionWithData.addData({
			title,
			body,
			id: currentPostCount + 1,
		});
		setCurrentPostCount((prevState) => prevState + 1);
		setTitle('');
		setBody('');
	};

	const disabled = !title || !body;

	return (
		<Form title={'Add a new post'}>
			<Input
				onChange={setTitle}
				type={'text'}
				placeholder={'Title'}
				value={title}
			/>
			<Input
				onChange={setBody}
				type={'text'}
				placeholder={'Description'}
				value={body}
			/>
			<Button handleClick={addNewPost} disabled={disabled}>
				add
			</Button>
		</Form>
	);
};

AddForm.propTypes = {
	actionWithData: PropTypes.object.isRequired,
};

export default AddForm;
