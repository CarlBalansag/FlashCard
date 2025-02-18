import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { CirclePicker } from 'react-color';
import { Transition } from '@headlessui/react';
import AddCardButton from '@/components/addCardButton copy';

const AddCard = ({ onCardAdded }: { onCardAdded: () => void }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<null | 'card1' | 'card2'>(null);
    const [frontText, setFrontText] = useState<string>('');
    const [backText, setBackText] = useState<string>('');
    const [imageText, setImageText] = useState<string>('');
    const [color, setColor] = useState<string>('#f44336');
    const defaultImage = 'giraffe.png';
    const imageIcon = 'imageAddIcon.png';

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
            const cardKeys = Object.keys(localStorage).filter(key => key.startsWith('cardData_'));
            const nextKey = cardKeys.length + 1;
            const keyName = `cardData_${nextKey}`;

            const cardData = {
                keyName,
                selectedCard,
                frontText,
                backText,
                imageText: selectedCard === 'card1' ? imageText : null,
                flashCardColor: color,
            };
            localStorage.setItem(keyName, JSON.stringify(cardData));

            setOpenModal(false);
            onCardAdded();
        }
    };

    return (
        <>
            <div className="flex justify-center mt-8" onClick={() => setOpenModal(true)}>
                <AddCardButton />
            </div>

            <Transition
                show={openModal}
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
                            <h2 className="text-lg font-bold mb-4">Add Card</h2>
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
                                                    src={imageText || defaultImage}
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

                                    <div id="imageInput" className={`${selectedCard === 'card1' ? 'blur-none' : 'blur-sm'} pb-5`}>
                                        <p className="text-black mt-3">Front Image</p>
                                        <div className="flex items-center">
                                            <input
                                                className="text-black outline outline-1 pl-2 flex-grow rounded-lg"
                                                value={imageText}
                                                onChange={(e) => setImageText(e.target.value)}
                                                placeholder="Enter image URL or upload file"
                                            />
                                            <label htmlFor="fileInput" className="cursor-pointer">
                                                <img src={imageIcon} className='w-11 ml-3' alt="Upload Icon"/>
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/png, image/jpeg, image/gif, image/svg+xml"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        const reader = new FileReader();
                                                        reader.onloadend = () => {
                                                            setImageText(reader.result as string);
                                                        };
                                                        reader.readAsDataURL(file);
                                                    }
                                                }}
                                                className="hidden"
                                                id="fileInput"
                                            />
                                        </div>
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
                                    Finish
                                </Button>
                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                    Decline
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
};

export default AddCard;