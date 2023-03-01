import { createSlice } from '@reduxjs/toolkit';

export const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],

	// Authors reducer has logic:
	// Save a new author.
	// Get authors. Save authors to store after getting them from API. See Swagger /authors/all .
	reducers: {
		getAuthorsSuccess: (state, action) => {
			return action.payload;
		},
		saveAuthorSuccess: (state, action) => {
			return [...state, action.payload];
		},
	},
});

export const { getAuthorsSuccess, saveAuthorSuccess } = authorsSlice.actions;

export default authorsSlice.reducer;
