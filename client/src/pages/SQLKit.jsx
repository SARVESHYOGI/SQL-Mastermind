import React, { useState } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

const SQLKit = () => {
    // Get the plan from the Redux store
    const plan = useSelector((state) => state.plan.plan);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    if (!plan) {
        return <div><Loading /></div>;
    }

    const addplan = () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        // Retrieve token from localStorage
        const token = localStorage.getItem('token'); // Or any other storage mechanism

        if (!token) {
            setError('Unauthorized. Please log in.');
            setLoading(false);
            return;
        }

        // Add the token to the Authorization header
        axios.post("https://ai-powered-sql-prep.onrender.com/plan/saveplan", { plan }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((res) => {
                console.log(res.data);
                setSuccess(true);
                setLoading(false);
                toast.success("Plan added to database successfully!");
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to save plan.");
                setLoading(false);
                toast.error("Failed to save plan.");
            });
    };

    if (loading) {
        return <Loading />; // Show loading component when the form is submitting
    }

    return (
        <div className="flex flex-wrap flex-col justify-center m-auto items-center text-white">
            <h1 className="text-2xl font-bold mb-4">Your New SQL Learning Plan for</h1>

            {/* Render the submitted information */}
            <div className="flex flex-wrap justify-center m-auto items-center text-white w-full max-w-4xl">
                <div className="grid grid-cols-2 gap-4 w-full">
                    {plan.submittedInformation && Object.keys(plan.submittedInformation).map((key, index) => (
                        <div key={key} className="shadow-md p-1 space-y-6 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                            <strong>{key}:</strong> {plan.submittedInformation[key]}
                        </div>
                    ))}
                </div>
            </div>

            {/* Render the 4-Week and 8-Week Plans */}
            <div className="flex flex-wrap justify-center m-auto items-center text-white">
                <div className="p-4">
                    <Card plans={plan} id={"4WeekPlan"} />
                </div>

                <div className="p-4">
                    <Card plans={plan} id={"8WeekPlan"} />
                </div>
            </div>

            {/* Success/Error Messages */}
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
    );
};

export default SQLKit;
