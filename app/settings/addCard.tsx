"use client";
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';

const AddCard = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<null | 'card1' | 'card2'>(null);
    const [frontText, setFrontText] = useState<string>('');
    const [backText, setBackText] = useState<string>('');
    const [imageText, setImageText] = useState<string>('');
    const defaultImage = 'giraffe.png';

    useEffect(() => {
        if (selectedCard === 'card1') {
            const frontTextElement = document.getElementById('card1-front-text');
            const backTextElement = document.getElementById('card1-back-text');
            const imageElement = document.getElementById('card1-image');

            if (frontTextElement) {
                frontTextElement.innerText = frontText;
            }

            if (backTextElement) {
                backTextElement.innerText = backText;
            }

            if (imageElement) {
                const img = new Image();
                img.src = imageText;
                img.onload = () => {
                    imageElement.src = imageText;
                };
                img.onerror = () => {
                    imageElement.src = defaultImage;
                };
            }
        } else if (selectedCard === 'card2') {
            const frontTextElement = document.getElementById('card2-front-text');
            const backTextElement = document.getElementById('card2-back-text');

            if (frontTextElement) {
                frontTextElement.innerText = frontText;
            }

            if (backTextElement) {
                backTextElement.innerText = backText;
            }
        }
    }, [frontText, backText, imageText, selectedCard]);

    const isFormValid = () => {
        if (selectedCard === 'card1') {
            return frontText.trim() !== '' && backText.trim() !== '' && imageText.trim() !== '';
        } else if (selectedCard === 'card2') {
            return frontText.trim() !== '' && backText.trim() !== '';
        }
        return false;
    };

    const handleAcceptClick = () => {
        if (isFormValid()) {
            console.log('Front Text:', frontText);
            console.log('Back Text:', backText);
            if (selectedCard === 'card1') {
                console.log('Image Text:', imageText);
            }
            setOpenModal(false);
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <div
                    className='text-black bg-green-400 mt-5 outline outline-2 rounded-lg w-fit text-center p-2 cursor-pointer'
                    onClick={() => setOpenModal(true)}
                >
                    Add Card
                </div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Card</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className='responsive-divs flex flex-row justify-around w-full mx-auto gap-x-8'>
                            <Swiper
                                effect={'flip'}
                                grabCursor={true}
                                modules={[EffectFlip]}
                                className="mySwiper w-[180px] h-[200px]"
                            >
                                <SwiperSlide>
                                    <div
                                        className={`bg-blue-200 h-full w-full ${selectedCard === 'card1' ? 'outline outline-3 outline-black outline-offset-4' : ''} flex flex-col items-center justify-center`}
                                        onClick={() => setSelectedCard('card1')}
                                    >
                                        <p className='text-wrap text-black text-sm text-center break-words' id='card1-front-text'>What animal is this?</p>
                                        <img className='w-2/3' src={defaultImage} alt='Giraffe' id='card1-image'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={`bg-blue-200 h-full w-full ${selectedCard === 'card1' ? 'outline outline-3 outline-black outline-offset-4' : ''} flex flex-col items-center justify-center`}
                                        onClick={() => setSelectedCard('card1')}
                                    >
                                        <p className='text-wrap text-black text-xl text-center break-words' id='card1-back-text'>Giraffe</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                effect={'flip'}
                                grabCursor={true}
                                modules={[EffectFlip]}
                                className="mySwiper w-[180px] h-[200px]"
                            >
                                <SwiperSlide>
                                    <div
                                        className={`bg-blue-200 h-full w-full ${selectedCard === 'card2' ? 'outline outline-3 outline-black outline-offset-4' : ''} flex flex-col items-center justify-center`}
                                        onClick={() => setSelectedCard('card2')}
                                    >
                                        <p className='text-wrap text-black text-xl text-center break-words' id='card2-front-text'>What continent is Japan?</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className={`bg-blue-200 h-full w-full ${selectedCard === 'card2' ? 'outline outline-3 outline-black outline-offset-4' : ''} flex flex-col items-center justify-center`}
                                        onClick={() => setSelectedCard('card2')}
                                    >
                                        <p className='text-wrap text-black text-2xl text-center break-words' id='card2-back-text'>Asia</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div>
                            <p className='text-black mt-3'>Front Text</p>
                            <input 
                                required 
                                className='text-black outline outline-1 pl-2 w-full' 
                                value={frontText}
                                onChange={(e) => setFrontText(e.target.value)}
                            />
                            <p className='text-black mt-3'>Back Text</p>
                            <input 
                                className='text-black outline outline-1 pl-2 w-full' 
                                value={backText}
                                onChange={(e) => setBackText(e.target.value)}
                            />
                            <div className={`${selectedCard === 'card1' ? 'blur-none' : 'blur-sm'}`}>
                                <p className='text-black mt-3'>Image</p>
                                <input 
                                    className='text-black outline outline-1 pl-2 w-full'
                                    value={imageText}
                                    onChange={(e) => setImageText(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAcceptClick} disabled={!isFormValid()}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddCard;
