import React from 'react';
import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

interface ISearchBar {
	placeholderText: string;
	value: string | number;
	text: string;
	onChange?: (value?) => typeof value;
	onClick?: (event) => void;
}

const SearchBar = ({
	placeholderText,
	value,
	text,
	onClick,
	onChange,
}: ISearchBar) => {
	return (
		<div className='flex flex-row gap-x-6'>
			<Input
				placeholderText={placeholderText}
				value={value}
				onChange={onChange}
			/>
			<Button text={text} onClick={onClick} />
		</div>
	);
};

export default SearchBar;
