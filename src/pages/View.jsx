import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Back from '../assets/back.svg';

const TaskDetails = () => {
    const accountData = [
        {
            taskId: '1084227031332',
            startedAt: 'John Doe',
            dataScrappedAt: '10/10/2024',
            nidVerifiedAt: '',
            accountUpdatedAt: '19:25',
            screenshot: 'Processed',
        },
    ];

    return (
        // Apply the background color to the whole view
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="mt-[80px] p-6">
                <div className="container mx-auto">
                    <div className="flex items-center mb-4">
                        {/* Example using a Unicode arrow for the back button */}
                        <button className="text-gray-600 hover:text-gray-800">
                        <img src={Back} alt="back arrow" className="w-8 h-8 mr-3" />
                        </button>
                        {/* If you prefer a FontAwesome icon, uncomment the following line and ensure you import FontAwesome */}
                        {/* <i className="fas fa-arrow-left text-gray-600 hover:text-gray-800"></i> */}
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
                                {accountData.map((account, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 font-medium text-left  whitespace-nowrap">
                                            {account.taskId}
                                        </td>
                                        <td className="py-3 px-6 font-medium text-left">
                                            {account.startedAt}
                                        </td>
                                        <td className="py-3 px-6 font-medium text-center">
                                            {account.dataScrappedAt}
                                        </td>
                                        <td className="py-3 px-6 font-medium text-center">
                                            {account.nidVerifiedAt}
                                        </td>
                                        <td className="py-3 px-6 font-medium text-center">
                                            {account.accountUpdatedAt}
                                        </td>
                                        <td className="py-3 px-6 font-medium text-center">
                                            {account.screenshot}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
