"use client";
import React, { useState } from "react";

const SettingsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    if (!isOpen) return null;

    // Function to handle color selection
    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };

    // Function to handle "Edit Colors" button click
    const handleEditColors = () => {
        if (selectedColor) {
            console.log("Selected Color:", selectedColor);
            // Add your functionality here (e.g., update flashcard colors)
        } else {
            console.log("No color selected");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-45">
            <div
                className="bg-white rounded-lg shadow-lg"
                style={{
                    width: '90%',
                    maxWidth: '1200px',
                    height: 'auto',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}>
                <h1 className="text-black text-3xl mt-5 ml-5 mb-3">Settings</h1>
                <hr className="border-gray-400 mb-7"/>

                <div className="grid grid-cols-3 gap-5 pl-8 ">
                    <div className="bg-gray-300">
                        <p className="text-black text-2xl text-center mt-5 mb-5">Flashcard Colors</p>
                        <div className="grid grid-cols-5 gap-10 pl-2 pr-3 mb-5">
                            {/* Explicitly define all color classes */}
                            <div
                                className={`w-10 h-10 bg-blue-500 rounded-full cursor-pointer ${
                                    selectedColor === "blue-500" ? "border-4 border-black" : ""
                                }`}
                                onClick={() => handleColorClick("blue-500")}
                            ></div>
                            <div
                                className={`w-10 h-10 bg-red-500 rounded-full cursor-pointer ${
                                    selectedColor === "red-500" ? "border-4 border-black" : ""
                                }`}
                                onClick={() => handleColorClick("red-500")}
                            ></div>
                            <div
                                className={`w-10 h-10 bg-green-500 rounded-full cursor-pointer ${
                                    selectedColor === "green-500" ? "border-4 border-black" : ""
                                }`}
                                onClick={() => handleColorClick("green-500")}
                            ></div>
                            <div
                                className={`w-10 h-10 bg-yellow-500 rounded-full cursor-pointer ${
                                    selectedColor === "yellow-500" ? "border-4 border-black" : ""
                                }`}
                                onClick={() => handleColorClick("yellow-500")}
                            ></div>
                            <div
                                className={`w-10 h-10 bg-purple-500 rounded-full cursor-pointer ${
                                    selectedColor === "purple-500" ? "border-4 border-black" : ""
                                }`}
                                onClick={() => handleColorClick("purple-500")}
                            ></div>
                        </div>
                        <div className="flex justify-center items-center w-full mb-5">
                            <button
                                className="w-5/6 bg-blue-500"
                                onClick={handleEditColors}
                            >
                                <p className="text-center text-xl text-black">Edit Colors</p>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                        <p className="text-black text-2xl text-center mt-5 mb-5">Website Theme</p>
                    </div>
                    <div className="bg-gray-300">
                        <p className="text-black text-2xl text-center mt-5 mb-5">Background Color</p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 ml-5 mb-5 bg-blue-500 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsModal;