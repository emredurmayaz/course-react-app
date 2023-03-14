//types.js

export const SAVE_COURSES = 'SAVE_COURSES';
export const DELETE_COURSE = 'DELETE_COURSE';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const GET_COURSES = 'GET_COURSES';

export type Course = {
	successful?: boolean;
	result: CourseResult[];
};

export type CourseResult = {
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
	id: string;
};
