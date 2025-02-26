import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem("authToken");
            const user = JSON.parse(localStorage.getItem("userData"));

            if (token && user) {
                setIsLoggedIn(true);
                setUserData(user);
            } else {
                setIsLoggedIn(false);
                setUserData(null);
            }
        };

        checkLoginStatus();
        window.addEventListener("storage", checkLoginStatus);

        return () => window.removeEventListener("storage", checkLoginStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        setIsLoggedIn(false);
        setUserData(null);
        navigate("/");
    };

    const handleGetStarted = () => {
        if (isLoggedIn) {
            navigate("/member"); // Arahkan ke dashboard member jika sudah login
        } else {
            navigate("/login");
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-gradient-to-t from-gray-50 to-blue-600 min-h-screen">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 shadow-sm z-10">
                <nav className="container mx-auto flex justify-between items-center p-4">
                    <div className="text-4xl font-bold text-blue-700">ICCN</div>
                    <div>
                        <ul className="flex space-x-6 items-center">
                            <li>
                                <button onClick={() => scrollToSection("home")} className="text-blue-700 font-bold hover:text-cyan-300 hover:underline transition duration-300">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("services")} className="text-blue-700 font-bold hover:text-cyan-300 hover:underline transition duration-300">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("about")} className="text-blue-700 font-bold hover:text-cyan-300 hover:underline transition duration-300">
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("contact")} className="text-blue-700 font-bold hover:text-cyan-300 hover:underline transition duration-300">
                                    Contact Us
                                </button>
                            </li>
                            <li className="flex space-x-4">
                                <Link to="/register" className="bg-cyan-400 text-gray-200 px-4 py-2 rounded hover:bg-cyan-800 transition duration-300">
                                    Register
                                </Link>
                                <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                <section
                    id="home"
                    className="flex flex-col items-center justify-center h-screen text-gray-800 bg-[url('/path/to/hero-bg.jpg')] bg-cover bg-center"
                >
                    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl text-white font-bold text-center">
                        Welcome to ICCN
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-center text-gray-100"
                    >
                        Your journey starts here. Explore our services and get started today!
                    </motion.p>

                    {/* Tombol Get Started */}
                    <button onClick={handleGetStarted} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition duration-300">
                        Create Your Account Now!
                    </button>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
