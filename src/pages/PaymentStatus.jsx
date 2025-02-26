import React from 'react';

const PaymentStatus = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-teal-500">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Status Pembayaran</h1>
                <div className="space-y-4">
                    <p className="text-center text-gray-700">Pembayaran Anda sedang diproses. Kami akan mengirimkan konfirmasi via email dan WhatsApp.</p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                    >
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentStatus;