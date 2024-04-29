import React from 'react';

const RefreshButton: React.FC = () => {
    const refreshPage = () => {
      window.location.reload();
    };

    return (
        <button onClick={refreshPage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Clear Story
        </button>
    );
}

export default RefreshButton;
