import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/auth/login",
                { email, password },
                { withCredentials: true }
            );
            console.log("Login Response:", response.data);

            // Ensure the token is being extracted correctly
            const token = response.data.data.token;
            console.log("Token extracted:", token);

            // Store the token in localStorage
            localStorage.setItem("token", token);
            console.log("Token stored in localStorage:", localStorage.getItem("token")); // Log stored token

            navigate("/questionnaire");
        } catch (error) {
            console.error("Login Error:", error.response ? error.response.data : error.message);
            alert("Login failed");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border-2 border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border-2 border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
                <div>Dont have account ? <span><Link to="/auth/register">Register</Link></span></div>
            </div>
        </div>

    );
};

export default Login;