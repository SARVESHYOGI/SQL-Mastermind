import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

function SavedPlan(props) {
    const { plans } = props;

    return (
        <div className="space-y-4">
            {plans.map((plan, planIndex) => (
                <Accordion key={plan._id || planIndex}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`plan-${planIndex}-content`}
                        id={`plan-${planIndex}-header`}
                    >
                        <div className="flex flex-col">
                            <Typography variant="h6">Plan {planIndex + 1}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Experience:</strong> {plan.experience}
                            </Typography>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        {/* 4-Week Plan Section */}
                        <div className="mb-6">
                            <Typography variant="h5" gutterBottom>4-Week Plan</Typography>
                            {Object.keys(plan['4WeekPlan']).map((week) => (
                                <Accordion key={`4week-${week}`} className="mb-2">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`4week-${week}-content`}
                                        id={`4week-${week}-header`}
                                    >
                                        <div className="flex justify-between w-full">
                                            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                                                {week}
                                            </Typography>
                                            <Typography component="span" color="text.secondary">
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
                            <Typography variant="h5" gutterBottom>8-Week Plan</Typography>
                            {Object.keys(plan['8WeekPlan']).map((week) => (
                                <Accordion key={`8week-${week}`} className="mb-2">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`8week-${week}-content`}
                                        id={`8week-${week}-header`}
                                    >
                                        <div className="flex justify-between w-full">
                                            <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                                                {week}
                                            </Typography>
                                            <Typography component="span" color="text.secondary">
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
                </Accordion>
            ))}
        </div>
    );
}

export default SavedPlan