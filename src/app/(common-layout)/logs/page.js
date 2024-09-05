"use client";
import React, { useState } from 'react';
import Navbar from "../../../components/Navbar";
import Modal from 'react-modal';
import Link from 'next/link'; // Import Link for navigation
import { MdOutlineArrowBack } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai"; // Import an eye icon for viewing
import { useCallApi } from '../../../lib/api';
import moment from 'moment';
import { Button, Pagination, Popover, Spin } from 'antd';
import { IoMdCheckmark } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

// Modal.setAppElement('#__next'); // Ensure this element exists

const ErrorLogs = () => {
    const [page, setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const { data: logsData, isPending: isLogsPending, refetch: refetchLogs } = useCallApi(
        `api/report/error-logs?page=${page}&limit=20`,
        [`error-logs?page=${page}&limit=20`]
    );
    const { data: bankStatus, isPending: isBankStatusPending, refetch: refetchBankStatus } = useCallApi(
        `api/report/bank-asia-server-status`,
        [`/report/bank-asia-server-status`]
    );
    const { data: nidStatus, isPending: isNidStatusPending, refetch: refetchNidStatus } = useCallApi(
        `api/report/nid-server-status`,
        [`/report/nid-server-status`]
    );
    const { data: botStatus, isPending: isBotStatusPending, refetch: refetchBotStatus } = useCallApi(
        `api/report/bot-server-status`,
        [`/report/bot-server-status`]
    );

    const diagnosisResults = [
        { name: 'Bank Asia Portal', status: bankStatus?.status, isLoading: isBankStatusPending },
        { name: 'NID Portal', status: nidStatus?.status, isLoading: isNidStatusPending },
        { name: 'Bot Server', status: botStatus?.status, isLoading: isBotStatusPending },
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
                        onClick={() => openImageModal()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Diagnose
                    </button>
                </div>

                {isLogsPending ? (
                    <div className='h-[80vh] flex justify-center items-center'>
                        <Spin size="large" />
                    </div>
                ) : (
                    logsData?.data?.length ? (
                        <>
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
                                                    <button onClick={() => openImageModal(log?.error_image)}>
                                                        <AiOutlineEye size={20} className="text-blue-500 hover:text-blue-700" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='flex justify-end pt-4'>
                                <Pagination current={page} onChange={onChange} pageSize={20} total={logsData?.pagination?.totalItems} showSizeChanger={false} />
                            </div>
                        </>
                    ) : (
                        <div className="h-96 flex justify-center items-center">
                            <p className='text-center text-2xl font-semibold'>
                                No error logs found!
                            </p>
                        </div>
                    )
                )}
            </div>

            {/* Modal Component for Diagnoses */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(false);
                    setSelectedImage(null);
                }}
                className={`bg-white rounded-lg shadow-lg ${selectedImage ? "max-w-xl" : "max-w-md"} mx-auto my-16 p-6 outline-none`}
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{selectedImage ? 'Error Screen' : 'Diagnosis Status'}</h2>
                    <Button
                        type='text'
                        icon={<IoMdClose size={20} />}
                        className='text-gray-500'
                        onClick={() => {
                            setIsModalOpen(false);
                            setSelectedImage(null);
                        }}
                    />
                </div>

                {selectedImage ? (
                    <img src={`data:image/png;base64,${selectedImage}`} alt="Error Screen" className="w-full h-auto mb-4" />
                ) : (
                    <div className="mb-4">
                        {diagnosisResults.map((result, index) => (
                            <div key={index} className="flex items-center gap-4 mb-4">
                                <div className={`flex-shrink-0 h-12 w-12 rounded-full ${result.isLoading ? "bg-yellow-100" : result.status ? "bg-green-100" : "bg-red-100"} flex items-center justify-center`}>
                                    {result.isLoading ? (
                                        <GoDotFill size={30} className="text-gray-500" />
                                    ) : (
                                        result.status ? (
                                            <IoMdCheckmark size={30} className="text-green-500" />
                                        ) : (
                                            <IoMdClose size={30} className="text-red-500" />
                                        )
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-700 font-semibold m-0">{result.name}</p>
                                    <p className={`${result.isLoading ? "text-gray-700" : result.status ? "text-green-500" : "text-red-500"} m-0`}>
                                        {result.isLoading ? 'Loading...' : result.status ? "Connected" : "Failed"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!selectedImage && <div className="text-center text-gray-600">
                    {(isBankStatusPending || isNidStatusPending || isBotStatusPending) ? "Diagnosis ongoing..." : "Diagnosis Completed!"}
                </div>}
            </Modal>
        </div>
    );
}

export default ErrorLogs;
