import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';

interface ILogin {
	email: string;
	password: string;
}

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [hasError, setError] = useState(false);
	const navigate = useNavigate();

	const sendRequest = async () => {
		try {
			const response = await fetch('http://localhost:4000/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			const result = await response.json();
			localStorage.setItem('token', result.result);
		} catch (error) {
			throw new Error(error);
		}
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await sendRequest();
			navigate('/courses');
		} catch (error) {
			setError(true);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center gap-y-4 mt-4 px-6 py-4 border-4 border-green-600'
		>
			<h1 className='font-sans font-bold text-xl'>Login</h1>
			{hasError && <p className='text-red-600'>Invalid email or password</p>}
			<div className='flex flex-col flex-start gap-y-4'>
				<label className='flex'>Email</label>
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
				<Button text='Login' type='submit' />
				<label>
					If you not have an account you can{' '}
					<Link to='/registration' className='font-bold text-blue-800'>
						Register
					</Link>
				</label>
			</div>
		</form>
	);
}

export default Login;
