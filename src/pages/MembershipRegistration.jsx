import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MembershipRegistration = () => {
    const [formData, setFormData] = useState({
        userType: "",
        institutionName: "",
        websiteLink: "",
        email: "",
        address: "",
        region: "",
        personalName: "",
        transferAmount: "", // Nilai dalam format rupiah untuk ditampilkan
        transferAmountRaw: "", // Simpan angka asli tanpa format
        whatsappNumber: "",
        receiptName: "",
        additionalReceiptName: "",
        documentFile: null,
        additionalRegistrations: "",
        whatsappGroupNumber: "", // No WhatsApp untuk grup
    });

    const navigate = useNavigate();
    const token = localStorage.getItem("authToken"); // Cek token dari localStorage

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, documentFile: e.target.files[0] });
    };

    const handleMoneyChange = (e) => {
        let rawValue = e.target.value.replace(/[^\d]/g, ""); // Hapus semua karakter non-digit

        // Jika nilai kosong, reset state
        if (!rawValue) {
            setFormData({
                ...formData,
                transferAmount: "",
                transferAmountRaw: ""
            });
            return;
        }

        // Format angka menggunakan Intl.NumberFormat
        const numericValue = parseInt(rawValue, 10);
        const formattedValue = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(numericValue);

        setFormData({
            ...formData,
            transferAmount: formattedValue,
            transferAmountRaw: rawValue
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/invoice", { state: { membershipData: formData } });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-500 p-8">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-6xl bg-white shadow-lg rounded-xl flex overflow-hidden"
            >
                {/* Bagian Kiri */}
                <div className="w-2/5 p-12 bg-blue-700 text-white flex flex-col justify-center">
                    <h2 className="text-4xl font-extrabold mb-4">Bergabung Sekarang!</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Daftarkan institusi atau perusahaan Anda dan dapatkan akses eksklusif ke komunitas kami!
                    </p>

                    {/* Hanya tampilkan tombol login jika user belum login */}
                    {!token && (
                        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
                            Sudah punya akun? Masuk
                        </button>
                    )}
                </div>

                {/* Bagian Kanan */}
                <div className="w-3/5 p-12">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                        Formulir Pendaftaran Membership
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Tipe Keanggotaan */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Tipe Keanggotaan</label>
                                <select name="userType" value={formData.userType} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300">
                                    <option value="">Pilih...</option>
                                    <option value="Universitas">Universitas</option>
                                    <option value="Perusahaan">Perusahaan</option>
                                    <option value="Individu">Individu/Pribadi</option>
                                </select>
                            </div>

                            {/* Nama Institusi */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nama Institusi / Perusahaan</label>
                                <input type="text" name="institutionName" value={formData.institutionName} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Masukkan nama institusi atau perusahaan Anda" />
                            </div>
                        </div>

                        {/* Link Website & Email */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Link Website</label>
                                <input type="text" name="websiteLink" value={formData.websiteLink} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="https://example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="contoh@email.com" />
                            </div>
                        </div>

                        {/* Alamat & Wilayah */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Alamat</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Alamat lengkap institusi/perusahaan" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Wilayah</label>
                                <input type="text" name="region" value={formData.region} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Provinsi/Kota" />
                            </div>
                        </div>

                        {/* Nama Personal */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Nama Personal</label>
                            <input type="text" name="personalName" value={formData.personalName} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Masukkan nama Anda" />
                        </div>

                        {/* Nama Kuitansi & Jumlah Transfer */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nama pada Kuitansi</label>
                                <input type="text" name="receiptName" value={formData.receiptName} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Nama yang muncul di kuitansi" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Jumlah Transfer</label>
                                <input
                                    type="text"
                                    name="transferAmount"
                                    value={formData.transferAmount}
                                    onChange={handleMoneyChange}
                                    className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
                                    placeholder="Rp 0"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* No WhatsApp untuk Grup */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Nomor WhatsApp untuk Grup</label>
                                <input type="text" name="whatsappGroupNumber" value={formData.whatsappGroupNumber} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Contoh: 081234567890" />
                            </div>

                            {/* Form Pendaftaran Tambahan (Opsional) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600">Pendaftaran Tambahan (Opsional)</label>
                                <input type="text" name="additionalRegistrations" value={formData.additionalRegistrations} onChange={handleChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" placeholder="Nama tambahan jika ada" />
                            </div>
                        </div>

                        {/* Upload File */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Upload Dokumen</label>
                            <input type="file" name="documentFile" onChange={handleFileChange} className="mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-300" />
                        </div>

                        <button className="w-full py-3 mt-6 text-white bg-blue-700 rounded-md hover:bg-teal-800 transition">
                            Daftar Sekarang
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default MembershipRegistration;
