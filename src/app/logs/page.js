"use client";
import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Modal from 'react-modal';

//Modal.setAppElement('#__next'); // Ensure this element exists

const ErrorLogs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const logs = [
        { date: '2024-08-18', time: '19:45:04', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]' },
        { date: '2024-08-18', time: '19:43:54', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]' },
        { date: '2024-08-18', time: '19:41:42', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]' },
        { date: '2024-08-18', time: '19:40:23', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]' },
        { date: '2024-08-18', time: '19:38:14', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]' },
        { date: '2024-08-18', time: '19:36:22', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]' },
    ];

    const diagnosisResults = [
        { name: 'Birth Portal', status: 'Failed' },
        { name: 'Bank Asia Portal', status: 'Failed' },
        { name: 'NID Portal', status: 'Failed' }
    ];

    return (
        <div>
            <Navbar />

            <div className="container mx-auto p-4 mt-10">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Error Logs</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Diagnose
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Time</th>
                                <th className="py-2 px-4 border-b">Source</th>
                                <th className="py-2 px-4 border-b">Reason</th>
                                <th className="py-2 px-4 border-b">Error Log</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{log.date}</td>
                                    <td className="py-2 px-4 border-b">{log.time}</td>
                                    <td className="py-2 px-4 border-b">{log.source}</td>
                                    <td className="py-2 px-4 border-b">{log.reason}</td>
                                    <td className="py-2 px-4 border-b">{log.errorLog}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="bg-white rounded-lg shadow-lg max-w-md mx-auto my-16 p-6 outline-none"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Diagnosis Status</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>
                <div className="mb-4">
                    {diagnosisResults.map((result, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                                <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-gray-700 font-semibold">{result.name}</p>
                                <p className="text-red-500">{result.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center text-gray-600">Diagnosis Completed!</div>
            </Modal>
        </div>
    );
}

export default ErrorLogs;
