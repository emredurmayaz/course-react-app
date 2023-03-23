import React from 'react';
import { screen, render } from '@testing-library/react';
import reducer from '../courses/reducer';

//Write a test which reducer should return the initial state
const initialState = {
	responseData: null,
	courses: [],
};

describe('courses reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {
				type: undefined,
			})
		).toEqual(initialState);
	});
});
