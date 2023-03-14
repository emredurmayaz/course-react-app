import { combineReducers } from '@reduxjs/toolkit';
import courses from './courses/reducer';
import authors from './authors/reducer';
import user from './user/reducer';

export const rootReducer = combineReducers({
	courses,
	authors,
	user,
});

//export const store = configureStore({ reducer: rootReducer });
