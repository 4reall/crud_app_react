import Button from '../Button/Button';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { useFormHandler } from '../../hooks/useFormHandler';

import styles from './addForm.module.css';

const AddForm = (props) => {
	const { getPostFromState, setTitle, setDescription } = useFormHandler('');

	const addPostToData = () => {
		props.addPostToData(getPostFromState());
		setTitle('');
		setDescription('');
	};

	const disabled =
		!getPostFromState().title || !getPostFromState().description;

	return (
		<Form title={'Add a new post'}>
			<div className={styles.inputs}>
				<Input
					setState={setTitle}
					type={'text'}
					placeholder={'Title'}
					value={getPostFromState().title}
				/>
				<Input
					setState={setDescription}
					type={'text'}
					placeholder={'Description'}
					value={getPostFromState().description}
				/>
				<Button handleClick={addPostToData} disabled={disabled}>
					add
				</Button>
			</div>
		</Form>
	);
};

export default AddForm;
