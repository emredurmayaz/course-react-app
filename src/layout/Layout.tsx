import React from 'react';
import { Outlet } from 'react-router';
import Header from 'src/components/Header/Header';

const Layout = ({ userData, setUserData }) => {
	return (
		<div>
			<Header setUserData={setUserData} userData={userData} />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
