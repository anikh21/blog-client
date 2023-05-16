import { useEffect, useState } from 'react';

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300
                ? setShowButton(true)
                : setShowButton(false);
        };
        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, []);
    return (
        <div className="scroll-to-to">
            {showButton && (
                <div className="scroll-to-top">
                    <button
                        className="bg-blue-600 transform rotate-180 text-white fixed bottom-5 right-7 z-50 cursor-pointer p-3 rounded-full"
                        onClick={handleScrollToTop}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-down"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
