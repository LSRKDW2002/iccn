import React from 'react';

const Upload = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-teal-500">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Upload Bukti Pembayaran</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Upload File</label>
                        <input
                            type="file"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <button
                        onClick={() => window.location.href = '/payment-status'}
                        className="w-full py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Upload;