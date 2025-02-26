export default function FinanceReport() {
    // Data dummy untuk history transaksi
    const transactions = [
        {
            id: 1,
            date: '2023-10-01 14:30',
            status: 'Sukses',
            amount: 'Rp 1.500.000',
        },
        {
            id: 2,
            date: '2023-10-02 09:15',
            status: 'Pending',
            amount: 'Rp 750.000',
        },
        {
            id: 3,
            date: '2023-10-03 16:45',
            status: 'Gagal',
            amount: 'Rp 2.000.000',
        },
        {
            id: 4,
            date: '2023-10-04 11:20',
            status: 'Sukses',
            amount: 'Rp 1.000.000',
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6 dark:text-gray-100">Laporan Keuangan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Card Pendapatan */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500 dark:text-gray-300">Pendapatan Bulan Ini</h4>
                    <p className="text-2xl font-bold mt-2 dark:text-gray-100">Rp 12.345.000</p>
                </div>

                {/* Card Pengeluaran */}
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500 dark:text-gray-300">Pengeluaran Bulan Ini</h4>
                    <p className="text-2xl font-bold mt-2 dark:text-gray-100">Rp 3.210.000</p>
                </div>
            </div>

            {/* History Transaksi */}
            <div>
                <h3 className="text-lg font-semibold mb-6 dark:text-gray-100">History Transaksi</h3>
                <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Tanggal & Waktu</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Jumlah Pembayaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-t dark:border-gray-700">
                                <td className="py-3 px-4 dark:text-gray-300">{transaction.date}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${transaction.status === 'Sukses'
                                            ? 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200'
                                            : transaction.status === 'Pending'
                                                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200'
                                                : 'bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200'
                                        }`}>
                                        {transaction.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 dark:text-gray-300">{transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}