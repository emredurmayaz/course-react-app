import React, { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import { saveLoginService } from '../../services';

interface ILogin {
	email: string;
	password: string;
	name: string;
}

function Login() {
	const [email, setEmail] = useState('emredurmayaz@hotmail.com');
	const [password, setPassword] = useState('Bursa1963.');
	const [hasError, setError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.user.response);

	const sendRequest = () => {
		dispatch(saveLoginService({ email, password }));
	};

	useEffect(() => {
		if (data && data.successful) {
			navigate('/courses');
		}
		console.log(data);
	}, [data]);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await sendRequest();
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
