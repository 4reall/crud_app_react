import React from 'react';

import styles from '../Form/form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useFormHandler } from '../../hooks/useFormHandler';

const Form = (props) => {
	const { handleInput, title, setTitle, description, setDescription } =
		useFormHandler('');

	const handleClick = () => {
		props.actionWithData.sortData(props.option);
		handleInput(props.actionWithData.addData);
	};

	const disabled = !title || !description;

	const hasSelect = props.children
		? `${styles.button} ${styles.select}`
		: `${styles.button} `;

	return (
		<form className={styles.form}>
			<h2 className={styles.title}>{props.title}</h2>
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
			<div className={hasSelect}>
				{props.children}
				<Button
					// handleClick={() =>
					// 	handleInput(props.actionWithData.addData)
					// }
					handleClick={handleClick}
					disabled={disabled}
				>
					{props.action}
				</Button>
			</div>
		</form>
	);
};

export default Form;
