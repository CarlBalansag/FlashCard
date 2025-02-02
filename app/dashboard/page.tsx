"use client";
import React, { useState, useEffect, useCallback } from "react";
import Card from "./card";
import AddCard from "./addCard";
import SettingsButton from "../../components/settingsButton";
import FlipText from "@/components/flipText";
import SettingsModal from "./settings";
import BackToFlashcards from "@/components/backToFlashcards";



const Dashboard = () => {
    const [cardKeys, setCardKeys] = useState<string[]>([]);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    

    const fetchCardKeys = useCallback(() => {
        const keys = Object.keys(localStorage)
            .filter((key) => key.startsWith("cardData_"))
            .sort();

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

    const handleOpenSettings = () => {
        setIsSettingsOpen(true);
    };

    const handleCloseSettings = () => {
        setIsSettingsOpen(false);
    };

    return (
        <div className="p-10 relative w-full">
            {cardKeys.map((key) => (
                <Card key={key} cardKey={key} onCardEdited={handleCardEdited} />
            ))}

            <div className="center-button-container flex justify-center">
                <AddCard onCardAdded={handleCardAdded} />
            </div>

            <div className="settings_button fixed bottom-5 left-5">
                <BackToFlashcards />
            </div>

            <div className="settings_button fixed bottom-5 right-5">
                <SettingsButton onClick={handleOpenSettings} />

            </div>
            <SettingsModal isOpen={isSettingsOpen} onClose={handleCloseSettings} />
        </div>
    );
};

export default Dashboard;
