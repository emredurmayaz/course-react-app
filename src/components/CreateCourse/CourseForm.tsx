import React, { useEffect, useState } from 'react';
import AuthorItem from './components/AuthorItem/AuthorItem';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import getCourseDuration from '../../helpers/getCourseDuration';
import { v1 as uuidv1 } from 'uuid';
import { mockedAuthorsList } from '../../constants';
import { useAppDispatch, useAppSelector } from 'src/store';
import {
	addCourseService,
	getCourseServiceById,
} from '../../store/courses/thunk';
import { addAuthorService, fetchAuthors } from '../../store/authors/thunk';
import { useParams, useNavigate } from 'react-router-dom';
import { updateCourseService } from '../../services';

const forbiddenSymbols = /[@#$%^&]/;

const CreateCourse = () => {
	const { courseId } = useParams<{ courseId: string }>();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [addAuthorList, setAddAuthorList] = useState(mockedAuthorsList);
	const [deleteAuthorList, setDeleteAuthorList] = useState([]);
	const [author, setAuthor] = useState('');
	const [duration, setDuration] = useState(0);
	const authors = useAppSelector((state) => state.authors.responseData);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	// const courses = useAppSelector((state) => state.courses.responseData);

	useEffect(() => {
		dispatch(getCourseServiceById(courseId)).then((res) => {
			const { title, description, duration } = res.payload.result;
			setTitle(title);
			setDescription(description);
			setDuration(duration || 0);
		});
	}, [courseId]);

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

	const createCourse = async (e) => {
		e.preventDefault();
		if (!checkValidation()) return;
		const newCourse = {
			title: title,
			description: description,
			creationDate: new Date().toLocaleDateString('tr-TR'),
			duration: duration,
			authors: deleteAuthorList.map((author) => author.id),
		};
		if (courseId) {
			try {
				await updateCourseService({
					courseId: courseId,
					updateCourse: newCourse,
				});
				navigate('/courses');
			} catch (error) {
				throw new Error();
			}
		} else {
			dispatch(addCourseService(newCourse));
		}
	};

	const createAuthor = () => {
		if (author === '') {
			alert('Please fill all fields...');
			return;
		}
		const newAuthor = {
			name: author,
		};
		dispatch(addAuthorService(newAuthor));
		setAuthor('');
	};

	const checkValidation = () => {
		if (title === '' || description === '' || duration === 0) {
			alert('Please fill all fields...');
			return false;
		}
		return true;
	};

	return (
		<form onSubmit={createCourse} className='p-6'>
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
					text={courseId ? 'Update Course' : 'Create Course'}
					type='submit'
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
								deleteAuthor({ id: uuidv1(), name: author });
								createAuthor();
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
							value={Number(duration)}
						/>
						<h2 className='font-sans font-bold text-lg'>
							Duration: {getCourseDuration(duration)}
						</h2>
					</div>
				</div>

				<div>
					<label className='font-sans font-bold text-lg'>Authors</label>
					{authors?.result.map((author) => {
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
