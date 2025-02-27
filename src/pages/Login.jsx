import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.status === 403 && data.is_verified === 0) {
                setError("Akun ini belum memverifikasi email.");
                return;
            }

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.role || "member");
                navigate("/home");
            } else {
                setError(data.message || "Terjadi kesalahan. Silakan coba lagi.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Terjadi kesalahan pada server.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400">
            <Navbar />

            <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center h-screen"
            >
                <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl w-96 border border-white/30">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>

                    {error && <p className="text-red-400 text-center mb-4 text-sm">{error}</p>}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:shadow-lg transition-transform"
                        >
                            Login
                        </motion.button>
                    </form>

                    <p className="text-center text-white mt-4">
                        Belum punya akun?{" "}
                        <a href="/register" className="text-blue-300 font-bold hover:underline">Daftar</a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}