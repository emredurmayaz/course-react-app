// import { getCoursesSuccess } from './store/courses/reducer';
// import { getAuthorsSuccess } from './store/authors/reducer';
import {
	addCourseAction,
	getCoursesAction,
	updateCourseAction,
	deleteCourseAction,
	saveCoursesAction,
} from './store/courses/actions';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Get courses data from the back-end. See SWAGGER /courses/all API.
//localhost:4000/api/courses/all
export const addCourse = (course) => async (dispatch) => {
	try {
		const response = await axios.post('localhost:4000/api/courses/add', course);
		dispatch(addCourseAction(response.data));
	} catch (error) {
		console.log(error);
	}
};

// export const getCourses = () => async (dispatch) => {};

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async () => {
		return axios
			.get(` http://localhost:4000/courses/all`)
			.then((res) => res.data);
	}
);

export const updateCourse = (course) => async (dispatch) => {
	try {
		const response = await axios.put(
			`localhost:4000/api/courses/${course.id}`,
			course
		);
		dispatch(updateCourseAction(response.data));
	} catch (error) {
		console.log(error);
	}
};

export const deleteCourse = (course) => async (dispatch) => {
	try {
		const response = await axios.delete(
			`localhost:4000/api/courses/${course.id}`
		);
		dispatch(deleteCourseAction(response.data));
	} catch (error) {
		console.log(error);
	}
};
