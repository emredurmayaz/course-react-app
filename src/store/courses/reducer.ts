import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses, fetchAuthors } from '../../services';
import { Course, Author } from './types';

interface ApiResponseType {
	data: Course[];
	authorData: Author[];
}

export interface StateType {
	responseData: ApiResponseType;
}

const initialState: StateType = {
	responseData: null,
};

export const coursesSlice = createSlice({
	name: 'courses',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCourses.fulfilled, (state, action) => {
			state.responseData = action.payload.result;
		});
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			state.responseData = action.payload.result;
		});
	},
});

export default coursesSlice.reducer;
