import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function SavedPlan(props) {
    const { plans, deleteplan, trackplan } = props;
    // const white = 'white';
    console.log(plans);
    const [confirmDeleteId, setConfirmDeleteId] = React.useState(null);

    const handleDelete = (planId) => {
        setConfirmDeleteId(planId);
    };

    const confirmDelete = () => {
        if (confirmDeleteId) {
            deleteplan(confirmDeleteId);
            setConfirmDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setConfirmDeleteId(null);
    };

    return (
        <div className="space-y-6 px-4 py-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg">
            {plans.map((plan, planIndex) => (
                <div key={plan._id || planIndex} className="rounded-xl shadow-md bg-black/30 backdrop-blur-md border border-white/20 p-4 mb-6">
                    <Accordion sx={{
                        backgroundColor: 'rgba(30, 41, 59, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.75rem',
                        marginBottom: '1rem',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                        '&:before': { display: 'none' },
                        color: 'white',
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls={`plan-${planIndex}-content`}
                            id={`plan-${planIndex}-header`}
                        >
                            <div className="flex flex-col gap-1">
                                <Typography color="white" variant="h6" sx={{ fontWeight: 700 }}>
                                    Plan {planIndex + 1}
                                </Typography>
                                <Typography color="white" variant="body2">
                                    <strong>Experience:</strong> {plan.experience}
                                </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* 4-Week Plan Section */}
                            <div className="mb-6">
                                <Typography color="white" variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                                    4-Week Plan
                                </Typography>
                                {Object.keys(plan['4WeekPlan']).map((week) => (
                                    <Accordion key={`4week-${week}`} sx={{
                                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        borderRadius: '0.5rem',
                                        marginBottom: '0.75rem',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                                        '&:before': { display: 'none' },
                                        color: 'white',
                                    }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                            aria-controls={`4week-${week}-content`}
                                            id={`4week-${week}-header`}
                                        >
                                            <div className="flex justify-between w-full items-center">
                                                <Typography color="white" component="span" sx={{ fontWeight: 500 }}>
                                                    {week}
                                                </Typography>
                                                <Typography color="white" component="span">
                                                    <strong>Difficulty:</strong> {plan['4WeekPlan'][week].difficultyLevel}
                                                </Typography>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul className="space-y-2 text-white/90 text-sm pl-2">
                                                <li><strong>Topics Covered:</strong> {plan['4WeekPlan'][week].topicsCovered.join(', ')}</li>
                                                <li><strong>Exercises:</strong> {plan['4WeekPlan'][week].exercises.join(', ')}</li>
                                                <li><strong>Time Commitment:</strong> {plan['4WeekPlan'][week].timeCommitment}</li>
                                                <li><strong>Resources:</strong> {plan['4WeekPlan'][week].resources.join(', ')}</li>
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                            {/* 8-Week Plan Section */}
                            <div>
                                <Typography color="white" variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                                    8-Week Plan
                                </Typography>
                                {Object.keys(plan['8WeekPlan']).map((week) => (
                                    <Accordion key={`8week-${week}`} sx={{
                                        backgroundColor: 'rgba(30, 41, 59, 0.6)',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255, 255, 255, 0.15)',
                                        borderRadius: '0.5rem',
                                        marginBottom: '0.75rem',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                                        '&:before': { display: 'none' },
                                        color: 'white',
                                    }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                            aria-controls={`8week-${week}-content`}
                                            id={`8week-${week}-header`}
                                        >
                                            <div className="flex justify-between w-full items-center">
                                                <Typography color="white" component="span" sx={{ fontWeight: 500 }}>
                                                    {week}
                                                </Typography>
                                                <Typography color="white" component="span">
                                                    <strong>Difficulty:</strong> {plan['8WeekPlan'][week].difficultyLevel}
                                                </Typography>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ul className="space-y-2 text-white/90 text-sm pl-2">
                                                <li><strong>Topics Covered:</strong> {plan['8WeekPlan'][week].topicsCovered.join(', ')}</li>
                                                <li><strong>Exercises:</strong> {plan['8WeekPlan'][week].exercises.join(', ')}</li>
                                                <li><strong>Time Commitment:</strong> {plan['8WeekPlan'][week].timeCommitment}</li>
                                                <li><strong>Resources:</strong> {plan['8WeekPlan'][week].resources.join(', ')}</li>
                                            </ul>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <div className="flex gap-3 mt-2">
                        <button
                            className="bg-red-700 hover:bg-red-800 text-white px-3 py-1 rounded-lg shadow transition"
                            onClick={() => handleDelete(plan._id)}
                        >
                            Delete Plan {planIndex + 1}
                        </button>
                        <button
                            className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg shadow transition"
                            onClick={() => trackplan(plan._id)}
                        >
                            Track Plan {planIndex + 1}
                        </button>
                    </div>
                </div>
            ))}
            {/* Confirmation Popup */}
            {confirmDeleteId && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-gray-900 rounded-xl p-6 shadow-xl border border-white/20 text-white">
                        <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
                        <p className="mb-6">Are you sure you want to delete this plan?</p>
                        <div className="flex gap-4 justify-end">
                            <button
                                className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg"
                                onClick={confirmDelete}
                            >
                                Yes, Delete
                            </button>
                            <button
                                className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
                                onClick={cancelDelete}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SavedPlan