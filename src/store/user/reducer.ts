import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
	//User reducer has logic:
	//After success login isAuth property has value true, save token, email and name.
	//After logout isAuth property has value false, token, email and name have value as empty string.
	reducers: {
		loginSuccess: (state, action) => {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = action.payload.token;
		},
	},
	extraReducers: {
		'user/logout': (state) => {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
		},
	},
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
