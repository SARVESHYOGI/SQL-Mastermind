import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            setLoading(true);
            await axios.post("http://localhost:5000/auth/register", { name, email, password });
            setLoading(false);
            toast.success("Registration successful");
            navigate("/auth/login");
        } catch (error) {
            setLoading(false);
            toast.error("Registration failed");
        }
    };

    if (loading) {
        return <div><Loading /></div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-100 bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
            <div className="w-full max-w-sm p-8 bg-white  shadow-md bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Register</h1>

                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white py-2 px-2 m-2  focus:ring-2 focus:ring-blue-500 outline-none" value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white py-2 px-2 m-2  focus:ring-2 focus:ring-blue-500 outline-none" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white py-2 px-2 m-2  focus:ring-2 focus:ring-blue-500 outline-none" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleRegister}
                    className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
                >
                    Register
                </button>
                <div className="text-white">Allready have an account? <Link className="text-blue-300" to="/auth/login">Login</Link></div>
            </div>
        </div>

    );
};

export default Register;