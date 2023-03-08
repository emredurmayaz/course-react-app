import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseResult } from './store/courses/types';
import { AuthorsResult } from './store/authors/types';
import axios from 'axios';

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async () => {
		return axios
			.get(`http://localhost:4000/courses/all`)
			.then((res) => res.data);
	}
);

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async () => {
		return axios
			.get('http://localhost:4000/authors/all')
			.then((res) => res.data);
	}
);

export const saveLoginService = createAsyncThunk(
	'login/saveLogin',
	async (userdata: { email: string; password: string }) => {
		return axios
			.post(`http://localhost:4000/login`, {
				email: userdata.email,
				password: userdata.password,
			})
			.then((res) => {
				return res.data;
			});
	}
);

export const saveLogoutService = createAsyncThunk(
	'logout/saveLogout',
	async () => {
		return axios
			.delete(`http://localhost:4000/logout`, {
				headers: { Authorization: `${localStorage.getItem('token')}` },
			})
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

export const updateCourseService = createAsyncThunk(
	'courses/update',
	async (id: string) => {
		return axios
			.put(`http://localhost:4000/courses/${id}`, {
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

export const addAuthorService = createAsyncThunk(
	'authors/add',
	async (author: AuthorsResult) => {
		return axios
			.post(
				`http://localhost:4000/authors/add`,
				{ author },
				{ headers: { Authorization: `${localStorage.getItem('token')}` } }
			)
			.then((res) => res.data);
	}
);

export const getUserService = createAsyncThunk('users/getUser', async () => {
	return axios
		.get(`http://localhost:4000/users/me`, {
			headers: { Authorization: `${localStorage.getItem('token')}` },
		})
		.then((res) => res.data);
});
