import React from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import { render, screen } from '@testing-library/react';

// Courses should display amount of CourseCard equal length of courses array.Write test only jest and react-testing-library.
describe('Courses', () => {
	it('should display amount of CourseCard equal length of courses array', () => {
		const courses = [
			{
				title: 'Eng555',
				description: 'Eng555',
				creationDate: '13/03/2023',
				duration: 500,
				authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
				id: '8eee6215-a175-43a5-8586-ed6aae81abb3',
			},
		];
		render(<CourseCard courses={courses} />);
		expect(screen.getAllByTestId('course-card')).toHaveLength(1);
	});
});
