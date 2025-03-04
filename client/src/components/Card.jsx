import React from 'react';
import { Link } from 'react-router-dom';

function Card({ plans, id }) {
    // Check if plans and plans.week1 exist
    if (!plans || !plans[id]) {
        return <div className="text-red-500">Plans data is missing.</div>; // Fallback if plans is undefined or does not have the given id
    }

    return (
        <div>
            <div className="max-w-sm rounded-lg border border-gray-300 shadow-lg overflow-hidden">
                <img src="https://imgs.search.brave.com/ah-41A0LDgHkYGnNEoEDN5DE07ufMbjeNPaAokX6NKE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/NjQwcHgtSW1hZ2Vf/Y3JlYXRlZF93aXRo/X2FfbW9iaWxlX3Bo/b25lLnBuZw" alt="Card image" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{id}</h3>
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
