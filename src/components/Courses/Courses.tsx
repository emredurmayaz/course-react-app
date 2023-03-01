import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { Link } from 'react-router-dom';
import { fetchCourses, fetchAuthors } from '../../services';

export interface ICoursesListItem {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

export interface IAuthorListItem {
	id: string;
	name: string;
}

const Courses = () => {
	const [searchText, setsearchText] = useState('');
	const courses = useAppSelector((state) => state.courses.responseData) as any;
	const authors = useAppSelector((state) => state.authors) as any;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCourses());
	}, [dispatch, searchText]);

	const searchCourseClick = () => {
		const filteredCourses = mockedCoursesList.filter((course) => {
			return course.title.toLowerCase().includes(searchText.toLowerCase());
		});
		// setSearchCourse(filteredCourses);
	};

	return (
		<div className='p-6'>
			<div className='flex direction-row items-center justify-between'>
				<div>
					<SearchBar
						text='Search'
						placeholderText='Enter course name...'
						value={searchText}
						onChange={(e) => setsearchText(e.target.value)}
						onClick={searchCourseClick}
					/>
				</div>
				<Link
					to={'/courses/add'}
					className='border-2 border-red-600 py-2 px-2 text-black-600 font-bold'
				>
					Add new course
				</Link>
			</div>
			{courses?.map((course) => {
				return <CourseCard data={course} authors={authors} />;
			})}
		</div>
	);
};

export default Courses;
