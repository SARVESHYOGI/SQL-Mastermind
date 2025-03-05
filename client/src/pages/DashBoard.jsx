import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SavedPlan from '../components/SavedPlan'

function DashBoard() {
    const [plans, setPlans] = useState(null);
    const getPlan = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token is missing");
                alert("You are not logged in. Please log in first.");
                return;
            }

            // Make GET request to fetch the plan data
            const response = await axios.get(
                "http://localhost:5000/plan/getplan",
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Log the response data
            console.log('Plan data:', response.data);  // Access response data
            console.log('Plan data:', typeof (response.data));  // Access response data
            setPlans(response.data);  // Set the plan data to the state variable
        } catch (error) {
            // Enhanced error handling
            if (error.response && error.response.status === 401) {
                alert("Session expired or invalid token. Please log in again.");
            } else {
                console.error('Error fetching plan data:', error);
                alert("An error occurred while fetching the plan data.");
            }
        }
    };

    // Fetch plan data when the component mounts
    useEffect(() => {
        getPlan();
    }, []);


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
                        {plans ? (<>
                            <SavedPlan plans={plans} />
                        </>) : (
                            <div className="text-center text-gray-500">
                                No plans generated yet
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard