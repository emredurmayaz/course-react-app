import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CourseResult, Course, CourseUpdateType } from './types';

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async () => {
		return axios
			.get(`http://localhost:4000/courses/all`)
			.then((res) => res.data);
	}
);

export const deleteCourseService = createAsyncThunk(
	'courses/delete',
	async (id: string) => {
		return axios
			.delete(`http://localhost:4000/courses/${id}`, {
				headers: { Authorization: `${localStorage.getItem('token')}` },
			})
			.then((res) => res.data);
	}
);

export const getCourseServiceById = createAsyncThunk(
	'courses/getById',
	async (id: string) => {
		return axios.get(`http://localhost:4000/courses/${id}`).then((res) => {
			return res.data;
		});
	}
);

export const updateCourseService = createAsyncThunk(
	'courses/update',
	async ({ courseId, updateCourse }: any) => {
		return axios
			.put(`http://localhost:4000/courses/${courseId}`, updateCourse, {
				headers: { Authorization: `${localStorage.getItem('token')}` },
			})
			.then((res) => res.data);
	}
);

export const addCourseService = createAsyncThunk(
	'courses/add',
	async (course: CourseResult) => {
		return axios
			.post(`http://localhost:4000/courses/add`, course, {
				headers: { Authorization: `${localStorage.getItem('token')}` },
			})
			.then((res) => res.data);
	}
);
