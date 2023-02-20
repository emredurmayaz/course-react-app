import React from 'react';

interface IInput {
	placeholderText: string;
	value: string | number;
	onChange?: (value?) => typeof value;
}

const Input = ({ placeholderText, onChange, value }: IInput) => {
	return (
		<input value={value} placeholder={placeholderText} onChange={onChange} />
	);
};

export default Input;
