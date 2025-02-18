const GetStartedButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative transition-all duration-300 ease-in-out shadow-lg px-5 py-2 bg-purple-600/75 rounded-full flex items-center justify-center gap-2 text-white font-bold border-2 border-white/30 hover:border-white/90 hover:scale-105 overflow-hidden text-lg group"
        >
            Get Started
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 transition-all duration-400 ease-in-out group-hover:translate-x-1"
            >
                <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                />
            </svg>
            {/* Shine Effect */}
            <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0 group-hover:opacity-60 group-hover:left-full transition-all duration-1000 ease-in-out"></div>
        </button>
    );
};

export default GetStartedButton;