import React, { useState } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import axios from "axios";

const SQLKit = () => {
    // Get the plan from the Redux store
    const plan = useSelector((state) => state.plan.plan);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Ensure that the plan is available before rendering the cards
    if (!plan) {
        return <div>Loading...</div>;
    }
    const addplan = () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Retrieve token from localStorage (or wherever you store it)
        const token = localStorage.getItem('token'); // Or any other storage mechanism

        // Check if the token is available
        if (!token) {
            setError('Unauthorized. Please log in.');
            setLoading(false);
            return;
        }

        // Add the token to the Authorization header
        axios.post("http://localhost:5000/plan/saveplan", { plan }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((res) => {
                console.log(res.data);
                setSuccess(true);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to save plan.");
                setLoading(false);
            });
    };

    return (
        <div className="flex flex-wrap flex-col justify-center m-auto items-center text-white">
            <h1 className="text-2xl font-bold mb-4">Your SQL Learning Plan for</h1>

            <div className="flex flex-wrap justify-center m-auto items-center text-white w-full max-w-4xl">
                <div className="grid grid-cols-2 gap-4 w-full">
                    {
                        plan.submittedInformation && Object.keys(plan.submittedInformation).map((key, index) => {
                            return (
                                <div key={key} className=" shadow-md p-1 space-y-6 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
                                    <strong>{key}:</strong> {plan.submittedInformation[key]}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="flex flex-wrap justify-center m-auto items-center text-white">

                {/* Card for the 4-Week Plan */}
                <div className="p-4">
                    <Card plans={plan} id={"4WeekPlan"} />
                </div>

                {/* Card for the 8-Week Plan */}
                <div className="p-4">
                    <Card plans={plan} id={"8WeekPlan"} />
                </div>
            </div>

            <div>
                {/* Success/Error Message */}
                {success && <div className="text-green-500">Plan saved successfully!</div>}
                {error && <div className="text-red-500">{error}</div>}

                {/* Add Plan Button */}
                <button
                    className="text-white border bg-green-500 p-2 rounded-lg"
                    onClick={addplan}
                    disabled={loading}
                >
                    {loading ? "Saving..." : "Add Plan to DB"}
                </button>
            </div>
        </div>
    );
};

export default SQLKit;
