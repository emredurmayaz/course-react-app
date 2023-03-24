import React from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import { render, screen } from '@testing-library/react';

// Courses should display amount of CourseCard equal length of courses array.Write test only jest and react-testing-library.
// Courses › should display amount of CourseCard equal length of courses array
describe('Courses', () => {
	it('should display amount of CourseCard equal length of courses array', () => {
		const courses = [
			{
				id: '8eee6215-a175-43a5-8586-ed6aae81abb1',
				title: 'Course 1',
				description: 'Course 1 description',
				creationDate: '2021-01-01',
				duration: 120,
				authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d34'],
			},
			{
				id: '8eee6215-a175-43a5-8586-ed6aae81abb2',
				title: 'Course 2',
				description: 'Course 2 description',
				creationDate: '2021-01-01',
				duration: 120,
				authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d35'],
			},
			{
				id: '8eee6215-a175-43a5-8586-ed6aae81abb3',
				title: 'Course 3',
				description: 'Course 3 description',
				creationDate: '2021-01-01',
				duration: 120,
				authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
			},
		];

		render(<CourseCard courses={courses} />);

		expect(screen.getAllByTestId('course-card')).toHaveLength(courses.length);
	});
});
