import React from 'react';

const Payment = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-teal-500">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Pembayaran</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Metode Pembayaran</label>
                        <select className="mt-1 block w-full p-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                            <option value="">Pilih Metode...</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="E-Wallet">E-Wallet</option>
                            <option value="Credit Card">Credit Card</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Nomor Rekening/Tujuan</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Masukkan nomor rekening/tujuan"
                        />
                    </div>
                    <button
                        onClick={() => window.location.href = '/upload'}
                        className="w-full py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                    >
                        Lanjut ke Upload Bukti Pembayaran
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;