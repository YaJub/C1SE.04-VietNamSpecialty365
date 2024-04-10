import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../image/Login.png';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from '@material-tailwind/react';
import { ROUTERS } from '../constants/Routers';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [hiddenPass, setHiddenPass] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleHiddenPassword = () => {
		hiddenPass ? setHiddenPass(false) : setHiddenPass(true);
	};
	const handleCheckInput = () => {
		const emailRegex = /\S+@\S+\.\S+/;
		const isEmailValid = emailRegex.test(email);

		if (isEmailValid && email.endsWith('@gmail.com')) {
			// email is valid and ends with "@gmail.com"
			setLoading(true);
		} else {
			// email is not valid or does not end with "@gmail.com"
			setLoading(false);
		}
	};
	const handleLogin = (e) => {
		e.preventDefault();
		handleCheckInput();
	};
	return (
		<div className="fixed inset-0 z-[50] flex items-center bg-white">
			<div className="h-full w-full object-cover">
				<img
					src={loginImage}
					alt="Images"
					className="h-full left-0 w-50%"
				/>
			</div>
			<div className="absolute rounded-l-[50px]  h-full right-0 w-[50%] bg-gradient-to-b from-[#ff811adb] to-[#FFFFFF00] px-40">
				<div className="">
					<div className=" flex justify-between py-20">
						<div className="">
							<h2 className="font-semibold">
								Chào Mừng Bạn Đến <br />
								<Link
									to="/"
									className="text-2xl text-red-900 font-bold decoration-black"
								>
									Hương Vị Việt Nam 365
								</Link>
							</h2>
						</div>
						<div className="">
							<h2 className=" text-[#8D8D8D] ">
								Không có tài khoản? <br />
								<Link
									to="/signup"
									className="text-base text-yellow-900 font-semibold "
								>
									Đăng Kí
								</Link>
							</h2>
						</div>
					</div>
					<div className="">
						<h1 className="text-yellow-900 text-center text-5xl font-bold pb-11 drop-shadow-sm">
							Login
						</h1>
						<form action="" onSubmit={(e) => handleLogin(e)}>
							<div className="flex flex-col mb-6 ">
								<label
									className="font-medium text-left text-lg mb-2 "
									htmlFor=""
								>
									Nhập Địa Chỉ Email
								</label>
								<input
									id="emailInput"
									className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
									required
									type="email"
									autoComplete="email"
									placeholder="youraccount@gmail.com"
									onChange={(event) =>
										setEmail(event.target.value)
									}
									value={email}
								/>
							</div>
							<div className="flex flex-col ">
								<label
									className="font-medium text-left text-lg mb-2 "
									htmlFor=""
								>
									Nhập Mật Khẩu
								</label>
								<div className="relative">
									<input
										id="passwordInput"
										className="w-full px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
										type={hiddenPass ? 'password' : 'text'}
										required
										placeholder="Mật khẩu của bạn"
										onChange={(event) =>
											setPassword(event.target.value)
										}
										value={password}
									/>
									{hiddenPass ? (
										<FontAwesomeIcon
											onClick={handleHiddenPassword}
											className="absolute top-5 right-6"
											icon={faEyeSlash}
										/>
									) : (
										<FontAwesomeIcon
											onClick={handleHiddenPassword}
											className="absolute top-5 right-6"
											icon={faEye}
										/>
									)}
								</div>
							</div>
							<div className=" text-right mt-2 mb-9 ">
								<Link
									to={ROUTERS.FORGOT_PASSWORD}
									className="text-lg font-medium text-yellow-900"
								>
									Quên mật khẩu?
								</Link>
							</div>
							<button className="py-3 bg-yellow-900 w-full mb-3 rounded-lg text-xl font-bold text-white  opacity-100 active:opacity-80">
								{loading ? (
									<div className="flex items-center justify-center">
										<Spinner className="h-6 w-6 mr-4" />{' '}
										<span>Đang tải...</span>
									</div>
								) : (
									<span>Đăng Nhập</span>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
      
		</div>
	);
}

export default Login;
