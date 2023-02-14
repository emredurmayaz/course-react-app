import React from 'react';
import Logo from './components/Logo/Logo';
import Button from 'src/common/Button/Button';

function Header(): JSX.Element {
	return (
		<div className='flex justify-between items-center px-6 py-4 border-4 border-indigo-600'>
			<Logo />
			<div className='flex flex-row gap-x-12 items-center'>
				<h3 className='font-sans text-lg font-bold'>Emre</h3>
				<Button text={'Logout'} />
			</div>
		</div>
	);
}

export default Header;
