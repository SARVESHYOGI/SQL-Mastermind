import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";


const SQLKit = () => {

    const plan = useSelector((state) => state.plan.plan);

    const me = plan.submittedInformation;
    console.log(plan);

    return (
        <>
            <Card plans={plan["4WeekPlan"]} />
            <Card plans={plan["8WeekPlan"]} />

        </>

    );
};

export default SQLKit;