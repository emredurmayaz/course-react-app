import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../../store/courses/thunk';

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
	const courses = useAppSelector((state) => state.courses.courses);
	const dispatch = useAppDispatch();
	console.log('courses :', courses);

	useEffect(() => {
		dispatch(fetchCourses());
	}, [dispatch]);

	// const searchCourseClick = () => {
	// 	const filteredCourses = courses.filter((course) => {
	// 		return course.title.toLowerCase().includes(searchText.toLowerCase());
	// 	});
	// 	// setSearchCourse(filteredCourses);
	// }; IN PROGRESS

	return (
		<div className='p-6'>
			<div className='flex direction-row items-center justify-between'>
				<div>
					<SearchBar
						text='Search'
						placeholderText='Enter course name...'
						value={searchText}
						onChange={(e) => setsearchText(e.target.value)}
						// onClick={searchCourseClick}
					/>
				</div>
				<Link
					to={'/courses/add'}
					className='border-2 border-red-600 py-2 px-2 text-black-600 font-bold'
				>
					Add new course
				</Link>
			</div>
			{courses.map((course) => {
				return <CourseCard key={course.id} data={course} />;
			})}
		</div>
	);
};

export default Courses;
