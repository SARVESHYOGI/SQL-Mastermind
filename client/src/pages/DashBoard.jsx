import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SavedPlan from '../components/SavedPlan'
import toast from 'react-hot-toast'
import Loading from '../components/Loading'

function DashBoard() {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPlan = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token is missing");
                alert("You are not logged in. Please log in first.");
                return;
            }

            // Make GET request to fetch the plan data
            const response = await axios.get("http://localhost:5000/plan/getplan", {
                headers: { Authorization: `Bearer ${token}` },
            });

            // Log and set plan data to state
            console.log('Plan data:', response.data);
            setPlans(response.data);  // Update state with the fetched plans
            setLoading(false) // Log plan data

        } catch (error) {
            // Enhanced error handling
            setLoading(false);
            if (error.response && error.response.status === 401) {
                alert("Session expired or invalid token. Please log in again.");
            } else {
                console.error('Error fetching plan data:', error);
                alert("An error occurred while fetching the plan data.");
            }
        }
    };

    const deleteplan = async (id) => {
        console.log('Deleting plan with ID:', id);

        try {
            setLoading(true);
            const response = await axios.delete(`http://localhost:5000/plan/deleteplan/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            // Log success and update state to remove the deleted plan
            console.log('Plan deleted:', response.data);
            setLoading(false);
            // Remove deleted plan from the state without re-fetching
            toast.success("Plan deleted successfully.");
            setPlans(prevPlans => prevPlans.filter(plan => plan._id !== id));
        } catch (err) {
            console.error('Error deleting plan:', err);
            setLoading(false);
            toast.error("Failed to delete plan. Please try again.");
        }
    };

    useEffect(() => {
        getPlan();
    }, []);

    if (loading) {
        return <div><Loading /></div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl text-white">
            <div className="bg-white shadow-md p-6 space-y-6 bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">My Plans</h1>
                </div>

                <div className="flex flex-col   items-stretch gap-6">
                    <div className="flex-1 bg-blue-50  p-4 shadow-sm bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                        <h2 className="text-lg font-semibold text-whitemb-4">
                            Generate New Plan
                        </h2>
                        <Link to="/questionnaire" className="block">
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                Create New Plan
                            </button>
                        </Link>
                    </div>

                    <div className="flex-1 bg-gray-50 p-4 shadow-sm bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                        <h2 className="text-lg font-semibold text-whitemb-4">
                            My Generated Plans
                        </h2>
                        {plans ? (<>
                            <SavedPlan deleteplan={deleteplan} plans={plans} />
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