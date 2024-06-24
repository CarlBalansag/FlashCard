"use client";
import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react';

const AddCard = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<null | 'card1' | 'card2'>(null);
    const [frontText, setFrontText] = useState<string>('');
    const [backText, setBackText] = useState<string>('');
    const [imageText, setImageText] = useState<string>('');

    const isFormValid = () => {
        if (selectedCard === 'card1') {
            return frontText.trim() !== '' && backText.trim() !== '' && imageText.trim() !== '';
        } else if (selectedCard === 'card2') {
            return frontText.trim() !== '' && backText.trim() !== '';
        }
        return false;
    }

    return (
        <>
            <div className="flex justify-center">
                <div className='text-black bg-green-400 mt-5 outline outline-2 rounded-lg w-fit text-center p-2 cursor-pointer' onClick={() => setOpenModal(true)}>Add Card</div>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add Card</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <div className='responsive-divs flex flex-row justify-around w-[400px] mx-auto gap-x-8'>
                            <div></div>
                            <div
                                className={`bg-blue-200 h-40 w-[180px] ${selectedCard === 'card1' ? 'outline outline-3 outline-black outline-offset-4' : ''}`}
                                id='Card 1'
                                onClick={() => setSelectedCard('card1')}
                            >
                            </div>
                            <div
                                className={`bg-blue-200 h-40 w-[180px] ${selectedCard === 'card2' ? 'outline outline-3 outline-black outline-offset-4' : ''}`}
                                id='Card 2'
                                onClick={() => setSelectedCard('card2')}
                            >
                            </div>
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
                    <Button onClick={() => { if (isFormValid()) setOpenModal(false); }} disabled={!isFormValid()}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCard;
