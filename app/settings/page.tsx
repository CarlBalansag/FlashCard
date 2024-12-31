"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Card from './card';
import AddCard from './addCard';


const Settings = () => {
    // Step 2: Ensure that cardKeys is correctly defined
    const [cardKeys, setCardKeys] = useState<string[]>([]);

    const fetchCardKeys = useCallback(() => {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('cardData_'));
        setCardKeys(keys);
    }, []);

    useEffect(() => {
        fetchCardKeys();
    }, [fetchCardKeys]);

    const handleCardAdded = useCallback(() => {
        fetchCardKeys();
    }, [fetchCardKeys]);

    // Rerender after card is edited
    const handleCardEdited = useCallback(() => {
        fetchCardKeys();
    }, [fetchCardKeys]);

    return (
        <div className="p-10">
            {/* Step 3: Ensure cardKeys is correctly used in the map function */}
            {cardKeys.map(key => (
                <Card key={key} cardKey={key} onCardEdited={handleCardEdited} />
            ))}
            <AddCard onCardAdded={handleCardAdded} />
        </div>
    );
};

export default Settings;
