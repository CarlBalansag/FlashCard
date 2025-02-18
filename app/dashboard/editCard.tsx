import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { CirclePicker } from 'react-color';
import { Transition } from '@headlessui/react';

const EditCard = ({ cardData, isOpen, onClose, onSave }: { cardData: any; isOpen: boolean; onClose: () => void; onSave: (updatedCardData: any) => void; }) => {
    const [selectedCard, setSelectedCard] = useState<'card1' | 'card2'>(cardData.selectedCard);
    const [frontText, setFrontText] = useState<string>(cardData.frontText);
    const [backText, setBackText] = useState<string>(cardData.backText);
    const [imageText, setImageText] = useState<string>(cardData.imageText || '');
    const [color, setColor] = useState<string>(cardData.flashCardColor || '#ffffff');  // Changed default to white

    const handleChangeComplete = (color: any) => {
        setColor(color.hex);
    };

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
                imageText: selectedCard === 'card1' ? imageText : null,
                flashCardColor: color,
            };

            onSave(updatedCardData);  // Notify parent to save the updated data
        }
    };

    return (
        <Transition
            show={isOpen}
            enter="transition ease-out duration-300 transform"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
        >
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-45">
                <div
                    className="bg-white rounded-lg shadow-lg"
                    style={{
                        width: '90%',
                        maxWidth: '600px',
                        height: 'auto',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}
                >
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-4">Edit Card</h2>
                        <div className="space-y-6">
                            <div className="responsive-divs flex flex-row justify-around w-full mx-auto gap-x-8">
                                <Swiper
                                    effect={'flip'}
                                    grabCursor={true}
                                    modules={[EffectFlip]}
                                    className="mySwiper w-[180px] h-[200px]"
                                >
                                    <SwiperSlide className="leftCardFront">
                                        <div
                                            style={{ backgroundColor: color || '#bfdbfe' }}
                                            className={`h-full w-full ${
                                                selectedCard === 'card1'
                                                    ? 'outline outline-3 outline-black outline-offset-4'
                                                    : ''
                                            } flex flex-col items-center justify-center relative group`}
                                            onClick={() => setSelectedCard('card1')}
                                        >
                                            <p className="text-wrap text-black text-sm text-center break-words">
                                                {frontText}
                                            </p>
                                            <img
                                                className="w-2/3"
                                                src={imageText || 'giraffe.png'}
                                                alt="Image"
                                                id="card1-image"
                                            />
                                            {/* hover text */}
                                            <div className="hidden group-hover:block">
                                                <div
                                                    className="absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300"
                                                >
                                                    <div className="rounded-sm bg-black py-1 px-2">
                                                        <p className="whitespace-nowrap">Swipe Right</p>
                                                    </div>
                                                    <div
                                                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="leftCardBack">
                                        <div
                                            style={{ backgroundColor: color || '#bfdbfe' }}
                                            className={`h-full w-full ${
                                                selectedCard === 'card1'
                                                    ? 'outline outline-3 outline-black outline-offset-4'
                                                    : ''
                                            } flex flex-col items-center justify-center`}
                                            onClick={() => setSelectedCard('card1')}
                                        >
                                            <p className="text-wrap text-black text-xl text-center break-words">
                                                {backText}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper
                                    effect={'flip'}
                                    grabCursor={true}
                                    modules={[EffectFlip]}
                                    className="mySwiper w-[180px] h-[200px]"
                                >
                                    <SwiperSlide className="rightCardFront">
                                        <div
                                            style={{ backgroundColor: color || '#bfdbfe' }}
                                            className={`h-full w-full ${
                                                selectedCard === 'card2'
                                                    ? 'outline outline-3 outline-black outline-offset-4'
                                                    : ''
                                            } flex flex-col items-center justify-center relative group`}
                                            onClick={() => setSelectedCard('card2')}
                                        >
                                            <p className="text-wrap text-black text-xl text-center break-words">
                                                {frontText}
                                            </p>
                                            {/* hover text */}
                                            <div className="hidden group-hover:block">
                                                <div
                                                    className="absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300"
                                                >
                                                    <div className="rounded-sm bg-black py-1 px-2">
                                                        <p className="whitespace-nowrap">Swipe Right</p>
                                                    </div>
                                                    <div
                                                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="rightCardBack">
                                        <div
                                            style={{ backgroundColor: color || '#bfdbfe' }}
                                            className={`h-full w-full ${
                                                selectedCard === 'card2'
                                                    ? 'outline outline-3 outline-black outline-offset-4'
                                                    : ''
                                            } flex flex-col items-center justify-center`}
                                            onClick={() => setSelectedCard('card2')}
                                        >
                                            <p className="text-wrap text-black text-2xl text-center break-words">
                                                {backText}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div>
                                <p className="text-black mt-3">Front Text</p>
                                <input
                                    required
                                    className="text-black outline outline-1 pl-2 w-full rounded-lg"
                                    value={frontText}
                                    onChange={(e) => setFrontText(e.target.value)}
                                />
                                <p className="text-black mt-3">Back Text</p>
                                <input
                                    className="text-black outline outline-1 pl-2 w-full rounded-lg"
                                    value={backText}
                                    onChange={(e) => setBackText(e.target.value)}
                                />
                                <div className={`${selectedCard === 'card1' ? 'blur-none' : 'blur-sm'} pb-5`}>
                                    <p className="text-black mt-3">Front Image</p>
                                    <input
                                        className="text-black outline outline-1 pl-2 w-full rounded-lg"
                                        value={imageText}
                                        onChange={(e) => setImageText(e.target.value)}
                                    />
                                </div>
                                <div className="mt-2">
                                    <CirclePicker
                                        color={color}
                                        onChangeComplete={handleChangeComplete}
                                        colors={[
                                            '#79aab1',
                                            '#cadef7',
                                            '#e1978e',
                                            '#d0b1b9',
                                            '#ba8351',
                                        ]}
                                        width="560px"
                                        circleSize={35}
                                        circleSpacing={10}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button onClick={handleAcceptClick} disabled={!isFormValid()} className="mr-5">
                                Save Changes
                            </Button>
                            <Button color="gray" onClick={onClose}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default EditCard;