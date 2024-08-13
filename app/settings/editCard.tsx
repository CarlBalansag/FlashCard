import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';

const EditCard = ({ cardData, isOpen, onClose, onSave }: { cardData: any; isOpen: boolean; onClose: () => void; onSave: (updatedCardData: any) => void; }) => {
    const [selectedCard, setSelectedCard] = useState<'card1' | 'card2'>(cardData.selectedCard);
    const [frontText, setFrontText] = useState<string>(cardData.frontText);
    const [backText, setBackText] = useState<string>(cardData.backText);
    const [imageText, setImageText] = useState<string>(cardData.imageText || '');

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
            const updatedCardData = {
                ...cardData,
                selectedCard,
                frontText,
                backText,
                imageText: selectedCard === 'card1' ? imageText : null
            };

            onSave(updatedCardData); // Call onSave function passed from parent component
        }
    };

    return (
        <Modal show={isOpen} onClose={onClose}>
            <Modal.Header>Edit Card</Modal.Header>
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
                                    <p className='text-wrap text-black text-sm text-center break-words'>{frontText}</p>
                                    <img className='w-2/3' src={imageText || 'giraffe.png'} alt='Image' id='card1-image'/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-blue-200 h-full w-full ${selectedCard === 'card1' ? 'outline outline-3 outline-black outline-offset-4' : ''} flex flex-col items-center justify-center`}
                                    onClick={() => setSelectedCard('card1')}
                                >
                                    <p className='text-wrap text-black text-xl text-center break-words'>{backText}</p>
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
                                    <p className='text-wrap text-black text-xl text-center break-words'>{frontText}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-blue-200 h-full w-full ${selectedCard === 'card2' ? 'outline outline-3 outline-black outline-offset-4' : ''} flex flex-col items-center justify-center`}
                                    onClick={() => setSelectedCard('card2')}
                                >
                                    <p className='text-wrap text-black text-2xl text-center break-words'>{backText}</p>
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
                <Button onClick={handleAcceptClick} disabled={!isFormValid()}>Save Changes</Button>
                <Button color="gray" onClick={onClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditCard;