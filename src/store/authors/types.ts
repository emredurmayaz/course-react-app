export type Authors = {
	succesful?: boolean;
	result: AuthorsResult[];
};

export type AuthorsResult = {
	name: string;
	id: string;
};

export const ADD_AUTHOR = 'ADD_AUTHOR';
