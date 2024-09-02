"use client";
import React, { useState } from 'react';
import Navbar from "../../../components/Navbar";
import Modal from 'react-modal';
import Link from 'next/link'; // Import Link for navigation
import { MdOutlineArrowBack } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai"; // Import an eye icon for viewing
import { useCallApi } from '../../../lib/api';
import moment from 'moment';
import { Pagination, Popover } from 'antd';

// Modal.setAppElement('#__next'); // Ensure this element exists

const ErrorLogs = () => {
    const [page, setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
    const { data: logsData, isPending: isLogsPending, refetch: refetchLogs } = useCallApi(
        `api/report/error-logs?page=${page}&limit=20`,
        [`error-logs?page=${page}&limit=20`]
    );

    const diagnosisResults = [
        { name: 'Birth Portal', status: 'Failed' },
        { name: 'Bank Asia Portal', status: 'Failed' },
        { name: 'NID Portal', status: 'Failed' }
    ];

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const onChange = (page) => {
        setPage(page);
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
                                <th className="py-2 px-4 border-b text-center">Error Log</th>
                                <th className="py-2 px-4 border-b text-center">Error Screen</th> {/* New column */}
                            </tr>
                        </thead>
                        <tbody>
                            {logsData?.data?.map((log, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b text-center">
                                        {moment(log.updatedAt).format('DD/MM/YYYY, HH:mm:ss')}</td>
                                    <td className="py-2 px-4 border-b text-center max-w-96 truncate">
                                        <Popover
                                            content={() => (
                                                <div className="max-w-96">
                                                    {log.error_message}
                                                </div>
                                            )}
                                            placement="top"
                                            arrow={false}
                                        >
                                            {log.error_message}
                                        </Popover>
                                    </td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <button onClick={() => window.open(log?.error_image)}>
                                            <AiOutlineEye size={20} className="text-blue-500 hover:text-blue-700" />
                                        </button>
                                    </td> {/* Icon for viewing the error screen */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end pt-4'>
                    <Pagination current={page} onChange={onChange} pageSize={20} total={logsData?.pagination?.totalItems} showSizeChanger={false} />
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
