import React from 'react';

interface IButton {
	text?: string;
	type?: 'submit' | 'reset' | 'button' | undefined;
	onClick?: (event) => void;
	image?: React.ReactNode;
}

const Button = ({ text, onClick, type, image }: IButton) => (
	<button
		className='border-2 border-red-600 py-2 px-2 text-black-600 font-bold'
		onClick={onClick}
		type={type}
	>
		{text ? text : image}
	</button>
);

export default Button;
