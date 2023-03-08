import thunk from 'redux-thunk';
import {
	applyMiddleware,
	createAsyncThunk,
	createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export interface userInitialState {
	isAuth: boolean;
	name: string;
	email: string;
	token: string;
	role: string; // new value
}

export interface StateType {
	response: userInitialState;
}

const initialState: StateType = {
	response: null,
};

//Make a request to get current user localhost:4000/users/me. Now you have name, email and role values.
export const getUserService = createAsyncThunk('users/getUser', async () => {
	return axios
		.get(`http://localhost:4000/users/me`, {
			headers: { Authorization: `${localStorage.getItem('token')}` },
		})
		.then((res) => res.data);
});
// Save this data to the store. Use Thunk for it.
const userInformationSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserService.fulfilled, (state, action) => {
			state.response = action.payload;
		});
	},
});

export default userInformationSlice.reducer;
