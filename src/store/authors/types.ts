export type Authors = {
	succesful?: boolean;
	result: AuthorsResult[];
};

export type AuthorsResult = {
	name: string;
};

export const ADD_AUTHOR = 'ADD_AUTHOR';
