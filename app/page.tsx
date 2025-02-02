'use client';
import EditFlashCard from '@/components/editFlashCard';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-flip';
import "swiper/css/effect-creative";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GetStartedButton from '@/components/getStartedButton';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import FlashCard from './card';
import Loader from '@/components/loader';
import ToggleButton from '@/components/toggleButton';

export default function App() {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const linkClickToDashboard = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 500);
    }

    // Function to check localStorage
    const checkLocalStorage = () => {
        if (typeof window !== 'undefined') {
            const keys = Object.keys(localStorage).filter((key) =>
                key.startsWith('cardData_')
            );

            if (keys.length === 0) {
                setIsLocalStorageEmpty(true);
                setCardData([]); // Clear card data if empty
            } else {
                setIsLocalStorageEmpty(false);
                keys.sort();
                const data = keys.map((key) => {
                    const card = JSON.parse(localStorage.getItem(key) || '{}');
                    return {
                        frontText: card.frontText || 'Default Front',
                        backText: card.backText || 'Default Back',
                        flashCardColor: card.flashCardColor || 'f44336',
                    };
                });
                setCardData(data);
            }
        }
    };

    // useEffect to update state when localStorage changes
    useEffect(() => {
        checkLocalStorage(); // Initial check

        const handleStorageChange = () => {
            checkLocalStorage();
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 500);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <Loader />
            </div>
        );
    }

    if (isLocalStorageEmpty) {
        if(isChecked) {
            return (
                <div className="flex flex-col lg:flex-row justify-between pt-10 lg:pt-56 lg:ml-20 2xl:ml-96 ">
                    <div className="flex flex-col lg:scale-125 ml-1">
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper w-80 lg:w-72 lg:mb-10 mb-5"
                        >
                            <SwiperSlide className="flex justify-center">
                            <div className="lg:w-80 lg:h-96 w-80 h-96 bg-[#FEF99F] shadow-xl rounded-xl flex items-center justify-center p-4">
                                <div className="flex flex-col items-center justify-center">
                                    <p className=" font-agbalumo text-xl font-semibold text-gray-800  mt-4 text-sm lg:text-3xl text-center">What animal is this?</p>
                                    <img 
                                        src="https://purepng.com/public/uploads/large/51502308190ywg3xhop2e1u94ebcskyi25hrgeulctsuiw8g47ix8ok1w14mfxodwoq2gi80jzib2nrc9wanirro49nakdq3pgz2qcufshojrjc.png" 
                                        className="w-4/5 h-auto"
                                    />
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="lg:w-80 lg:h-96 w-80 h-96 bg-[#FEF99F] shadow-xl rounded-xl flex items-center justify-center p-4 ">
                                    <p className="font-agbalumo font-semibold text-gray-800 text-center text-5xl lg:text-3xl">Cat</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="w-full flex justify-center">
                            <ToggleButton setIsChecked={setIsChecked}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-end lg:pt-24z xl:mr-48 lg:ml-20 mr-3 place mt-10 xl:pl-56">
                        <p className="font-jua lg:text-7xl text-3xl font-semibold text-black w-full text-center lg:pb-16 pb-5" style={{ fontFamily: "Agbalumo, cursive" }}>Flashcards</p>
                        <p className="lg:text-xl xl:text-3xl text-xl font-semibold text-black text-center lg:mb-16 pb-5 w-full lg:mr-8">
                            Create and customize flashcards to share with friends
                        </p>
                        <div className='w-full flex justify-center lg:scale-100 scale-90'>
                        <GetStartedButton onClick={linkClickToDashboard}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col lg:flex-row justify-between pt-10 lg:pt-56 lg:ml-20 2xl:ml-96 ">
                    <div className="flex flex-col lg:scale-125 ml-1">
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                            className="mySwiper w-80 lg:w-72 lg:mb-10 mb-5"
                        >
                            <SwiperSlide className="flex justify-center">
                            <div className="lg:w-80 lg:h-96 w-80 h-96 bg-[#ABB5DA] shadow-xl rounded-xl flex items-center justify-center p-4">
                                <div className="flex flex-col items-center justify-center">
                                    <p className=" font-agbalumo text-xl font-semibold text-gray-800  mt-4 text-sm lg:text-3xl text-center">What animal start with a C ?</p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center">
                                <div className="lg:w-80 lg:h-96 w-80 h-96 bg-[#ABB5DA] shadow-xl rounded-xl flex items-center justify-center p-4 ">
                                    <p className="font-agbalumo font-semibold text-gray-800 text-center text-5xl lg:text-3xl">Cat</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="w-full flex justify-center">
                            <ToggleButton setIsChecked={setIsChecked}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-end lg:pt-24z xl:mr-48 lg:ml-20 mr-3 place mt-10 xl:pl-56">
                        <p className="font-jua lg:text-7xl text-3xl font-semibold text-black w-full text-center lg:pb-16 pb-5" style={{ fontFamily: "Agbalumo, cursive" }}>Flashcards</p>
                        <p className="lg:text-xl xl:text-3xl text-xl font-semibold text-black text-center lg:mb-16 pb-5 w-full lg:mr-8">
                            Create and customize flashcards to share with friends
                        </p>
                        <div className='w-full flex justify-center lg:scale-100 scale-90'>
                        <GetStartedButton onClick={linkClickToDashboard}/>
                        </div>
                    </div>
                </div>
            );
        }

    }
    
    
    

    return (
        <div className="h-full items-center w-full flex justify-center">
            <div className="relative w-96 h-[30rem] mt-20">
                <style>
                    {`
                        .swiper-button-next::after,
                        .swiper-button-prev::after {
                            color: black;
                        }
                    `}
                </style>
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
                    {cardData.map(({ frontText, backText, flashCardColor }, index) => (
                        <SwiperSlide
                            key={index}
                            className="Cards flex items-center justify-center rounded-xl text-2xl font-bold text-white"
                        >
                            <FlashCard
                                frontText={frontText}
                                backText={backText}
                                flashCardColor={flashCardColor}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-black p-2 rounded"></div>
                <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-black p-2 rounded"></div>

                <div className="mt-6 p-6 w-56 h-12 mx-auto flex items-center justify-center">
                    <a href="/dashboard" onClick={handleLinkClick}>
                        <EditFlashCard />
                    </a>
                </div>
            </div>
        </div>
    );
}
