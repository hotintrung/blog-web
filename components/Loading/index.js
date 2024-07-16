import { faBahai } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <FontAwesomeIcon
                icon={faBahai}
                className="h-10 w-10 animate-spin text-fuchsia-300"
            />
        </div>
    );
};

export default LoadingSpinner;