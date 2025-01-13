'use client';
import EditFlashCard from '@/components/editFlashCard';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { EffectCards, Navigation } from 'swiper/modules';
import FlashCard from './card';

export default function App() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Filter keys that start with 'cardData_'
            const keys = Object.keys(localStorage).filter((key) =>
                key.startsWith('cardData_')
            );

            // Sort keys in the desired order (alphabetical order in this case)
            keys.sort();

            // Map keys to parse data and construct card objects
            const data = keys.map((key) => {
                const card = JSON.parse(localStorage.getItem(key) || '{}');
                return {
                    frontText: card.frontText || 'Default Front',
                    backText: card.backText || 'Default Back',
                    flashCardColor: card.flashCardColor || 'f44336', // Ensure this is included
                };
            });

            setCardData(data);
        }
    }, []);

    return (
        <div className="h-full flex justify-center items-center bg-white text-black font-sans">
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
                        <SwiperSlide key={index} className="Cards flex items-center justify-center rounded-lg text-2xl font-bold text-white">
                            <FlashCard frontText={frontText} backText={backText} flashCardColor={flashCardColor} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div
                    className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 text-black p-2 rounded"
                ></div>
                <div
                    className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 text-black p-2 rounded"
                ></div>

                <Link href="/dashboard">
                    <div className="mt-6 p-6 w-56 h-12 mx-auto flex items-center justify-center">
                        <EditFlashCard />
                    </div>
                </Link>
            </div>
        </div>
    );
}
