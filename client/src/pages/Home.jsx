import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleclick = () => {
        if (!token) {
            navigate('/auth/login');
        } else {
            navigate('/dashboard');
        }
    }
    return (
        <div>

            <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">

                <img src="/image.png" className="absolute top-0 left-0 min-h-full object-cover w-full" alt="" />

                <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-12 h-full items-center px-4 md:px-8">
                    <div className="col-span-1 md:col-span-6 text-center md:text-left">
                        <span className="uppercase text-white text-xs font-bold mb-2 block">
                            PERSONALIZED LEARNING FOR ANY SUBJECT
                        </span>

                        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
                            AI-Powered Study Plans for Every Learner
                        </h1>

                        <p className="text-stone-100 text-base sm:text-lg leading-relaxed">
                            Learning new subjects can feel overwhelming — whether you're preparing for software engineering interviews, mastering computer science fundamentals, or exploring completely new domains like math, cloud, or data engineering.
                        </p>

                        <p className="text-stone-100 text-base sm:text-lg mt-4 leading-relaxed">
                            Our AI-powered platform creates a fully personalized learning roadmap for any subject you choose.
                            Just answer a few simple questions about your goals, experience level, and timelines, and we generate a complete study plan tailored specifically for you.
                        </p>

                        <button
                            onClick={handleclick}
                            className="mt-6 sm:mt-8 mr-0 sm:mr-4 w-full sm:w-auto text-white uppercase py-3 sm:py-4 text-sm sm:text-base font-light px-8 sm:px-10 border border-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Home