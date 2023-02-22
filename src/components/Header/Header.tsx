import React from 'react';
import Logo from './components/Logo/Logo';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
	return (
		<div className='flex justify-between items-center px-6 py-4 border-4 border-indigo-600'>
			<Logo />
			<div className='flex flex-row gap-x-12 items-center'>
				<h3 className='font-sans text-lg font-bold'>Emre</h3>
				<Link
					to='/login'
					className='font-bold py-2 px-2 text-black-600 border-4 border-red-600'
				>
					Logout
				</Link>
			</div>
		</div>
	);
}

export default Header;
