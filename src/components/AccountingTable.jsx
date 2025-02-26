export default function AccountingTable() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6 dark:text-gray-100">Data Akunting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500 dark:text-gray-300">Total Aset</h4>
                    <p className="text-2xl font-bold mt-2 dark:text-gray-100">Rp 50.000.000</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500 dark:text-gray-300">Total Liabilitas</h4>
                    <p className="text-2xl font-bold mt-2 dark:text-gray-100">Rp 10.000.000</p>
                </div>
            </div>
        </div>
    );
}