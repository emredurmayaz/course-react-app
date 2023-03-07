import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockedCoursesList, mockedAuthorsList } from 'src/constants';
import getCourseDuration from 'src/helpers/getCourseDuration';

interface ICourseInfo {
	id?: string;
	title?: string;
	description?: string;
	duration?: number;
	authors?: string[];
	creationDate?: string;
}

function CourseInfo() {
	const { courseId } = useParams<{ courseId: string }>();
	const course = mockedCoursesList.find((course) => course.id === courseId);
	if (!course) {
		return <div>Course not found</div>;
	}

	const authors = mockedAuthorsList.filter((author) =>
		course.authors.includes(author.id)
	);

	return (
		<div className='font-bold py-2 px-2 mt-16 text-black-600 border-4 border-blue-300'>
			<Link to='/courses' className='py-2 px-2 text-black-600 font-bold my-4'>
				Back To Courses
			</Link>
			<div className='flex flex-col justify-center items-center mx-20'>
				<h2 className='text-black-600 font-bold text-xl mb-8'>
					{course.title}
				</h2>
				<div className='grid grid-cols-2 gap-x-4'>
					<p className='text-black-600 font-semibold'>{course.description}</p>
					<div className='flex flex-col'>
						<p>
							ID:{' '}
							<span className='text-black-600 font-semibold'>{courseId}</span>
						</p>
						<p>
							Duration:{' '}
							<span className='text-black-600 font-semibold'>
								{getCourseDuration(course.duration)}
							</span>
						</p>
						<p>
							Created:{' '}
							<span className='text-black-600 font-semibold'>
								{course.creationDate}
							</span>
						</p>
						<p>
							Authors:{' '}
							<span className='text-black-600 font-semibold'>
								{authors.map((author) => author.name).join(', ')}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
