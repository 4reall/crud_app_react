import React, { useEffect, useState } from 'react';

import styles from '../Form/form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Form from '../Form/Form';

const AddForm = ({ actionWithData, option }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		actionWithData.sortData(option);
		setFlag(false);
	}, [flag]);

	const addNewPost = () => {
		actionWithData.addData({
			title,
			description,
			id: Date.now(),
		});
		setTitle('');
		setDescription('');
		setFlag(true);
	};

	const disabled = !title || !description;

	return (
		<Form title={'Add a new post'}>
			<Input
				setState={setTitle}
				type={'text'}
				placeholder={'Title'}
				value={title}
			/>
			<Input
				setState={setDescription}
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
