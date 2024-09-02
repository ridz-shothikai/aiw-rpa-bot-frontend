"use client"; // Mark this component as a client component

import React, { useState } from "react";
import Navbar from "../../components/Navbar"; // Adjust the import path based on your project structure
import { DatePicker, Space } from "antd";
import SearchBar from "../../components/SearchBar"; // Adjust the import path

import "antd/dist/reset.css";
import Link from "next/link";

const { RangePicker } = DatePicker;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);

  const disabledDate = (current) => {
    // Disable dates after today
    return current && current > Date.now();
  };

  const accountData = [
    {
      accountNumber: "1084227031332",
      name: "John Doe",
      verifyProcessStatus: (
        <div className="flex justify-center items-center">
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5" />
        </div>
      ),
      initiatedDate: "10/10/2024 19:25",
      nid: "Invalid",
      remark: "Approved",
      accountStatus: "Processed",
      processStatus: "Approved",
      view: (
        <div className="flex justify-center items-center">
          <Link href={"/view"}>
            <img
              src="/assets/view.png"
              alt="view"
              className="w-5 h-5 cursor-pointer"
              onClick={() =>
                console.log("View details for account:", "1084227031332")
              }
            />
          </Link>
        </div>
      ),
    },
    {
      accountNumber: "1084227031333",
      name: "Jane Smith",
      verifyProcessStatus: (
        <div className="flex justify-center items-center">
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img src="/assets/cross.png" alt="Cross" className="w-5 h-5 mr-3" />
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5" />
        </div>
      ),
      initiatedDate: "10/10/2024 19:26",
      nid: "Server Down",
      remark: "Rejected - Date of Birth is missing",
      accountStatus: "Processed",
      processStatus: "Rejected",
      view: (
        <div className="flex justify-center items-center">
          <img
            src="/assets/view.png"
            alt="view"
            className="w-5 h-5 cursor-pointer"
            onClick={() =>
              console.log("View details for account:", "1084227031333")
            }
          />
        </div>
      ),
    },
    {
      accountNumber: "1084227031334",
      name: "Mike Johnson",
      verifyProcessStatus: (
        <div className="flex justify-center items-center">
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img
            src="/assets/grayWarning.png"
            alt="Warning"
            className="w-6 h-6 mr-3"
          />
          <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" />
          <img
            src="/assets/yellowWarning.png"
            alt="Warning"
            className="w-6 h-6"
          />
        </div>
      ),
      initiatedDate: "10/10/2024 19:27",
      nid: "Verified",
      remark: "Approved",
      accountStatus: "Processed",
      processStatus: "Approved",
      view: (
        <div className="flex justify-center items-center">
          <img
            src="/assets/view.png"
            alt="view"
            className="w-5 h-5 cursor-pointer"
            onClick={() =>
              console.log("View details for account:", "1084227031334")
            }
          />
        </div>
      ),
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements["simple-search"].value;
    console.log("Search query:", query);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="min-h-screen px-8">
        <div className="min-h-screen">
          <div className="flex flex-wrap justify-between pt-[90px] pb-[60px] gap-[100px] ">
            <button
              className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
              onClick={() => console.log("Approved clicked")}
            >
              <div className="text-blue-600 text-2xl font-bold">22,997</div>
              <div className="text-gray-700 font-bold">Approved</div>
            </button>

            <button
              className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
              onClick={() => console.log("Processed clicked")}
            >
              <div className="text-green-600 text-2xl font-bold">24,157</div>
              <div className="text-gray-700 font-bold">Processed</div>
            </button>
            <button
              className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
              onClick={() => console.log("Rejected clicked")}
            >
              <div className="text-orange-500 text-2xl font-bold">1,160</div>
              <div className="text-gray-700 font-bold">Rejected</div>
            </button>
            <button
              className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
              onClick={() => console.log("Failed clicked")}
            >
              <div className="text-red-600 text-2xl font-bold">1,160</div>
              <div className="text-gray-700 font-bold">Failed</div>
            </button>
          </div>

          {/* Search and Filter Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Space direction="vertical" size={12}>
                <RangePicker
                  disabledDate={disabledDate}
                  onChange={(dates, dateStrings) => {
                    console.log("From: ", dates[0], ", to: ", dates[1]);
                    setSelectedRange(dateStrings);
                  }}
                />
              </Space>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar onSearch={handleSearch} />
              <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-4 py-2 flex items-center ms-4"
              >
                Download Report
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3l-4 4-4-4m4 4V1"
                  />
                </svg>
              </button>
              <Link href={"/logs"}>
                <button className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-4 py-2 flex items-center">
                  Logs
                </button>
              </Link>
            </div>
          </div>

          {/* Data Table Section */}
          <div className="pt-3 pb-4 rounded-sm flex-1">
            <div className="overflow-x-auto mt-4 flex justify-center flex-col items-center relative">
              <table className="table-auto w-full bg-white shadow-md rounded-md">
                <thead>
                  <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Account Number</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-center">
                      Verify Process Status
                    </th>
                    <th className="py-3 px-6 text-center">Initiated Date</th>
                    <th className="py-3 px-6 text-center">NID</th>
                    <th className="py-3 px-6 text-center">Remark</th>
                    <th className="py-3 px-6 text-center">Account Status</th>
                    <th className="py-3 px-6 text-center">Process Status</th>
                    <th className="py-3 px-6 text-center">View</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {accountData.map((account) => (
                    <tr
                      key={account.accountNumber}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {account.accountNumber}
                      </td>
                      <td className="py-3 px-6 text-left">{account.name}</td>
                      <td className="py-3 px-6 text-center">
                        {account.verifyProcessStatus}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {account.initiatedDate}
                      </td>
                      <td className="py-3 px-6 text-center">{account.nid}</td>
                      <td className="py-3 px-6 text-center">
                        {account.remark}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {account.accountStatus}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {account.processStatus}
                      </td>
                      <td className="py-3 px-6 text-center">{account.view}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Download Report Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-md w-[500px]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Select Date Range</h2>
                  <span onClick={closeModal} className="text-xl cursor-pointer">
                    &times;
                  </span>
                </div>
                <RangePicker
                  presets={rangePresets}
                  onChange={(dates, dateStrings) => {
                    console.log("Selected range:", dateStrings);
                    setSelectedRange(dateStrings);
                  }}
                  className="mb-4"
                />
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      console.log(
                        "Downloading report for range:",
                        selectedRange
                      );
                      closeModal();
                    }}
                    className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-4 py-2"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
