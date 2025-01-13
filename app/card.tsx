'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

interface CardProps {
    frontText: string;
    backText: string;
    flashCardColor: string;
}

const FlashCard: React.FC<CardProps> = ({ frontText, backText, flashCardColor }) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Swiper
                effect={'flip'}
                grabCursor={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper w-full h-full"
            >
                {/* Front Card */}
                <SwiperSlide className="swiper-slide flex items-center justify-center">
                    <div
                        style={{
                            backgroundColor: flashCardColor || '#bfdbfe', // Default background color if none is provided
                        }}
                        className="h-full w-full flex flex-col items-center justify-center"
                    >
                        <p className="text-xl text-center text-black text-wrap break-words">
                            {frontText || 'Default Front'}
                        </p>
                    </div>
                </SwiperSlide>

                {/* Back Card */}
                <SwiperSlide className="swiper-slide flex items-center justify-center">
                    <div
                        style={{
                            backgroundColor: flashCardColor || '#bfdbfe', // Default background color if none is provided
                        }}
                        className="h-full w-full flex flex-col items-center justify-center"
                    >
                        <p className="text-2xl text-center text-black text-wrap break-words">
                            {backText || 'Default Back'}
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FlashCard;
