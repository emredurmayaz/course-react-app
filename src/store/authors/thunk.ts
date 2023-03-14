import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthorsResult } from './types';

export const fetchAuthors = createAsyncThunk(
	'authors/fetchAuthors',
	async () => {
		return axios
			.get('http://localhost:4000/authors/all')
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
