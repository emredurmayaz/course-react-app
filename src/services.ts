import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
