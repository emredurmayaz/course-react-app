import React from 'react';
import { Outlet } from 'react-router';
import Header from 'src/components/Header/Header';

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
