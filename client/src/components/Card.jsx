import React from 'react';
import { Link } from 'react-router-dom';
import week4 from '../assets/week4.png';
import week8 from '../assets/week8.png';

function Card({ plans, id }) {
    // Check if plans and plans.week1 exist
    if (!plans || !plans[id]) {
        return <div className="text-red-500">Plans data is missing.</div>; // Fallback if plans is undefined or does not have the given id
    }

    return (
        <div>
            <div className="max-w-sm rounded-lg border border-gray-300 shadow-lg overflow-hidden">
                <img src={id === "4WeekPlan" ? week4 : week8} alt="Card image" className="w-full h-48 object-cover p-2" />

                <div className="p-4">
                    <h3 className="text-xl font-semibold ">{id}</h3>
                    <Link to={`/seeplan/${id}`}>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            See Plan
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
