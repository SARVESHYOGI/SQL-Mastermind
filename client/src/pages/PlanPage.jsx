import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PlanPage() {
    const { id } = useParams(); // This will get the dynamic part of the URL (either '4WeekPlan' or '8WeekPlan')
    const plan = useSelector((state) => state.plan.plan);

    // Ensure the plan exists
    if (!plan || !plan[id]) {
        return <div className="text-red-500">Plan not found.</div>;
    }

    // Get the selected plan (either '4WeekPlan' or '8WeekPlan')
    const selectedPlan = plan[id];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your {id}:</h2>
            <div>
                {Object.keys(selectedPlan).map((week) => (
                    <div key={week} className="mb-6">
                        <h3 className="text-xl font-semibold">{week}</h3>
                        <ul>
                            <li><strong>Topics Covered:</strong> {selectedPlan[week].topicsCovered.join(', ')}</li>
                            <li><strong>Exercises:</strong> {selectedPlan[week].exercises.join(', ')}</li>
                            <li><strong>Difficulty:</strong> {selectedPlan[week].difficultyLevel}</li>
                            <li><strong>Time Commitment:</strong> {selectedPlan[week].timeCommitment}</li>
                            <li><strong>Resources:</strong> {selectedPlan[week].resources.join(', ')}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlanPage;
