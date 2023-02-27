import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';

interface IRegister {
	name: string;
	email: string;
	password: string;
}

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [hasError, setError] = useState(false);
	const navigate = useNavigate();

	const registerUser = async () => {
		try {
			const newUser = {
				name: name,
				password: password,
				email: email,
			};
			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();
			console.log(result);
		} catch (error) {
			throw new Error(error);
		}
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await registerUser();
			navigate('/login');
		} catch (error) {
			setError(true);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center gap-y-4 mt-4 px-6 py-4 border-4 border-yellow-600'
		>
			<h1 className='font-sans font-bold text-xl'>Registration</h1>
			{hasError && (
				<p className='text-red-600'>
					Invalid email or password.Your password must be a string and length
					should be 6 characters minimum
				</p>
			)}
			<div className='flex flex-col flex-start gap-y-4'>
				<label>Name</label>
				<Input
					placeholderText='Enter Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label>Email</label>
				<Input
					placeholderText='Enter Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<Input
					placeholderText='Enter Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button text='Register' type='submit' />
				<label>
					If you have an account you can{' '}
					<Link to='/login' className='font-bold text-blue-800'>
						Login
					</Link>
				</label>
			</div>
		</form>
	);
};

export default Registration;
