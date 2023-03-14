import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserService = createAsyncThunk('users/getUser', async () => {
	return axios
		.get(`http://localhost:4000/users/me`, {
			headers: { Authorization: `${localStorage.getItem('token')}` },
		})
		.then((res) => res.data);
});
