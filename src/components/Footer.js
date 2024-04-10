import React, { memo } from 'react';

export default memo(function Footer() {
	return (
		<div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-[20px] text-left text-13xl text-white font-button-bold lg:flex-wrap">
      <div className="w-[607px] flex flex-row items-start justify-between min-w-[607px] max-w-full lg:flex-1 mq750:flex-wrap mq750:min-w-full">
        <img
          className="h-[158px] w-[327px] relative object-cover max-w-full"
          alt=""
          src="/image-14-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <h2 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block min-w-[104px] mq1050:text-7xl mq1050:leading-[31px] mq450:text-lgi mq450:leading-[23px]">
            Dịch Vụ
          </h2>
          <div className="flex flex-col items-start justify-start gap-[16px] text-5xl text-theme-gray-100">
            <div className="relative leading-[100%] inline-block min-w-[99px] mq450:text-lgi mq450:leading-[19px]">
              Trang chủ
            </div>
            <div className="relative leading-[100%] inline-block min-w-[97px] mq450:text-lgi mq450:leading-[19px]">
              Giới thiệu
            </div>
            <div className="relative leading-[100%] inline-block min-w-[95px] mq450:text-lgi mq450:leading-[19px]">
              Cửa hàng
            </div>
            <div className="relative leading-[100%] inline-block min-w-[46px] mq450:text-lgi mq450:leading-[19px]">
              Blog
            </div>
          </div>
        </div>
      </div>
      <div className="w-[483px] flex flex-col items-start justify-start gap-[43px] min-w-[483px] max-w-full text-lg text-whitesmoke lg:flex-1 mq750:gap-[21px_43px] mq750:min-w-full">
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <b className="relative leading-[22px] uppercase inline-block min-w-[92px]">
            Follow Us
          </b>
          <div className="flex flex-row items-start justify-start gap-[16px] opacity-[0.31] text-5xl text-theme-gray-100 font-font-awesome-5-brands">
            <div className="relative leading-[100%] inline-block min-w-[21px] mq450:text-lgi mq450:leading-[19px]">
              
            </div>
            <div className="relative leading-[100%] inline-block min-w-[24px] mq450:text-lgi mq450:leading-[19px]">
              
            </div>
            <div className="relative leading-[100%] inline-block min-w-[24px] mq450:text-lgi mq450:leading-[19px]">
              
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-silver font-body-1 mq750:gap-[20px_40px]">
          <b className="self-stretch relative leading-[140%]">
            Receive exclusive offers in your mailbox
          </b>
          <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full text-5xl text-darkgray font-font-awesome-5-free mq450:flex-wrap">
            <div className="flex-1 rounded-lg bg-theme-gray-800 flex flex-row items-center justify-start pt-[12.5px] pb-[13.5px] pr-36 pl-4 box-border gap-[10px] min-w-[164px] max-w-full mq450:pr-5 mq450:box-border">
              <div className="w-6 relative leading-[34px] inline-block min-w-[24px] mq450:text-lgi mq450:leading-[27px]">
                envelope
              </div>
              <div className="relative text-lg leading-[140%] font-body-1">
                Enter Your email
              </div>
            </div>
            <div className="rounded-lg [background:linear-gradient(92.84deg,_#ffb800,_#ff8a00)] shadow-[0px_5px_8px_rgba(222,_151,_0,_0.24),_0px_14px_32px_rgba(255,_178,_14,_0.29)] flex flex-row items-center justify-center py-[21px] px-[27px] text-center text-lg text-white font-button-bold">
              <b className="w-[79px] relative leading-[100%] inline-block min-w-[79px]">
                Subscribe
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
});
