import React from 'react'
import { Link } from 'react-router-dom'

function DashBoard() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">My Plans</h1>
                </div>

                <div className="flex flex-col   items-stretch gap-6">
                    <div className="flex-1 bg-blue-50 border border-blue-100 rounded-lg p-4 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Generate New Plan
                        </h2>
                        <Link to="/questionnaire" className="block">
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                Create New Plan
                            </button>
                        </Link>
                    </div>

                    <div className="flex-1 bg-gray-50 border border-gray-100 rounded-lg p-4 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            My Generated Plans
                        </h2>
                        <div className="text-center text-gray-500">
                            No plans generated yet
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard