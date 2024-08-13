"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import AddCard from './AddCard';

const Settings = () => {
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

    const handleCardEdited = useCallback(() => {
        fetchCardKeys();
    }, [fetchCardKeys]);

    return (
        <div className="p-10">
            {cardKeys.map(key => (
                <Card key={key} cardKey={key} onCardEdited={handleCardEdited} />
            ))}
            <AddCard onCardAdded={handleCardAdded} />
        </div>
    );
};

export default Settings;