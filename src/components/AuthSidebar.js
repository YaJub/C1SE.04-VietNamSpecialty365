import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTERS } from '../constants/Routers';
import avata from '../image/Img2.png';
export default memo(function AuthSidebar() {
	return (
		<div className="grid col-span-1 p-6 bg-white shadow-md">
			<div className="flex flex-col justify-between h-full">
				<div className="divide-y divide-[#e9e9e9]">
					<div className="py-3">
						<NavLink
							to={ROUTERS.PROFILE}
							className={(active) => `${active && 'font-bold'} `}
						>
							Profile
						</NavLink>
						<div className="mt-[10%] ">
						<div className="flex items-center gap-4 ">
							<div>
								<img
									src={avata}
									alt="avatar"
									className="w-20 h-20 object-cover rounded-full border-2 border-grey"
								/>
							</div>
							<div className="flex flex-col justify-center ">
								Tran Quoc Hoang
							</div>
						</div>
						<div className="py-1 px-[1px]">
							tranvanhieu@gmail.com
							<div>0936197187</div>
						</div>
						</div>
					</div>
					<div className="py-3">
						<NavLink
							to={ROUTERS.ORDER_HISTORY}
							className={(active) => `${active && 'font-bold'} `}
						>
							Order History
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
});
