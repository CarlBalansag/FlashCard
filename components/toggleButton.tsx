import React, { useState } from 'react';

const ToggleButton = ({ setIsChecked }) => {
    const [isCheckedLocal, setIsCheckedLocal] = useState(false);

    const handleToggle = () => {
        setIsCheckedLocal((prevState) => {
            const newState = !prevState;
            setIsChecked(newState); // Update parent state via callback
            return newState;
        });

        // Print messages to the console based on the state
        if (!isCheckedLocal) {
            console.log("You selected 'With Image'.");
        } else {
            console.log("You selected 'Without Image'.");
        }
    };

    return (
        <div className="">
            <input
                type="checkbox"
                id="toggle"
                className="hidden"
                checked={isCheckedLocal}
                onChange={handleToggle}
            />
            <label
                htmlFor="toggle"
                className="relative grid grid-cols-2 w-52 h-10 border-4 border-[#5e41df99] rounded-2xl bg-[#5e41df99] cursor-pointer font-bold overflow-hidden transition-colors duration-300 hover:border-[#4a32b3]"
            >
                <div
                    className={`py-2 pl-2 text-xs transition-colors duration-300 ${isCheckedLocal ? "text-gray-800" : "text-gray-800"}`}
                >
                    With Image
                </div>
                <div
                    className={`py-2 pl-2 text-xs transition-colors duration-300 ${isCheckedLocal ? "text-gray-800" : "text-gray-800"}`}
                >
                    Without Image
                </div>
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 bg-[#CEC5F5] rounded-2xl transition-transform duration-300 ${isCheckedLocal ? "translate-x-full" : "translate-x-0"}`}
                ></div>
            </label>
        </div>
    );
};

export default ToggleButton;
