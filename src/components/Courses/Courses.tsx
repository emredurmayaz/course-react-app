import React, { useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from 'src/common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

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

interface ICourses {
	mockedCoursesList: ICoursesListItem[];
	mockedAuthorsList: IAuthorListItem[];
	newCourseClick: () => void;
}

const Courses = ({
	mockedCoursesList,
	mockedAuthorsList,
	newCourseClick,
}: ICourses) => {
	const [searchCourse, setSearchCourse] = useState(mockedCoursesList);
	const [searchText, setsearchText] = useState('');

	const searchCourseClick = () => {
		const filteredCourses = mockedCoursesList.filter((course) => {
			return course.title.toLowerCase().includes(searchText.toLowerCase());
		});
		setSearchCourse(filteredCourses);
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
				<Button text='Add new course' onClick={newCourseClick} />
			</div>
			{searchCourse.map((course) => {
				return <CourseCard data={course} authors={mockedAuthorsList} />;
			})}
		</div>
	);
};

export default Courses;