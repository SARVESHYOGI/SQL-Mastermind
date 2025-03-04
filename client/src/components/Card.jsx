import React from 'react';

function Card({ plans }) {
    // Check if plans and plans.week1 exist
    if (!plans || !plans.week1) {
        return <div className="text-red-500">Plans data is missing.</div>; // Fallback if plans is undefined or does not have week1
    }

    return (
        <div>
            <div className="max-w-sm rounded-lg border border-gray-300 shadow-lg overflow-hidden">
                <img src="https://via.placeholder.com/400x200" alt="Card image" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{plans.week1.difficultyLevel}</h3>
                    <p className="text-gray-600 mt-2">
                        This is a simple card with some basic information. You can add more content here as needed.
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
