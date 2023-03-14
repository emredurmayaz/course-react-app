import React, { useState, useEffect } from 'react';
import Logo from './components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import Button from 'src/common/Button/Button';
import { saveLogoutService } from 'src/services';
import { useAppDispatch, useAppSelector } from 'src/store';

function Header({ userData, setUserData }): JSX.Element {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.user.response);

	function handleLogout() {
		dispatch(saveLogoutService());
	}

	useEffect(() => {
		setIsUserLoggedIn(false);
		localStorage.removeItem('token');
		setUserData({});
		navigate('/login');
	}, [data]);

	return (
		<div className='flex justify-between items-center px-6 py-4 border-4 border-indigo-600'>
			<Logo />
			<div className='flex flex-row gap-x-12 items-center'>
				<h3 className='font-sans text-lg font-bold'>{userData.name}</h3>
				{!isUserLoggedIn && <Button text='Logout' onClick={handleLogout} />}
			</div>
		</div>
	);
}

export default Header;
