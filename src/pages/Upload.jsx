import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Upload = () => {
    const [fileName, setFileName] = useState("");
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = () => {
        if (fileName) {
            localStorage.setItem("isVerified", "pending"); // Simpan status menunggu verifikasi
            navigate("/home"); // Arahkan ke home
        } else {
            alert("Silakan upload file terlebih dahulu!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 p-6">
            <Navbar />
            <div className="w-full max-w-lg p-8 bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upload Bukti Pembayaran</h2>
                <p className="text-gray-600 mb-6">Unggah bukti pembayaran Anda untuk verifikasi</p>

                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300"
                >
                    <FiUploadCloud className="text-blue-500 text-5xl mb-2" />
                    <span className="text-gray-700">{fileName || "Klik untuk memilih file"}</span>
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                </label>

                <button
                    onClick={handleSubmit}
                    className="mt-6 w-full py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Upload;
