import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { ROUTERS } from '../constants/Routers';
import { LuShoppingBag } from 'react-icons/lu';
import Logo from '../../src/image/Logo.png';
import Cart from './Cart';
import Search from 'antd/es/transfer/search';
import { ShoppingBagIcon, User } from 'lucide-react';
import { Avatar } from 'antd';
import { IoToggleSharp } from 'react-icons/io5';

export default function Header() {
	const carts = useSelector((state) => state.cart.carts);

	const [isShowCart, setShowCart] = useState(false);
	const toggleShowCart = () => setShowCart(!isShowCart);
	// const IoToggleSharp = () => Logo
	// function Layout({ children }) {
	// 	const isLoginPage = window.location.pathname === '';
	  
	// 	return (
	// 	  <div>
	// 		{!isLoginPage && <Header />}
	// 		{children}
	// 	  </div>
	// 	);
	//   }
	return (
		<>
			<div className=" flex flex-row h-[100px] border border-[rgba(204, 199, 199, 0.35)] sticky top-0 z-40 bg-lime-950">
				<div className="container flex flex-row items-center justify-start  h-full mx-7">
					<div className="">
						<img
							src={Logo}
							alt=""
							className="w-[100px] h-[100px] mr-2"
						/>
					</div>
					<div className=" flex flex-row gap-20 mx-10 ">
						<div>
							<NavLink
								to={ROUTERS.HOME}
								className={({ isActive }) =>
									`${
										isActive
											? 'font-bold text-[#e3640a]'
											: 'font-bold text-white'
									}`
								}
							>
								Trang chủ
							</NavLink>
						</div>
						<div>
							<NavLink
								to={ROUTERS.ABOUT}
								className={({ isActive }) =>
									`${
										isActive
											? 'font-bold text-[#e3640a]'
											: 'font-bold text-white'
									}`
								}
							>
								Khám Phá
							</NavLink>
						</div>
						<div>
							<NavLink
								to={ROUTERS.CATEGORY}
								className={({ isActive }) =>
									`${
										isActive
											? 'font-bold text-[#e3640a]'
											: 'font-bold text-white'
									}`
								}
							>
								Chợ Đặc Sản
							</NavLink>
						</div>
						<div>
							<NavLink
								to={ROUTERS.BLOG}
								className={({ isActive }) =>
									`${
										isActive
											? 'font-bold text-[#e3640a]'
											: 'font-bold text-white'
									}`
								}
							>
								Câu Chuyện
							</NavLink>
						</div>
						<div>
							<NavLink
								to={ROUTERS.CONTACT}
								className={({ isActive }) =>
									`${
										isActive
											? 'font-bold text-[#e3640a]'
											: 'font-bold text-white'
									}`
								}
							>
								Liên Hệ
							</NavLink>
						</div>
					</div>
					<div className="flex flex-row gap-8 ml-10">
						<div>
							<button
								className="relative"
								onClick={IoToggleSharp}
							>
								<Search size={20} />
								<p className="flex justify-end absolute top-[-10px] right-[-10px] text-xs font-bold ">
									{carts.length}
								</p>
							</button>
						</div>
						{/* <div className="flex flex-row justify-end">
							<button
								className="relative"
								onClick={toggleShowCart}
							>
								<ShoppingBagIcon size={20} />
								<p className="flex justify-end absolute top-[-10px] right-[-10px] text-xs font-bold ">
									{carts.length}
								</p>
							</button>
						</div> */}
						<div>
							<button className="relative">
								<NavLink to={ROUTERS.LOGIN}>
									<Avatar size={35} /> 
								</NavLink>
								<p className="flex justify-end absolute top-[-10px] right-[-10px] text-xs font-bold">
									{carts.length}
								</p>
							</button>
						</div>
					</div>
				</div>
			</div>
			{isShowCart && <Cart toggleShowCart={toggleShowCart} />}
		</>
	);
}
