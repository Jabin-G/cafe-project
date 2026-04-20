import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Register: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        alert("Registration successful!");
        navigate("/");
    };

    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center px-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-6 text-sm opacity-90">
                        To keep connected with us, please login with your personal info.
                    </p>

                    {/* <button
                        onClick={() => navigate("/login")}
                        className="px-8 py-2 border border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
                    >
                        SIGN IN
                    </button> */}
                </div>
            </div>

            {/* Right Panel (Create Account) */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                    Create Account
                </h2>

                {/* Social Login */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition">
                        <FaFacebookF className="text-blue-600" />
                    </button>
                    <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition">
                        <FcGoogle />
                    </button>
                    <button className="border border-gray-300 rounded-full p-3 hover:bg-gray-100 transition">
                        <FaLinkedinIn className="text-blue-700" />
                    </button>
                </div>

                <p className="text-gray-500 text-sm mb-4">
                    or use your email for registration:
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    {/* Name */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-400 transition duration-300"
                    >
                        SIGN UP
                    </button>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-blue-600 font-semibold hover:underline cursor-pointer transition-all duration-300"
                        >
                            Sign Up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
