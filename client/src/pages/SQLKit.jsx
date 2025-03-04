import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const SQLKit = () => {
    // Get the plan from the Redux store
    const plan = useSelector((state) => state.plan.plan);

    // Ensure that the plan is available before rendering the cards
    if (!plan) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-wrap justify-center m-auto">
            {/* Card for the 4-Week Plan */}
            <div className="p-4">
                <Card plans={plan} id={"4WeekPlan"} />
            </div>

            {/* Card for the 8-Week Plan */}
            <div className="p-4">
                <Card plans={plan} id={"8WeekPlan"} />
            </div>
        </div>
    );
};

export default SQLKit;
