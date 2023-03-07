import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Button from 'src/common/Button/Button';

function Header(): JSX.Element {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const navigate = useNavigate();

	function handleLogout() {
		setIsUserLoggedIn(!isUserLoggedIn);
		navigate('/login');
	}

	return (
		<div className='flex justify-between items-center px-6 py-4 border-4 border-indigo-600'>
			<Logo />
			<div className='flex flex-row gap-x-12 items-center'>
				<h3 className='font-sans text-lg font-bold'>Emre</h3>
				{!isUserLoggedIn && <Button text='Logout' onClick={handleLogout} />}
			</div>
		</div>
	);
}

export default Header;
