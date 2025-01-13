import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import EditCard from './editCard';
import Hamburger from '@/components/hamburger';

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
        onCardEdited();  // Trigger re-render of parent
        setEditModalOpen(false);
    };

    const handleDeleteCard = () => {
        localStorage.removeItem(cardKey);  // Remove the card from local storage
        onCardEdited();  // Trigger re-fetch of card keys to update the UI
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
                        <div className="sm:ml-5 md:ml-10 xl:ml-14 2xl:ml-24 flex items-center justify-center">
                            <Menu>
                                <MenuButton className="text-black flex items-center justify-center w-12 h-12 pt-2 rounded-full ml-5">
                                    <Hamburger />
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-purple-100 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-black rounded-lg p-2 w-40 mt-4 ml-28 mr-4 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)]"
                                > 
                                    <MenuItem>
                                        {({ active }) => (
                                            <div
                                                className={`${
                                                    active ? 'bg-purple-200' : ''
                                                } p-2 text-black rounded-lg`}
                                                onClick={openEditModal}
                                            >
                                                Edit Card
                                            </div>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ active }) => (
                                            <div
                                                className={`${
                                                    active ? 'bg-purple-200' : ''
                                                } p-2 text-black rounded-lg`}
                                                onClick={handleDeleteCard}
                                            >
                                                Delete Card
                                            </div>
                                        )}
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
