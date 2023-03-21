import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthors, addAuthorService } from './thunk';

interface AuthorsApiResponseType {
	successful: boolean;
	result: [
		{
			name: string;
			id: string;
		}
	];
}
export interface StateType {
	responseData: AuthorsApiResponseType;
}

const initialState: StateType = {
	responseData: null,
};

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			state.responseData = action.payload;
		});
		builder.addCase(addAuthorService.fulfilled, (state, action) => {
			state.responseData = action.payload.result;
		});
	},
});

export default authorsSlice.reducer;
