import React from 'react';

interface MagicButtonProps {
    title: string;
    icon: React.ReactNode;
    position: 'left' | 'right';
    handleClick?: () => void;
    otherClasses?: string;
    className?: string; // Add this line
}

const MagicButton: React.FC<MagicButtonProps> = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    className, // Add this line
}) => {
    return (
        <button 
            className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${className}`} 
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    );
};

export default MagicButton;
