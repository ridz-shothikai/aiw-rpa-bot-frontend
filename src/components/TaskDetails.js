"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

const TaskDetails = () => {
    const router = useRouter();
    const { accountNumber } = router.query; // Access the dynamic route parameter

    // Dummy data; this would normally come from an API or database
    const accountData = [
        {
            taskId: '1084227031332',
            startedAt: 'John Doe',
            dataScrappedAt: '10/10/2024',
            nidVerifiedAt: '',
            accountUpdatedAt: '19:25',
            screenshot: 'Processed',
        },
        {
            taskId: '1084227031333',
            startedAt: 'Jane Smith',
            dataScrappedAt: '10/11/2024',
            nidVerifiedAt: '10/11/2024',
            accountUpdatedAt: '20:30',
            screenshot: 'Failed',
        },
        // Add more dummy data if needed
    ];

    // Find the account data based on the accountNumber parameter
    const account = accountData.find(acc => acc.taskId === accountNumber);

    if (!account) {
        return (
            <div className="bg-gray-200 min-h-screen">
                <Navbar />
                <div className="p-6 pt-[var(--navbar-height)]">
                    <div className="container mx-auto">
                        <div className="text-center text-red-500">
                            Account not found.
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="p-6 pt-[var(--navbar-height)]">
                <div className="container mx-auto">
                    <div className="flex items-center mb-4">
                        {/* Back button */}
                        <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() => router.back()} // Navigate back to the previous page
                        >
                            <img src="/assets/back.svg" alt="back arrow" className="w-8 h-8 mr-3" />
                        </button>
                    </div>
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-300">
                                <tr>
                                    <th className="py-3 px-6 text-left">Task Id</th>
                                    <th className="py-3 px-6 text-left">Started At</th>
                                    <th className="py-3 px-6 text-center">Data Scrapped At</th>
                                    <th className="py-3 px-6 text-center">Nid Verified At</th>
                                    <th className="py-3 px-6 text-center">Account Updated At</th>
                                    <th className="py-3 px-6 text-center">Screenshot</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm font-light">
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 font-medium text-left whitespace-nowrap">
                                        {account.taskId}
                                    </td>
                                    <td className="py-3 px-6 font-medium text-left">
                                        {account.startedAt}
                                    </td>
                                    <td className="py-3 px-6 font-medium text-center">
                                        {account.dataScrappedAt}
                                    </td>
                                    <td className="py-3 px-6 font-medium text-center">
                                        {account.nidVerifiedAt || 'N/A'}
                                    </td>
                                    <td className="py-3 px-6 font-medium text-center">
                                        {account.accountUpdatedAt}
                                    </td>
                                    <td className="py-3 px-6 font-medium text-center">
                                        {account.screenshot}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
