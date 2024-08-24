import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import DatePicker from 'react-datepicker';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import sortMenuLogo from '../assets/sortMenu.svg';
import Tick from '../assets/blueTick.png';
import Cross from '../assets/cross.png';
import GWarning from '../assets/grayWarning.png';
import YWarning from '../assets/yellowWarning.png';
import View from '../assets/view.png';
import Hide from '../assets/hide.png'
import 'react-datepicker/dist/react-datepicker.css';

const Home = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal

    // Function to clear the dates
    const clearDates = () => {
        setStartDate(null);
        setEndDate(null);
    };

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle the download action
    const handleDownload = () => {
        // Implement your download logic here with the selected startDate and endDate
        console.log('Downloading report from', startDate, 'to', endDate);
        closeModal(); // Close the modal after download
    };

    const accountData = [
        // Sample data for table
        {
            accountNumber: '1084227031332',
            name: 'John Doe',
            verifyProcessStatus: <div className="flex justify-center items-center ">
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
                <img src={View} alt="view" className='w-5 h-5' />
            </div>,

        },
        {
            accountNumber: '1084227031333',
            name: 'Jane Smith',
            verifyProcessStatus: <div className="flex justify-center items-center ">
            <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
            <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
            <img src={Cross} alt="Tick" className="w-5 h-5 mr-3" />
            <img src={Tick} alt="Tick" className="w-5 h-5" />
        </div>,
            initiatedDate: '10/10/2024 19:26',
            remark: 'Rejected - Date of Birth is missing',
            accountStatus: 'Processed',
            processStatus: 'Rejected',
            view: <div className='flex justify-center items-center'>
            <img src={View} alt="view" className='w-5 h-5' />
        </div>,
        },
        {
            accountNumber: '1084227031334',
            name: 'Mike Johnson',
            verifyProcessStatus: <div className="flex justify-center items-center ">
            <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
            <img src={GWarning} alt="Tick" className="w-6 h-6 mr-3" />
            <img src={Tick} alt="Tick" className="w-5 h-5 mr-3" />
            <img src={YWarning} alt="Tick" className="w-6 h-6" />
        </div>,
            initiatedDate: '10/10/2024 19:27',
            remark: 'Approved',
            accountStatus: 'Processed',
            processStatus: 'Approved',
            view: <div className='flex justify-center items-center'>
            <img src={Hide} alt="view" className='w-5 h-5' />
        </div>,
        },
        // Add more rows as needed
    ];

    // Search handler
    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.elements['simple-search'].value;
        console.log("Search query:", query);
        // Add your search logic here
    };

    return (
        <div className='bg-gray-200'>
            <Navbar />
            <div className='min-h-screen px-8'>
                <div className='min-h-screen'>
                    {/* Main Content */}
                    <div>
                        <div className="flex flex-wrap justify-between py-[130px] gap-[100px] ">
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
                                onClick={() => console.log('Rejected clicked')}
                            >
                                <div className="text-red-600 text-2xl font-bold">1,160</div>
                                <div className="text-gray-700 font-bold ">Failed</div>
                            </button>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <div className="flex items-center ">
                                    <div className="relative">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            placeholderText="Select start date"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                        />
                                    </div>
                                    <span className="mx-4 text-gray-500">to</span>
                                    <div className="relative">
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            maxDate={new Date()}
                                            placeholderText="Select end date"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                        />
                                    </div>
                                    <button
                                        onClick={clearDates}
                                        className="flex items-center justify-center w-8 h-8 bg-transparent hover:bg-gray-200 rounded-full focus:outline-none"
                                    >
                                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <SearchBar onSearch={handleSearch} /> {/* Added SearchBar component */}

                            </div>
                            <div className="flex items-center">
                                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-4 py-2 flex items-center ms-4">
                                    Download Report
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3l-4 4-4-4m4 4V1" />
                                    </svg>
                                </button>

                                {/* Modal for Date Selection */}
                                {isModalOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                        <div className="bg-white rounded-lg p-8 relative">
                                            {/* Close button */}
                                            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <h2 className="text-lg font-bold mb-4">Select Date Range</h2>
                                            <div className="flex items-center space-x-4">
                                                <div className="relative">
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        selectsStart
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        placeholderText="Start date"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <DatePicker
                                                        selected={endDate}
                                                        onChange={(date) => setEndDate(date)}
                                                        selectsEnd
                                                        startDate={startDate}
                                                        endDate={endDate}
                                                        minDate={startDate}
                                                        maxDate={new Date()}
                                                        placeholderText="End date"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-end mt-6">
                                                <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">Download</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className=' pt-3 pb-4 rounded-sm flex-1'>
                        <div className="overflow-x-auto mt-4 flex justify-center flex-col items-center relative">
                            <table className='border-collapse border border-gray-300 p-6 min-w-full rounded-lg min-h-32 accounttable'>
                                <thead className='font-bold bg-gray-100'>
                                    <tr>
                                        <th className='p-2 text-center'>Account Number</th>
                                        <th className='p-2 text-center'>Name</th>
                                        <th className='p-2 text-center'>Verify/Process Status</th>
                                        <th className='p-2 text-center'>Initiated Date</th>
                                        <th className='p-2 text-center'>Remark</th>
                                        <th className='p-2 text-center'>Account Status</th>
                                        <th className='p-2 text-center'>Process Status</th>
                                        <th className='p-2 text-center'>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accountData.map((order) => (
                                        <tr key={order.accountNumber}>
                                            <td className='p-2 text-center'>{order.accountNumber}</td>
                                            <td className='p-2 text-center'>{order.name}</td>
                                            <td className='p-2 text-center'>{order.verifyProcessStatus}</td>
                                            <td className='p-2 text-center'>{order.initiatedDate}</td>
                                            <td className='p-2 text-center'>{order.remark}</td>
                                            <td className='p-2 text-center'>{order.accountStatus}</td>
                                            <td className='p-2 text-center'>{order.processStatus}</td>
                                            <td className='p-2 text-center'>{order.view}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
