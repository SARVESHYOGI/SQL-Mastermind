import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlan } from "../store/planSlice";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import { BACKENDURL } from "../App";
import { motion, AnimatePresence } from "framer-motion";

const questionVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
};

const progressBarVariants = {
    initial: { width: "0%" },
    animate: { width: "100%" },
};

const Questionnaire = () => {
    const [loading, setLoading] = useState(false);
    const [fetchingForm, setFetchingForm] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [direction, setDirection] = useState(1);
    const [formFields, setFormFields] = useState([]);
    const [topic, setTopic] = useState("");
    const [started, setStarted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        getValues,
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleStart = async () => {
        if (!topic || topic.trim() === "") {
            toast.error("Please enter a topic to continue.");
            return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("You are not logged in. Please log in first.");
            return;
        }

        try {
            setFetchingForm(true);
            const response = await axios.post(
                `${BACKENDURL}/plan/generatequestion`,
                { topic: topic.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const fields = response.data;
            if (!Array.isArray(fields) || fields.length === 0) {
                toast.error("No questions were returned for this topic. Try another topic.");
                setFetchingForm(false);
                return;
            }

            const planDurationField = {
                name: "userPlanDuration",
                label: "How long do you want your learning plan to be? (e.g., 4 weeks, 2 months)",
                type: "text",
                placeholder: "Enter duration in weeks",
                required: true
            };
            setFormFields([...fields, planDurationField]);

            setStarted(true);
            setCurrentQuestion(0);
        } catch (error) {
            console.error("Error fetching form fields:", error?.response?.data || error.message);
            toast.error("Failed to fetch questions. Try again.");
        } finally {
            setFetchingForm(false);
        }
    };

    const handleNext = async () => {
        const fieldName = formFields[currentQuestion].name;
        const isValid = await trigger(fieldName);

        if (isValid) {
            setDirection(1);
            setCurrentQuestion((prev) => Math.min(prev + 1, formFields.length - 1));
        }
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    };

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("You are not logged in. Please log in first.");
                setLoading(false);
                return;
            }

            const payload = {
                userQuestionAnswerResponse: {
                    formFields,
                    formValues: data,
                },
            };
            console.log(payload);
            const response = await axios.post(`${BACKENDURL}/plan/generate-plan`, payload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(response);
            dispatch(setPlan(response.data));
            navigate("/generatedplans");
            toast.success("Plan generated successfully");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            toast.error("Failed to generate plan");
        } finally {
            setLoading(false);
        }
    };

    if (loading || fetchingForm) {
        return <Loading />;
    }

    if (!started) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
                <div className="w-full max-w-xl bg-gray-800 p-6 rounded-md shadow">
                    <h1 className="text-2xl text-blue-300 font-semibold mb-4">What do you want to learn?</h1>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Data Structures, Operating Systems, JavaScript"
                        className="w-full bg-gray-700 rounded-md text-white py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={handleStart}
                            className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                            Start
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (!formFields || formFields.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <p className="text-gray-300">No form fields available. Try another topic.</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900"
        >
            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="h-2 bg-gray-700 rounded-full mb-8 overflow-hidden">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={progressBarVariants}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-blue-500"
                        style={{
                            width: `${((currentQuestion + 1) / formFields.length) * 100}%`,
                        }}
                    />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative h-96 overflow-hidden">
                        <AnimatePresence custom={direction}>
                            <motion.div
                                key={currentQuestion}
                                custom={direction}
                                variants={questionVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-lg"
                            >
                                <h2 className="text-xl font-semibold mb-6 text-center text-blue-400">
                                    {formFields[currentQuestion].label}
                                </h2>

                                {formFields[currentQuestion].type === "select" ? (
                                    <select
                                        {...register(formFields[currentQuestion].name, {
                                            required:
                                                formFields[currentQuestion].required && "This field is required",
                                        })}
                                        className="w-full bg-gray-700 rounded-md text-white py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        defaultValue={getValues(formFields[currentQuestion].name) || ""}
                                    >
                                        <option value="">Select an option</option>
                                        {(formFields[currentQuestion].options || []).map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={
                                            formFields[currentQuestion].type === "number"
                                                ? "number"
                                                : formFields[currentQuestion].type === "email"
                                                    ? "email"
                                                    : "text"
                                        }
                                        {...register(formFields[currentQuestion].name, {
                                            required:
                                                formFields[currentQuestion].required && "This field is required",
                                        })}
                                        className="w-full bg-gray-700 rounded-md text-white py-3 px-4 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder={formFields[currentQuestion].placeholder || ""}
                                        defaultValue={getValues(formFields[currentQuestion].name) || ""}
                                    />
                                )}

                                {errors[formFields[currentQuestion].name] && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mb-4">
                                        {errors[formFields[currentQuestion].name].message}
                                    </motion.p>
                                )}

                                <div className="flex justify-between w-full mt-6">
                                    <motion.button
                                        type="button"
                                        onClick={handlePrev}
                                        disabled={currentQuestion === 0}
                                        className={`px-6 py-2 rounded-md ${currentQuestion === 0 ? "bg-gray-600 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600"
                                            }`}
                                        whileHover={currentQuestion > 0 ? { scale: 1.05 } : {}}
                                        whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}}
                                    >
                                        Back
                                    </motion.button>

                                    {currentQuestion < formFields.length - 1 ? (
                                        <motion.button
                                            type="button"
                                            onClick={async () => {
                                                const ok = await trigger(formFields[currentQuestion].name);
                                                if (ok) handleNext();
                                            }}
                                            className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Next
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            type="submit"
                                            className="px-6 py-2 bg-green-600 rounded-md hover:bg-green-700"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Submit
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </form>

                <div className="text-center mt-4 text-gray-400">
                    Question {currentQuestion + 1} of {formFields.length}
                </div>
            </div>
        </motion.div>
    );
};

export default Questionnaire;
