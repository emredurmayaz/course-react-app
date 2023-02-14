import React, { useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import { v1 as uuidv1 } from 'uuid';

const forbiddenSymbols = /[@#$%^&]/;

const CreateCourse = ({ authors, createCourseButtonClicked, addNewAuthor }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [addAuthorList, setAddAuthorList] = useState(authors);
	const [deleteAuthorList, setDeleteAuthorList] = useState([]);
	const [author, setAuthor] = useState('');
	const [duration, setDuration] = useState();

	const handleTitleChange = (value) => {
		if (!forbiddenSymbols.test(value)) {
			setTitle(value.target.value);
		}
	};

	const handleDescriptionChange = (event) => {
		const target = event.target.value;
		setDescription(target);
	};

	const addAuthor = (author) => {
		const deleteList = addAuthorList.filter((item) => item.id !== author.id);
		setAddAuthorList(deleteList);
		setDeleteAuthorList([...deleteAuthorList, author]);
	};

	const deleteAuthor = (author) => {
		const addList = deleteAuthorList.filter((item) => item.id !== author.id);
		setDeleteAuthorList(addList);
		setAddAuthorList([...addAuthorList, author]);
	};

	const createCourse = () => {
		if (!createValidation()) return;
		const newCourse = {
			id: uuidv1(),
			title,
			description,
			creationDate: new Date().toLocaleDateString('tr-TR'),
			duration: duration,
			authors: deleteAuthorList.map((author) => author.id),
		};
		createCourseButtonClicked(newCourse);
	};

	const createValidation = () => {
		if (
			title === '' ||
			description === '' ||
			deleteAuthorList.length === 0 ||
			duration === 0
		) {
			alert('Please enter title');
			return false;
		}
		return true;
	};

	return (
		<form className='p-6'>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col'>
					<p>Title</p>
					<Input
						placeholderText='Enter title...'
						value={title}
						onChange={handleTitleChange}
					/>
				</div>
				<Button
					text='Create Course'
					onClick={(event) => {
						event.preventDefault();
						createCourse();
					}}
				></Button>
			</div>
			<div className='flex flex-col my-6'>
				<label>Description</label>
				<textarea
					className='border border-gray-300 p-2'
					placeholder='Enter description'
					value={description}
					onChange={handleDescriptionChange}
				></textarea>
			</div>

			<div className='flex justify-between border border-red-300 p-8'>
				<div className=''>
					<div className='flex flex-col justify-center gap-y-6'>
						<label className='font-sans font-bold text-lg self-center'>
							Add Author
						</label>
						<label className=''>Author name</label>
						<Input
							onChange={(e) => setAuthor(e.target.value)}
							placeholderText='Enter author name...'
							value={author}
						/>
						<Button
							text='Create Author'
							onClick={(event) => {
								addNewAuthor({ id: uuidv1(), name: author });
								deleteAuthor({ id: uuidv1(), name: author });
								setAuthor('');
								event.preventDefault();
							}}
						/>
					</div>
					<div className='flex flex-col justify-center gap-y-6 mt-6'>
						<label className='font-sans font-bold text-lg self-center'>
							Duration
						</label>
						<label>Duration</label>
						<Input
							onChange={(e) => setDuration(e.target.value)}
							placeholderText='Enter duration in minutes...'
							value={duration}
						/>
						<h2 className='font-sans font-bold text-lg'>
							Duration: {getCourseDuration(duration)}
						</h2>
					</div>
				</div>

				<div>
					<label className='font-sans font-bold text-lg'>Authors</label>
					{addAuthorList.map((author) => {
						return (
							<AuthorItem
								onClick={() => addAuthor(author)}
								key={author.id}
								text={'Add author'}
								name={author.name}
							/>
						);
					})}
					<label className='font-sans font-bold text-lg'>Course Authors</label>
					{deleteAuthorList.map((author) => {
						if (deleteAuthorList.length === 0) {
							return <label>Author list is empty</label>;
						}
						return (
							<AuthorItem
								onClick={() => deleteAuthor(author)}
								key={author.id}
								text={'Delete author'}
								name={author.name}
							/>
						);
					})}
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
