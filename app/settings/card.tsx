import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import EditCard from './EditCard';

const Card = ({ cardKey, onCardEdited }: { cardKey: string; onCardEdited: () => void; }) => {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedCardData, setSelectedCardData] = useState<any>(null);

    const openEditModal = () => {
        const cardData = JSON.parse(localStorage.getItem(cardKey) || '{}');
        setSelectedCardData(cardData);
        setEditModalOpen(true);
    };

    const handleSaveEditedCard = (updatedCardData: any) => {
        localStorage.setItem(cardKey, JSON.stringify(updatedCardData));
        onCardEdited();
        setEditModalOpen(false);
    };

    useEffect(() => {
        const initialCardData = JSON.parse(localStorage.getItem(cardKey) || '{}');
        setSelectedCardData(initialCardData);
    }, [cardKey]);

    return (
        <>
            <div className="flex mt-10">
                <div className="flex-none w-14 h-14">
                    {/* Placeholder for image or icon */}
                </div>
                <div className="grow h-14 text-black outline outline-2 outline-offset-2 rounded-lg">
                    <div className="grid grid-cols-10">
                        <div className="col-span-9 ml-2 mt-4">{selectedCardData?.frontText}</div>
                        <div className="sm:ml-5 md:ml-10 xl:ml-14 2xl:ml-24">
                            <Menu>
                                <MenuButton className="text-black">
                                    <img src='' alt="Settings"/>
                                </MenuButton>
                                <MenuItems>
                                    <MenuItem>
                                        <div onClick={openEditModal}>Edit Card</div>
                                    </MenuItem>
                                    <MenuItem>
                                        <div>Delete Card</div>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

            {editModalOpen && selectedCardData && (
                <EditCard
                    cardData={selectedCardData}
                    isOpen={editModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleSaveEditedCard}
                />
            )}
        </>
    );
};

export default Card;