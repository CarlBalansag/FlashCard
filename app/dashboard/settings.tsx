"use client";
import React from "react";

const SettingsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
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
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 ml-5 mb-5 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsModal;
