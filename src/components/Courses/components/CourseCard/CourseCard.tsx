import React, { useEffect } from 'react';
import Button from '../../../../common/Button/Button';
import { IAuthorListItem } from '../../Courses';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import { deleteCourseService } from '../../../../store/courses/thunk';
import { deleteItem } from '../../../../store/courses/reducer';
import { fetchAuthors } from '../../../../store/authors/thunk';

interface IRightText {
	title: string;
	value: string | IAuthorListItem[];
}

const RightText = ({ title, value }: IRightText) => (
	<div className='flex direction-row py-1'>
		<h3 className='font-sans text-lg font-bold'>{title} </h3>
		{Array.isArray(value) ? (
			<ul className='font-sans text-lg font-semibold'>
				{value.map((author) => (
					<li key={author.id}>{author.name}</li>
				))}
			</ul>
		) : (
			<p className='font-sans text-lg font-semibold'>{value}</p>
		)}
	</div>
);

const CourseCard = ({ data }) => {
	const navigate = useNavigate();
	const authors = useAppSelector((state) => state.authors.responseData);
	const users = useAppSelector((state) => state.user.auth);
	const dispatch = useAppDispatch();

	// const authorsList = data.authors.map((authorId) => {
	// 	const author = authors.find((author) => author.id === authorId);
	// 	return author?.name + ',';
	// });

	const deleteCourse = () => {
		dispatch(deleteCourseService(data.id));
		dispatch(deleteItem(data.id));
	};

	const updateCourse = () => {
		navigate(`/courses/update/${data.id}`);
	};

	useEffect(() => {
		dispatch(fetchAuthors());
	}, [dispatch]);

	return (
		<div className='flex direction-row border-2 border-yellow-600 my-4 p-6'>
			<div className='flex-[3_3_0%]'>
				<h2 className='font-sans text-xl font-bold'>{data.title}</h2>
				<p className='font-sans text-base font-semibold max-w-[1000px]'>
					{data.description}
				</p>
			</div>
			<div className='flex-1 justify-center'>
				<RightText title='Authors: ' value={authors?.result} />
				<RightText
					title='Duration: '
					value={getCourseDuration(data.duration)}
				/>
				<RightText title='Created: ' value={data.creationDate} />
				<div className='flex flex-row gap-x-2'>
					<Button
						text='Show Course'
						onClick={() => navigate(`/courses/${data.id}`)}
					/>
					{users.result.role === 'admin' && (
						<>
							<Button
								onClick={deleteCourse}
								image={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24px'
										height='24px'
									>
										<path d='M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z' />
									</svg>
								}
							/>
							<Button
								onClick={updateCourse}
								image={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										width='24px'
										height='24px'
									>
										<path d='M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z' />
									</svg>
								}
							/>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
