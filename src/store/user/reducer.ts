import { createSlice } from '@reduxjs/toolkit';
import { saveLoginService, saveLogoutService } from '../../services';
import { getUserService } from './thunk';
import { UserModelType } from './types';
export interface LoginApiResponseType {
	successful: boolean;
	result: string;
	user: {
		email: string;
		name: string;
	};
}
export interface StateType {
	response: LoginApiResponseType;
	auth: UserModelType;
}

const initialState: StateType = {
	response: null,
	auth: {
		successful: false,
		result: {
			name: '',
			email: '',
			password: '',
			role: '',
			id: '',
		},
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		saveUser: (state, action) => {
			state.response = action.payload.loginData;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(saveLoginService.fulfilled, (state, action) => {
			state.response = action.payload;
		});
		builder.addCase(saveLogoutService.fulfilled, (state, action) => {
			state.response = action.payload;
		});
		builder.addCase(getUserService.fulfilled, (state, action) => {
			state.auth = action.payload;
		});
	},
});
export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
