export default function MemberTable() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold dark:text-gray-100">Daftar Member Baru</h3>
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Cari member..."
                        className="border rounded-lg px-4 py-2 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                        Filter
                    </button>
                </div>
            </div>

            <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Nama</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Tanggal Daftar</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3].map((item) => (
                        <tr key={item} className="border-t dark:border-gray-700">
                            <td className="py-3 px-4 dark:text-gray-300">John Doe</td>
                            <td className="py-3 px-4 dark:text-gray-300">12 Jan 2023</td>
                            <td className="py-3 px-4">
                                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs dark:bg-yellow-800 dark:text-yellow-200">
                                    Pending
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <button className="text-blue-600 hover:underline mr-3 dark:text-blue-400">
                                    Detail
                                </button>
                                <button className="text-green-600 hover:underline dark:text-green-400">
                                    Aktifkan
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}