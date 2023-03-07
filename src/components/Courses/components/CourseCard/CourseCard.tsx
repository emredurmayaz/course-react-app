import React from 'react';
import Button from '../../../../common/Button/Button';
import { ICoursesListItem, IAuthorListItem } from '../../Courses';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import { useNavigate } from 'react-router-dom';

interface ICourseCard {
	data: ICoursesListItem;
	authors: IAuthorListItem[];
}

interface IRightText {
	title: string;
	value: string | string[];
}

const RightText = ({ title, value }: IRightText) => (
	<div className='flex direction-row py-1'>
		<h3 className='font-sans text-lg font-bold'>{title} </h3>
		<span className='font-sans text-lg'>{value}</span>
	</div>
);

const CourseCard = ({ data, authors }: ICourseCard) => {
	const authorsList = data.authors.map((authorId) => {
		const author = authors.find((author) => author.id === authorId);
		return author?.name + ',';
	});
	const navigate = useNavigate();

	return (
		<div
			key={data.id}
			className='flex direction-row border-2 border-yellow-600 my-4 p-6'
		>
			<div className='flex-[3_3_0%]'>
				<h2 className='font-sans text-xl font-bold'>{data.title}</h2>
				<p className='font-sans text-base font-semibold max-w-[1000px]'>
					{data.description}
				</p>
			</div>
			<div className='flex-1 justify-center'>
				<RightText title='Authors: ' value={authorsList} />
				<RightText
					title='Duration: '
					value={getCourseDuration(data.duration)}
				/>
				<RightText title='Created: ' value={data.creationDate} />
				<Button
					text='Show Course'
					onClick={() => navigate(`/courses/${data.id}`)}
				/>
			</div>
		</div>
	);
};

export default CourseCard;
