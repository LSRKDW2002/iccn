export default function ExpenseTable() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold dark:text-gray-100">Daftar Pengeluaran</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                    Tambah Pengeluaran
                </button>
            </div>

            <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Deskripsi</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Tanggal</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Jumlah</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3].map((item) => (
                        <tr key={item} className="border-t dark:border-gray-700">
                            <td className="py-3 px-4 dark:text-gray-300">Pembelian Alat</td>
                            <td className="py-3 px-4 dark:text-gray-300">12 Jan 2023</td>
                            <td className="py-3 px-4 dark:text-gray-300">Rp 1.000.000</td>
                            <td className="py-3 px-4">
                                <button className="text-blue-600 hover:underline mr-3 dark:text-blue-400">
                                    Edit
                                </button>
                                <button className="text-red-600 hover:underline dark:text-red-400">
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}