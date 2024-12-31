'use client';

import React from 'react';
import Link from 'next/link'; // Import the Link component from next/link
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
            <div className="relative w-96 h-[30rem] mt-20">
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
                    <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white">
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper w-96 h-[30rem] p-16"
                        >
                            <SwiperSlide className="swiper-slide bg-center bg-cover w-96 h-[30rem] bg-blue-600">
                                <p className="text-center text-3xl pt-5">Front</p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide bg-center bg-cover w-96 h-[30rem] bg-blue-600">
                                <p className="text-center text-3xl pt-5">Back</p>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>

                    <SwiperSlide className="flex items-center justify-center rounded-lg text-2xl font-bold text-white">
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper w-96 h-[30rem] p-16"
                        >
                            <SwiperSlide className="swiper-slide bg-center bg-cover w-96 h-[30rem] bg-blue-600">
                                <p className="text-center text-3xl pt-5">Front</p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide bg-center bg-cover w-96 h-[30rem] bg-blue-600">
                                <p className="text-center text-3xl pt-5">Back</p>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>

                </Swiper>

                <div
                    className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-black bg-gray-300 p-2 rounded hover:bg-gray-400"
                    style={{
                        color: 'black',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                        padding: '8px',
                    }}
                ></div>
                <div
                    className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-black bg-gray-300 p-2 rounded hover:bg-gray-400"
                    style={{
                        color: 'black',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                        padding: '8px',
                    }}
                ></div>

                <Link href="/settings">
                    <div className="mt-6 p-6 bg-gray-300 rounded-lg shadow-lg w-56 h-12 mx-auto cursor-pointer hover:bg-gray-200 transition-all flex items-center justify-center">
                        <p className="text-center text-black text-xs">Click here to edit Flash Cards.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
