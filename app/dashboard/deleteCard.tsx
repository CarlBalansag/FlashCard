import React from 'react';

const DeleteCard = ({ cardKey, onCardDeleted }: { cardKey: string; onCardDeleted: () => void }) => {
    const handleDelete = () => {
        // Remove the card from localStorage
        localStorage.removeItem(cardKey);
        // Notify the parent component to refresh the card list
        onCardDeleted();
    };

    return (
        <div
            className="bg-red-500 text-white text-center p-2 rounded-lg cursor-pointer hover:bg-red-600"
            onClick={handleDelete}
        >
            Delete Card
        </div>
    );
};

export default DeleteCard;
