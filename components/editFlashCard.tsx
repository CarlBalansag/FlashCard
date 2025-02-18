import React from 'react';

const EditFlashCard = () => {
    return (
        <button className="relative overflow-hidden px-8 py-4 rounded-lg font-bold text-[#5e41de99] uppercase tracking-wider text-sm transition-all duration-1000 ease-in-out outline outline-2 outline-[#5e41de99] hover:text-white hover:scale-110 hover:outline-[#5e41de99] hover:shadow-[4px_5px_17px_-4px_#5e41de99] w-[250px] group">
            Edit Flash Cards
            {/* Shine Effect */}
            <div className="absolute -left-[50px] top-0 w-0 h-full bg-[#5e41de99] transform skew-x-[45deg] z-[-1] transition-all duration-1000 ease-in-out group-hover:w-[250%]"></div>
        </button>
    );
};

export default EditFlashCard;