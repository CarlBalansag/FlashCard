'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

// import required modules
import { EffectCards, Navigation, EffectFlip, Pagination } from 'swiper/modules';

export default function App() {
return (
    <div className="h-full flex justify-center items-center bg-white text-black font-sans">
    <div className="relative w-60 h-80">
    <Swiper
        effect={'cards'}
        grabCursor={false}
        allowTouchMove={false}
        modules={[EffectCards, Navigation]}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        className="mySwiper w-full h-full"
        >
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white ">
            <Swiper
                effect={'flip'}
                grabCursor={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper w-80 h-80 p-12"
            >
                <SwiperSlide className="swiper-slide bg-center bg-cover w-80 h-80 bg-blue-600">
                <p className="mr-20 text-center">Front</p>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide bg-center bg-cover w-80 h-80 bg-blue-600">
                <p className='mr-20 text-center'>Back</p>
                </SwiperSlide>
            </Swiper>
        </SwiperSlide>



        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white">
            <Swiper
            effect={'flip'}
            grabCursor={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper w-80 h-80 p-12"
            >
            <SwiperSlide className="swiper-slide bg-center bg-cover w-80 h-80 bg-blue-600">
                <p className="mr-20 text-center">Front</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide bg-center bg-cover w-80 h-80 bg-blue-600">
                <p className="mr-20 text-center">Back</p>
            </SwiperSlide>
            </Swiper>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-green-500">Question 3</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-orange-600">Question 4</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-green-700">Question 5</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-red-800">Question 6</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-green-800">Question 7</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-blue-800">Question 8</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white bg-purple-700">Question 9</SwiperSlide>
        </Swiper>
        {/* Add navigation buttons */}
        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded"></div>
        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded"></div>
    </div>
    </div>
);
}