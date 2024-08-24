import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import SearchBar from '../components/SearchBar';
import sortMenuLogo from '../assets/sortMenu.svg';
import Tick from '../assets/blueTick.png';
import Cross from '../assets/cross.png';
import GWarning from '../assets/grayWarning.png';
import YWarning from '../assets/yellowWarning.png';
import View from '../assets/view.png';
import Hide from '../assets/hide.png';
import 'antd/dist/reset.css';

const { RangePicker } = DatePicker;

const Home = () => {
    const [viewState, setViewState] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState(null);

    const rangePresets = [
        { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
        { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
        { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
        { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
    ];

    const toggleView = (accountNumber) => {
        setViewState(prevState => ({
            ...prevState,
            [accountNumber]: !prevState[accountNumber]
        }));
    };

    const accountData = [
        {
            accountNumber: '1084227031332',
            name: 'John Doe',
            verifyProcessStatus: <div className="flex justify-center items-center">
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={Tick} alt="Tick" className="w-5 h-5" />
            </div>,
            initiatedDate: '10/10/2024 19:25',
            remark: 'Approved',
            accountStatus: 'Processed',
            processStatus: 'Approved',
            view: <div className='flex justify-center items-center'>
                <img 
                    src={viewState['1084227031332'] ? Hide : View} 
                    alt="view" 
                    className='w-5 h-5 cursor-pointer' 
                    onClick={() => toggleView('1084227031332')} 
                />
            </div>,
        },
        {
            accountNumber: '1084227031333',
            name: 'Jane Smith',
            verifyProcessStatus: <div className="flex justify-center items-center">
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={Cross} alt="Cross" className="w-5 h-5 mr-3" />
                <img src={Tick} alt="Tick" className="w-5 h-5" />
            </div>,
            initiatedDate: '10/10/2024 19:26',
            remark: 'Rejected - Date of Birth is missing',
            accountStatus: 'Processed',
            processStatus: 'Rejected',
            view: <div className='flex justify-center items-center'>
                <img 
                    src={viewState['1084227031333'] ? Hide : View} 
                    alt="view" 
                    className='w-5 h-5 cursor-pointer' 
                    onClick={() => toggleView('1084227031333')} 
                />
            </div>,
        },
        {
            accountNumber: '1084227031334',
            name: 'Mike Johnson',
            verifyProcessStatus: <div className="flex justify-center items-center">
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={GWarning} alt="Warning" className="w-6 h-6 mr-3" />
                <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
                <img src={YWarning} alt="Warning" className="w-6 h-6" />
            </div>,
            initiatedDate: '10/10/2024 19:27',
            remark: 'Approved',
            accountStatus: 'Processed',
            processStatus: 'Approved',
            view: <div className='flex justify-center items-center'>
                <img 
                    src={viewState['1084227031334'] ? Hide : View} 
                    alt="view" 
                    className='w-5 h-5 cursor-pointer' 
                    onClick={() => toggleView('1084227031334')} 
                />
            </div>,
        },
    ];

    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.elements['simple-search'].value;
        console.log("Search query:", query);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='bg-gray-200'>
            <Navbar />
            <div className='min-h-screen px-8'>
                <div className='min-h-screen'>
                    <div className="flex flex-wrap justify-between pt-[135px] pb-[60px] gap-[100px] ">
                        <button
                            className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                            onClick={() => console.log('Approved clicked')}
                        >
                            <div className="text-blue-600 text-2xl font-bold">22,997</div>
                            <div className="text-gray-700 font-bold ">Approved</div>
                        </button>

                        <button
                            className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                            onClick={() => console.log('Processed clicked')}
                        >
                            <div className="text-green-600 text-2xl font-bold">24,157</div>
                            <div className="text-gray-700 font-bold ">Processed</div>
                        </button>
                        <button
                            className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                            onClick={() => console.log('Rejected clicked')}
                        >
                            <div className="text-orange-500 text-2xl font-bold">1,160</div>
                            <div className="text-gray-700 font-bold ">Rejected</div>
                        </button>
                        <button
                            className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                            onClick={() => console.log('Failed clicked')}
                        >
                            <div className="text-red-600 text-2xl font-bold">1,160</div>
                            <div className="text-gray-700 font-bold ">Failed</div>
                        </button>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Space direction="vertical" size={12}>
                                <RangePicker
                                    presets={rangePresets}
                                    onChange={(dates, dateStrings) => {
                                        console.log('From: ', dates[0], ', to: ', dates[1]);
                                        setSelectedRange(dateStrings);
                                    }}
                                />
                            </Space>
                        </div>
                        <div className="flex items-center">
                            <SearchBar onSearch={handleSearch} />
                            <button
                                onClick={openModal}
                                className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-4 py-2 flex items-center ms-4"
                            >
                                Download Report
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3l-4 4-4-4m4 4V1" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="pt-3 pb-4 rounded-sm flex-1">
                        <div className="overflow-x-auto mt-4 flex justify-center flex-col items-center relative">
                        <table className="table-auto w-full bg-white shadow-md rounded-md">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Account Number</th>
                                        <th className="py-3 px-6 text-left">Name</th>
                                        <th className="py-3 px-6 text-center">Verification Status</th>
                                        <th className="py-3 px-6 text-center">Initiated Date</th>
                                        <th className="py-3 px-6 text-center">Remarks</th>
                                        <th className="py-3 px-6 text-center">Account Status</th>
                                        <th className="py-3 px-6 text-center">View</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 text-sm font-light">
                                    {accountData.map((account, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                {account.accountNumber}
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                {account.name}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {account.verifyProcessStatus}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {account.initiatedDate}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {account.remark}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {account.accountStatus}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {account.view}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for downloading report */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-xl font-bold mb-4">Download Report</h2>
                        <p>Select the date range for the report:</p>
                        <Space direction="vertical" size={12}>
                            <RangePicker
                                presets={rangePresets}
                                onChange={(dates, dateStrings) => {
                                    console.log('Selected range for report: ', dateStrings);
                                    setSelectedRange(dateStrings);
                                }}
                            />
                        </Space>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    console.log('Downloading report for range: ', selectedRange);
                                    closeModal();
                                }}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

