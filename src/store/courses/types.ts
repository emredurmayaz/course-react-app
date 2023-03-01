//types.js

export const SAVE_COURSES = 'SAVE_COURSES';
export const DELETE_COURSE = 'DELETE_COURSE';
export const ADD_COURSE = 'ADD_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const GET_COURSES = 'GET_COURSES';

export type Course = {
	title: 'string';
	description: 'string';
	duration: 0;
	authors: [''];
};

export type Author = {
	name: 'string';
	id: 'string';
};
