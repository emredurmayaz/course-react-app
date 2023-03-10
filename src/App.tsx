import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CourseInfoPage from './pages/CourseInfoPage/CourseInfoPage';
import Layout from './layout/Layout';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import CreateCoursePage from './pages/CreateCoursePage/CreateCoursePage';

function App() {
	const [userData, setUserData] = useState({});

	return (
		<Routes>
			<Route
				path='/'
				element={<Layout setUserData={setUserData} userData={userData} />}
			>
				<Route index element={<Navigate to='/login' />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route
					path='/login'
					element={<LoginPage setUserData={setUserData} />}
				/>

				<Route path='/courses'>
					<Route index element={<CoursesPage />} />
					<Route path=':courseId' element={<CourseInfoPage />} />
				</Route>
				<Route path='/courses/add' element={<CreateCoursePage />} />
			</Route>
		</Routes>
	);
}

export default App;
