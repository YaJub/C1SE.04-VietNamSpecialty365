import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Form, Input } from 'antd';
import Button from '../components/Button';
import AuthSidebar from '../components/AuthSidebar';
import { setShowAuthModal, updateUserRequest } from '../store/redux/AuthSlice';


export default function Profile() {
	const [invalidFields, setinvalidFields] = useState([]);
	const [payload, setpayload] = useState({
		name: '',
		email: '',
		phone: '',
		date_of_birth: '',
		address: '',
		avatar: '',
	});
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const isSubmitting = useSelector((state) => state.auth.fetching);

	const [form] = Form.useForm();

	const onFinish = async (values) => {
		dispatch(updateUserRequest({ id: user.id, ...values }));
	};

	useEffect(() => {
		if (!user) {
			// Trang profile yêu cầu phải đăng nhập, nếu chưa đặt nhập mà di chuyển đến trang thì mở modal login để user đăng nhập
			dispatch(setShowAuthModal(true));
		}
	}, [user]);

	return (
		<div className=" pt-12 px-36 w-full h-screen flex flex-col">
			<div className="flex w-full flex-auto">
				<AuthSidebar />
        <div className="flex-auto p-4">
				<div className="flex flex-col h-full items-center">
					<h1 className="text-3x1 w-full text-start text-primaryColor font-medium py-4 border-b-[1px] border-gray-300">
						Chỉnh Sửa Thông Tin Cá Nhân
					</h1>
					<div className="w-4/5 flex items-center justify-center flex-auto mt-[-80px]">
          <div className="pb-6 flex flex-col gap-4 w-full">
          <div className={"flex-row flex"}>
            <label className="w-48 flex-none" htmlFor="title">
              Ảnh đại diện
            </label>
            <div className="flex flex-auto flex-col items-center">
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                id="avatar"
              />
            </div>
          </div>
          <div className={"flex-row flex"}>
            <label className="w-48 flex-none" htmlFor="title">
              Tên Hiển Thị
            </label>
            <div className="flex flex-auto flex-col items-center">
              <div className="flex w-full items-center">
                <input
                  type="text"
                  id="title"
                  className={`outline-none border flex-auto border-gray-300 p-2 rounded-md`}
                  
                />
              </div>
              
            </div>
          </div>
          <div className={"flex-row flex"}>
            <label className="w-48 flex-none" htmlFor="email">
              Email
            </label>
            <div className="flex flex-auto flex-col items-center">
              <div className="flex w-full items-center">
                <input
                  type="email"
                  id="email"
                  className={`outline-none border flex-auto border-gray-300 p-2 rounded-md`}
                
                />
              </div>
              
            </div>
          </div>
          <div className={"flex-row flex"}>
            <label className="w-48 flex-none" htmlFor="email">
              Số Điện Thoại
            </label>
            <div className="flex flex-auto flex-col items-center">
              <div className="flex w-full items-center">
                <input
                  type="text"
                  id="email"
                  className={`outline-none border flex-auto border-gray-300 p-2 rounded-md`}
                  
                />
              </div>
             
            </div>
          </div>

          <div className={"flex-row flex"}>
            <label className="w-48 flex-none" htmlFor="birthday">
              Ngày Sinh
            </label>
            <div className="flex flex-auto flex-col items-center">
              <div className="flex w-full items-center">
                <input
                  type="date"
                  id="birthday"
                  className={`outline-none border flex-auto border-gray-300 p-2 rounded-md`}
                  
                />
              </div>
              
            </div>
          </div>
          <div className={"flex-row flex"}>
            <label className="w-48 flex-none" htmlFor="address">
              Địa Chỉ
            </label>
            <div className="flex flex-auto flex-col items-center">
              <div className="flex w-full items-center">
                <input
                  type="address"
                  id="email"
                  className={`outline-none border flex-auto border-gray-300 p-2 rounded-md`}
                 
                />
              </div>
              
            </div>
          </div>
          {/* <div className='flex mb-6'>

                    <label className='w-48 flex-none' htmlFor='avatar'>Ảnh đại diện</label>
                    <div>
                        <img src={payload.avatar || mAvata} alt="avatar" className='w-28 h-28 rounded-full object-cover' />
                        <input type="file" className="appearance-none my-4" id="avatar" />
                        

                    </div>
                </div> */}
          <Button
								className="text-no-underline"
								text="Cập Nhật"
								bgColor="bg-blue-600"
								textColor="text-white"
							/>

          {/* <Button
            type="submit"
            className="text-no-underline"
            text=""
            bgColor=""
            textColor="text-white"
          /> */}
        </div>
					</div>
				</div>
        </div>
			</div>
		</div>
	);
}
