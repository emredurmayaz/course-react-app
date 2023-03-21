import React, { useState, useEffect } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/store';
import { saveLoginService } from '../../services';
import { getUserService } from 'src/store/user/thunk';
import axios from 'axios';
import { saveUser } from 'src/store/user/reducer';

interface ILogin {
	email: string;
	password: string;
	name: string;
}

function Login({ setUserData }) {
	const [email, setEmail] = useState('admin@email.com');
	const [password, setPassword] = useState('admin123');
	const [hasError, setError] = useState(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.user.response);
	const auth = useAppSelector((state) => state.user.auth);

	const login = async () => {
		try {
			const loginData = await userLogin();
			// saveLocalStorage('token', loginData.result);
			// dispatch(saveUser({ loginData }));
			localStorage.setItem('token', loginData.result);
			dispatch(getUserService());
		} catch (error) {
			throw new Error(error);
		}
	};

	const userLogin = async () => {
		try {
			const userService = async (userdata: {
				email: string;
				password: string;
			}) => {
				return axios
					.post(`http://localhost:4000/login`, {
						email: userdata.email,
						password: userdata.password,
					})
					.then((res) => {
						return res.data;
					});
			};
			const res = await userService({ email, password });
			return res;
		} catch (error) {
			throw new Error(error);
		}
	};
	// const saveLocalStorage = (key, value) => {
	// 	localStorage.setItem(key, value);
	// };

	// const sendRequest = async () => {
	// 	await dispatch(saveLoginService({ email, password }));
	// 	localStorage.setItem('token', data.result);
	// };

	useEffect(() => {
		if (auth && auth.successful) {
			setUserData(auth);
			if (localStorage.getItem('token')) {
				navigate('/courses');
			}
		}
	}, [auth]);

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await login();
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
