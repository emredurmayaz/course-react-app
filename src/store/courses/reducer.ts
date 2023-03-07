import { createSlice } from '@reduxjs/toolkit';
import {
	fetchCourses,
	deleteCourseService,
	addCourseService,
} from '../../services';

export interface CoursesApiResponseType {
	successful: boolean;
	result: [
		{
			title: string;
			description: string;
			creationDate: string;
			duration: number;
			authors: string[];
			id: string;
		}
	];
}

export interface StateType {
	responseData: CoursesApiResponseType;
}

const initialState: StateType = {
	responseData: null,
};

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCourses.fulfilled, (state, action) => {
			state.responseData = action.payload;
		});
		builder.addCase(deleteCourseService.fulfilled, (state, action) => {
			state.responseData = action.payload.result;
		});
		builder.addCase(addCourseService.fulfilled, (state, action) => {
			state.responseData = action.payload;
		});
	},
});

export default coursesSlice.reducer;
