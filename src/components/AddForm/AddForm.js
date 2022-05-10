import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Form from '../Form/Form';

import styles from './addForm.module.css';

const AddForm = ({ actionWithData }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const addNewPost = () => {
		actionWithData.addData({
			title,
			description,
			id: Date.now(),
		});
		setTitle('');
		setDescription('');
	};

	const disabled = !title || !description;

	return (
		<Form title={'Add a new post'}>
			<Input
				onChange={setTitle}
				type={'text'}
				placeholder={'Title'}
				value={title}
			/>
			<Input
				onChange={setDescription}
				type={'text'}
				placeholder={'Description'}
				value={description}
			/>
			<Button handleClick={addNewPost} disabled={disabled}>
				add
			</Button>
		</Form>
	);
};

export default AddForm;
