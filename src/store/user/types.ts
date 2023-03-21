export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';

export interface UserModelType {
	successful: boolean;
	result: {
		name: string;
		email: string;
		password: string;
		role: string;
		id: string;
	};
}
