import React from "react";
import { useLocation } from "react-router-dom";

const SQLKit = () => {
    const location = useLocation();
    const plan = location.state?.plan || "No plan generated";


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your SQL Prep Plan</h1>
            <pre className="bg-gray-100 p-4 rounded">{plan}</pre>
        </div>
    );
};

export default SQLKit;