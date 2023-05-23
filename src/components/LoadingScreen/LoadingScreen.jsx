import React from 'react';
import "./LoadingScreen"
const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="image-container">
                <img className="pulse-image" src="/img/svg/ESD_Logo.svg" alt="Pulsing Image" />
            </div>
        </div>
    );
};

export default LoadingScreen;