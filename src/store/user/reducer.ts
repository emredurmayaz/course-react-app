import { createSlice } from '@reduxjs/toolkit';
import { saveLoginService, saveLogoutService } from '../../services';

export interface LoginApiResponseType {
	successful: boolean;
	result: string;
	user: {
		isAuth: boolean;
		email: string;
		name: string;
		role: string;
		token: string;
	};
}
export interface StateType {
	response: LoginApiResponseType;
}

const initialState: StateType = {
	response: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(saveLoginService.fulfilled, (state, action) => {
			state.response = action.payload;
		});
		builder.addCase(saveLogoutService.fulfilled, (state, action) => {
			state.response = action.payload;
		});
	},
});

export default userSlice.reducer;
