import React, { createContext, useState, ReactNode, useEffect } from 'react';

type ProgressContextType = {
    progress: number;
    bullet: number;
    increaseProgress: () => void;
};


const defaultProgressContext: ProgressContextType = {
    progress: 0,
    bullet: 0,
    increaseProgress: () => {},
};

const ProgressContext = createContext<ProgressContextType>(defaultProgressContext);

interface ProgressContextProviderProps {
    children: ReactNode;
}

const ProgressContextProvider: React.FC<ProgressContextProviderProps> = ({ children }) => {

    const savedProgress = parseInt(localStorage.getItem('progress') || '0');
    const savedBullet = parseInt(localStorage.getItem('bullet') || '0');

    const [progress, setProgress] = useState(savedProgress);
    const [bullet, setBullet] = useState(savedBullet);

    useEffect(() => {
        localStorage.setItem('progress', progress.toString());
        localStorage.setItem('bullet', bullet.toString());
    }, [progress, bullet]);

    const increaseProgress = () => {
        setBullet((prev) => prev + 1);
        if (progress === 460) return; 
        setProgress((prev) => prev + 92);
    };

    return (
        <ProgressContext.Provider value={{ progress, bullet, increaseProgress }}>
            {children}
        </ProgressContext.Provider>
    );
};

export default ProgressContext
export  {ProgressContextProvider}
