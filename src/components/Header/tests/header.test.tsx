import React from 'react';
import Header from '../Header';
import {
	getByTestId,
	queryByText,
	render,
	screen,
} from '@testing-library/react';
import Logo from '../components/Logo/Logo';

const userData = { name: 'John Doe', email: 'john@mail.com' };
const setUserData = jest.fn();

describe('Header', () => {
	it('should have user name and logo component', () => {
		render(<Header userData={userData} setUserData={setUserData} />);
		expect(screen.getByTestId('John Doe')).toBeInTheDocument();
		expect(screen.getByTestId('logo')).toBeInTheDocument();
	});
});
