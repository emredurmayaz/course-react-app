import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from '../src/constants';

function App() {
	const [showNewCourse, setshowNewCourse] = useState(true);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const createCourseButtonClicked = (newCourse) => {
		setCourses([...courses, newCourse]);
		setshowNewCourse((prev) => !prev);
	};

	const addNewAuthor = (newAuthor) => {
		setAuthors([...authors, newAuthor]);
	};

	return (
		<>
			<Header />
			{showNewCourse ? (
				<Courses
					newCourseClick={() => setshowNewCourse((prev) => !prev)}
					mockedCoursesList={courses}
					mockedAuthorsList={authors}
				/>
			) : (
				<CreateCourse
					addNewAuthor={addNewAuthor}
					createCourseButtonClicked={createCourseButtonClicked}
					authors={authors}
				/>
			)}
		</>
	);
}

export default App;
