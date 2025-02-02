import React from 'react';
import Link from 'next/link';

const BackToFlashcards = () => {
    return (
        <Link href="/">
        <button
        className="bg-white text-center w-48 rounded-2xl h-[66px] relative text-black text-xl font-semibold group border-4"
        type="button"
        >
        <div className="bg-[#5e41de99] rounded-xl h-14 w-1/4 flex items-center justify-center absolute left-[1px] top-[2px] group-hover:w-[184px] z-10 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000" />
            <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
            />
            </svg>
        </div>
        <p className="translate-x-2 opacity-100 group-hover:opacity-0 duration-0 group-hover:duration-200 group-hover:delay-0 delay-300 ml-5">
            Flashcards
        </p>
        </button>
        </Link>
    );
};

export default BackToFlashcards;
