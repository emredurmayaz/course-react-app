import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCourses } from '../../services';
import axios from 'axios';

import {
	GET_COURSES,
	SAVE_COURSES,
	DELETE_COURSE,
	UPDATE_COURSE,
	ADD_COURSE,
	Course,
} from './types';

interface ApiResponseType {
	data: Course[];
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
	},
});

// export const {
// 	getCoursesSuccess,
// 	saveCourseSuccess,
// 	deleteCourseSuccess,
// 	updateCourseSuccess,
// } = coursesSlice.actions;

export default coursesSlice.reducer;
