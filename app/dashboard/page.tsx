"use client";
import React, { useState, useEffect, useCallback } from "react";
import Card from "./card";
import AddCard from "./addCard";
import SettingsButton from "../../components/settingsButton";

const Dashboard = () => {
    const [cardKeys, setCardKeys] = useState<string[]>([]);

    const fetchCardKeys = useCallback(() => {
        const keys = Object.keys(localStorage)
            .filter((key) => key.startsWith("cardData_"))
            .sort(); // Add sorting logic here (alphabetical by default)

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
        <div className="p-10 relative">
            {cardKeys.map((key) => (
                <Card key={key} cardKey={key} onCardEdited={handleCardEdited} />
            ))}
            <AddCard onCardAdded={handleCardAdded} />
            
            {/* Settings Button */}
            <div className="settings_button fixed bottom-5 right-5">
                <SettingsButton />
            </div>
        </div>
    );
};

export default Dashboard;
