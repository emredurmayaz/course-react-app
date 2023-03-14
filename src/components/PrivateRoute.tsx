import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/store';

const PrivateRoute = ({ children, ...rest }) => {
	const user = useAppSelector((state) => state.user.auth);
	const userRole = user?.result.role;

	userRole.toLowerCase() === 'admin' ? children : <Navigate to='/courses' />;
};

export default PrivateRoute;
