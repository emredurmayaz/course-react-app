import React from 'react';
import Button from '../../../../common/Button/Button';

interface IAuthorItem {
	text: string;
	name: string;
	className?: string;
	onClick: () => void;
}

const AuthorItem = ({ text, name, onClick, className }: IAuthorItem) => {
	return (
		<div className={className}>
			<span className='mr-6'>{name}</span>
			<Button type='button' text={text} onClick={onClick}></Button>
		</div>
	);
};

export default AuthorItem;
