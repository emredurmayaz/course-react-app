import React from 'react';

interface IButton {
	text: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
	onClick?: (event) => void;
}

const Button = ({ text, onClick, type }: IButton) => (
	<button
		className='border-2 border-red-600 py-2 px-2 text-black-600 font-bold'
		onClick={onClick}
		type={type}
	>
		{text}
	</button>
);

export default Button;
