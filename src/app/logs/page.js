"use client";
import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Modal from 'react-modal';
import Link from 'next/link'; // Import Link for navigation
import { MdOutlineArrowBack } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai"; // Import an eye icon for viewing

const ErrorLogs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const logsPerPage = 10; // Number of logs per page

    const logs = [
        { date: '2024-08-18', time: '19:45:04', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image1.png' },
        { date: '2024-08-18', time: '19:43:54', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image2.png' },
        { date: '2024-08-18', time: '19:41:42', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image3.png' },
        // Add more logs as needed
        { date: '2024-08-18', time: '19:45:04', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image1.png' },
        { date: '2024-08-18', time: '19:43:54', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image2.png' },
        { date: '2024-08-18', time: '19:41:42', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image3.png' },
        { date: '2024-08-18', time: '19:45:04', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image1.png' },
        { date: '2024-08-18', time: '19:43:54', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image2.png' },
        { date: '2024-08-18', time: '19:41:42', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image3.png' },
        { date: '2024-08-18', time: '19:45:04', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image1.png' },
        { date: '2024-08-18', time: '19:43:54', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image2.png' },
        { date: '2024-08-18', time: '19:41:42', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image3.png' },
        { date: '2024-08-18', time: '19:45:04', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image1.png' },
        { date: '2024-08-18', time: '19:43:54', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image2.png' },
        { date: '2024-08-18', time: '19:41:42', source: 'Bank Portal/Lister', reason: 'Error occurred while applying ...', errorLog: 'Unable to locate element: //*[...]', screenshot: '/path/to/image3.png' },

    ];

    const diagnosisResults = [
        { name: 'Birth Portal', status: 'Failed' },
        { name: 'Bank Asia Portal', status: 'Failed' },
        { name: 'NID Portal', status: 'Failed' }
    ];

    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const handleNextPage = () => {
        if (currentPage * logsPerPage < logs.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen"> {/* Set background color */}
            <Navbar />

            <div className="container mx-auto p-4 mt-10">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/">
                        <button className="bg-white hover:bg-gray-300 py-2 px-4 rounded">
                            <MdOutlineArrowBack size={25} />
                        </button>
                    </Link>

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
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="py-2 px-4 border-b text-center">Date</th>
                                <th className="py-2 px-4 border-b text-center">Time</th>
                                <th className="py-2 px-4 border-b text-center">Source</th>
                                <th className="py-2 px-4 border-b text-center">Reason</th>
                                <th className="py-2 px-4 border-b text-center">Error Log</th>
                                <th className="py-2 px-4 border-b text-center">Error Screen</th> {/* New column */}
                            </tr>
                        </thead>
                        <tbody>
                            {currentLogs.map((log, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b text-center">{log.date}</td>
                                    <td className="py-2 px-4 border-b text-center">{log.time}</td>
                                    <td className="py-2 px-4 border-b text-center">{log.source}</td>
                                    <td className="py-2 px-4 border-b text-center">{log.reason}</td>
                                    <td className="py-2 px-4 border-b text-center">{log.errorLog}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <button onClick={() => openImageModal(log.screenshot)}>
                                            <AiOutlineEye size={20} className="text-blue-500 hover:text-blue-700" />
                                        </button>
                                    </td> {/* Icon for viewing the error screen */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-end mt-4 items-center">
                    <button
                        onClick={handlePrevPage}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l disabled:opacity-50"
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    <span className="px-4 py-2 text-gray-700 font-semibold">
                        {currentPage} of {Math.ceil(logs.length / logsPerPage)}
                    </span>
                    <button
                        onClick={handleNextPage}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r ml-1 disabled:opacity-50"
                        disabled={currentPage * logsPerPage >= logs.length}
                    >
                        Next
                    </button>
                </div>


            </div>

            {/* Modal Component for Diagnoses */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="bg-white rounded-lg shadow-lg max-w-md mx-auto my-16 p-6 outline-none"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{selectedImage ? 'Error Screen' : 'Diagnosis Status'}</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-800">&times;</button>
                </div>

                {selectedImage ? (
                    <img src={selectedImage} alt="Error Screen" className="w-full h-auto mb-4" />
                ) : (
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
                )}

                {!selectedImage && <div className="text-center text-gray-600">Diagnosis Completed!</div>}
            </Modal>
        </div>
    );
}

export default ErrorLogs;
