import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import { FaUser, FaLock } from "react-icons/fa";

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
                if (data.message === "Username atau password salah") {
                    setError("Password / Usernam salah.");
                } else if (data.message === "Akun belum diverifikasi. Cek email!") {
                    setError("Akun ini belum memverifikasi email.");
                } else {
                    setError("Terjadi kesalahan. Silakan coba lagi.");
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Terjadi kesalahan pada server.");
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-700">
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-xl shadow-xl w-96 border border-white/30">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Login
                </h2>

                {error && (
                    <p className="text-red-400 text-center mb-4 text-sm">
                        {error}
                    </p>
                )}

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

                    <button
                        type="submit"
                        className="w-full py-2 text-white font-semibold bg-gradient-to-t from-blue-600 to-blue-400 rounded-lg hover:scale-105 transition-transform"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-white mt-4">
                    Belum punya akun?{" "}
                    <a href="/register" className="text-blue-700 font-bold hover:underline">
                        Daftar
                    </a>
                </p>
            </div>
        </div>
    );
}
