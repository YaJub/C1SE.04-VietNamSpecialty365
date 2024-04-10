import React from 'react';
import Banner from '../../src/image/banner1.png';
import Banner2 from '../../src/image/banner2.png';
import image1 from '../../src/image/Img1.png';
import image2 from '../../src/image/Img2.png';
import image3 from '../../src/image/Img3.png';
import { NavLink } from 'react-router-dom';
import { ROUTERS } from '../constants/Routers';

const About = () => {
	return (
		<div className="">
			<div class="relative w-full ">
				<div class="w-full  h-[400px] object-cover bg-yellow-700">
					<img
						className="absolute right-[50px] top-[160px] "
						src={Banner}
						alt="about"
					/>
				</div>
				<span class="absolute top-36 left-[300px] p-2 text-white text-5xl font-bold leading-6 drop-shadow-md">
					Giới Thiệu
				</span>
			</div>
			<div>
				<div className="w-full flex justify-between mt-24 mx-auto max-w-screen-xl">
					<div className="flex-1 pl-20 ">
						<img
							className="h-[400px] rounded-xl"
							src={image1}
							alt=""
						/>
					</div>
					<div className="flex-[-33rem] mt-28">
						<h2 className="text-black  text-2xl font-extrabold mb-8">
							Hương Vị Việt Nam
						</h2>
						<span className="pr-28 leading-6">
							"Hương Vị Việt Nam" là không gian trực tuyến độc đáo
							và
							<br />
							đầy màu sắc, nơi mà bạn sẽ bắt gặp hương thơm, hương
							vị,
							<br /> và câu chuyện của ẩm thực Việt Nam. Chúng tôi
							là một cổng <br />
							thông tin toàn diện, mở cửa cho những trải nghiệm ẩm
							thực <br />
							tuyệt vời và sâu sắc.
						</span>
					</div>
				</div>
				<div className="w-full flex justify-between m-28  mx-auto max-w-screen-xl">
					<div className="flex-1 pl-20 mt-32">
						=
						<span className="pr-20 leading-6">
							Mục tiêu là đáp ứng nhu cầu quan trọng trong việc
							quản lý, <br /> theo dõi tình trạng sức khỏe của
							sinh viên Đại học Duy Tân <br />
							(DTU), cung cấp những thông tin và gợi ý quan tSrọng
							về <br />
							cách cải thiện vấn đề sức khỏe, chế độ ăn uống và
							tập luyện <br /> của bạn.
						</span>
					</div>
					<div className="flex-1 ">
						<img
							className="h-[360px] rounded-xl"
							src={image2}
							alt=""
						/>
					</div>
				</div>
				<div className="w-full flex justify-between mt-24 mx-auto max-w-screen-xl">
					<div className="flex-1 pl-20 ">
						<img className=" rounded-xl" src={image3} alt="" />
					</div>
					<div className="flex-[-33rem] mt-32">
						<span className=" pr-20 leading-6">
							"Hương Vị Việt Nam" là không gian trực tuyến độc đáo
							và
							<br />
							đầy màu sắc, nơi mà bạn sẽ bắt gặp hương thơm, hương
							vị,
							<br /> và câu chuyện của ẩm thực Việt Nam. Chúng tôi
							là một cổng <br />
							thông tin toàn diện, mở cửa cho những trải nghiệm ẩm
							thực <br />
							tuyệt vời và sâu sắc.
						</span>
					</div>
				</div>
			</div>
			<div class="w-full  h-[400px] object-cover mt-20">
				<img
					class="absolute w-full  h-[400px] object-cover  "
					src={Banner2}
					alt="about"
				/>
				<div class="absolute top-[2150px] ml-[26%] mr-[26%] text-center h-[400px] object-cover ">
					<span class=" text-white text-4xl font-bold leading-6 drop-shadow-md ">
						Bạn đã sẵn sàng khám phá những đặc sản ẩm thực độc đáo
						từ mọi vùng miền chưa?
					</span>
					<br />
					
					<NavLink to={ROUTERS.BLOG} is>
						<button class=" text-white text-2xl font-bold leading-6 drop-shadow-md mt-[80px] px-[20px] py-[15px] bg-yellow-900 rounded-xl hover:text-orange-400">
							{' '}
							to Blog
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default About;
