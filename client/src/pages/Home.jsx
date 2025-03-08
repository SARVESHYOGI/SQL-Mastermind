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
                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/300/420/small_2x/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter-background-concept-of-database-server-sql-data-storage-database-diagram-design-3d-illustration-photo.jpg" className="absolute top-0 left-0 min-h-full ob bg-cover w-full" alt="" />

                <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
                    <div className="col-span-6">
                        <span className="uppercase text-white text-xs font-bold mb-2 block">TAILORED SQL INTERVIEW PREPARATION</span>

                        <h1 className="text-white font-extrabold text-5xl mb-8">AI-Powered SQL Interview Plans</h1>

                        <p className="text-stone-100 text-base">
                            Preparing for an SQL interview can be challenging. Whether you’re aiming for top tech companies or working on improving your skills, you need a customized study plan based on your experience and target goals.
                        </p>

                        <p className="text-stone-100 text-base mt-4">
                            Our AI-powered tool generates a personalized SQL interview preparation plan just for you. By answering a simple questionnaire, you can get a roadmap tailored to your experience level, the companies you're targeting, and the areas you need to improve.
                        </p>

                        <button onClick={handleclick} className="mt-8 mr-4 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10">
                            Get Started
                        </button>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home