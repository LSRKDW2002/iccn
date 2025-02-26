import React from 'react';
import { useLocation } from 'react-router-dom';

const Invoice = () => {
    const location = useLocation();
    const { membershipData } = location.state || {};

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-teal-500">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Invoice</h1>
                <div className="space-y-4 text-gray-700">
                    <div>
                        <h2 className="text-lg font-semibold">Detail Membership</h2>
                        <p><strong>Nama:</strong> {membershipData?.personalName}</p>
                        <p><strong>Email:</strong> {membershipData?.email}</p>
                        <p><strong>Asal Pengguna:</strong> {membershipData?.userOrigin}</p>
                        <p><strong>Nama Institusi:</strong> {membershipData?.institutionName}</p>
                        <p><strong>Alamat:</strong> {membershipData?.address}</p>
                        <p><strong>Wilayah:</strong> {membershipData?.region}</p>
                        <p><strong>Nomor WA:</strong> {membershipData?.whatsappNumber}</p>
                    </div>
                    <div className="mt-6 text-gray-700">
                        <h2 className="text-lg font-semibold">Pembayaran</h2>
                        <p><strong>Jumlah:</strong> Rp 1.000.000</p>
                        <p><strong>Batas Pembayaran:</strong> 30 Hari dari Tanggal Invoice</p>
                    </div>
                    <button
                        onClick={() => window.location.href = '/payment'}
                        className="w-full py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                    >
                        Lanjut ke Pembayaran
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Invoice;