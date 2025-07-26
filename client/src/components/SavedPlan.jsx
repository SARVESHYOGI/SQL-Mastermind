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
    return (
        <div className="space-y-4">
            {plans.map((plan, planIndex) => (
                <div >
                    <Accordion key={plan._id || planIndex} sx={{
                        backgroundColor: 'rgba(1, 1, 1, 0.1)', // Tailwind yellow-700 with opacity
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '0.375rem', // Tailwind rounded-md equivalent
                        marginBottom: '1rem',
                        '&:before': {
                            display: 'none', // Removes the default line before the accordion
                        },
                        color: 'white',


                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`plan-${planIndex}-content`}
                            id={`plan-${planIndex}-header`}

                        >
                            <div className="flex flex-col ">
                                <Typography color="white" variant="h6">Plan {planIndex + 1}</Typography>
                                <Typography color="white" variant="body2" >
                                    <strong>Experience:</strong> {plan.experience}
                                </Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* 4-Week Plan Section */}
                            <div className="mb-6">
                                <Typography color="white" variant="h5" gutterBottom>4-Week Plan</Typography>
                                {Object.keys(plan['4WeekPlan']).map((week) => (
                                    <Accordion key={`4week-${week}`} className="mb-2" sx={{
                                        backgroundColor: 'rgba(1, 1, 1, 0.1)', // Tailwind yellow-700 with opacity
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '0.375rem', // Tailwind rounded-md equivalent
                                        marginBottom: '1rem',
                                        '&:before': {
                                            display: 'none', // Removes the default line before the accordion
                                        },
                                        color: 'white',
                                    }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`4week-${week}-content`}
                                            id={`4week-${week}-header`}
                                        >
                                            <div className="flex justify-between w-full">
                                                <Typography color="white" component="span" sx={{ width: '33%', flexShrink: 0 }}>
                                                    {week}
                                                </Typography>
                                                <Typography color="white" component="span" >
                                                    <strong>Difficulty:</strong> {plan['4WeekPlan'][week].difficultyLevel}
                                                </Typography>
                                            </div>
                                        </AccordionSummary>

                                        <AccordionDetails>
                                            <ul className="space-y-2">
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
                                <Typography color="white" variant="h5" gutterBottom>8-Week Plan</Typography>
                                {Object.keys(plan['8WeekPlan']).map((week) => (
                                    <Accordion key={`8week-${week}`} className="mb-2" sx={{
                                        backgroundColor: 'rgba(1, 1, 1, 0.1)', // Tailwind yellow-700 with opacity
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '0.375rem', // Tailwind rounded-md equivalent
                                        marginBottom: '1rem',
                                        '&:before': {
                                            display: 'none', // Removes the default line before the accordion
                                        },
                                        color: 'white',

                                    }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`8week-${week}-content`}
                                            id={`8week-${week}-header`}
                                        >
                                            <div className="flex justify-between w-full">
                                                <Typography color="white" component="span" sx={{ width: '33%', flexShrink: 0 }}>
                                                    {week}
                                                </Typography>
                                                <Typography color="white" component="span" >
                                                    <strong>Difficulty:</strong> {plan['8WeekPlan'][week].difficultyLevel}
                                                </Typography>
                                            </div>
                                        </AccordionSummary>

                                        <AccordionDetails>
                                            <ul className="space-y-2">
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
                    </Accordion >

                    <button className='bg-red-800 px-1 rounded-lg' onClick={() => deleteplan(plan._id)}>Delete Plan {planIndex + 1}</button>
                    <button className='bg-blue-800 mx-2 px-1 rounded-lg' onClick={() => trackplan(plan._id)}>Track Plan {planIndex + 1}</button>
                </div >
            ))
            }
        </div >

    );
}

export default SavedPlan