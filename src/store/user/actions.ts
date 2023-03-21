import { SAVE_USER, DELETE_USER } from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const deleteUserAction = (payload) => ({ type: DELETE_USER, payload });
