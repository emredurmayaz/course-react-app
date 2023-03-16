import { createSlice } from '@reduxjs/toolkit';
import {
	fetchCourses,
	deleteCourseService,
	addCourseService,
	updateCourseService,
} from './thunk';

export interface CoursesApiResponseType {
	successful: boolean;
	result: Array<{
		title: string;
		description: string;
		creationDate: string;
		duration: number;
		authors: string[];
		id: string;
	}>;
}

export interface StateType {
	responseData: CoursesApiResponseType;
	courses: Array<{
		title: string;
		description: string;
		creationDate: string;
		duration: number;
		authors: string[];
		id: string;
	}>;
}

const initialState: StateType = {
	responseData: null,
	courses: [],
};

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		deleteItem: (state, action) => {
			state.courses.splice(
				state.courses.findIndex((item) => item.id === action.payload),
				1
			);
		},
		updateCourseItem: (state, action) => {
			const index = state.courses.findIndex(
				(item) => item.id === action.payload
			);
			state.courses[index] = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCourses.fulfilled, (state, action) => {
			state.responseData = action.payload;
			state.courses = action.payload.result;
		});

		builder.addCase(addCourseService.fulfilled, (state, action) => {
			state.responseData = action.payload;
		});
		builder.addCase(updateCourseService.fulfilled, (state, action) => {
			state.responseData = action.payload;
		});
	},
});

export const { deleteItem } = coursesSlice.actions;
export const { updateCourseItem } = coursesSlice.actions;

export default coursesSlice.reducer;
