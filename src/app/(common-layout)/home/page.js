"use client"; // Mark this component as a client component

import React, { useState } from "react";
import Navbar from "../../../components/Navbar"; // Adjust the import path based on your project structure
import { Badge, DatePicker, Pagination, Popover, Space, Spin } from "antd";
import SearchBar from "../../../components/SearchBar"; // Adjust the import path
import { useCallApi } from "../../../lib/api";
import "antd/dist/reset.css";
import Link from "next/link";
import moment from "moment";

const { RangePicker } = DatePicker;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [downloadDataRange, setDownloadDataRange] = useState(null);
  const [page, setPage] = useState(1);
  const [accountNo, setAccountNo] = useState("");
  const [input, setInput] = useState("");

  const { data: statsData, isPending: isStatsPending, refetch: refetchStats } = useCallApi(
    `api/report/total-count`,
    [`total-count`],
    5000
  );
  const { data: liveStatus, isPending: isLiveStatusPending, refetch: refetchLiveStatus } = useCallApi(
    `api/report/live-status`,
    [`live-status`],
    2000
  );
  const { data: accountsData, isPending: isAccountsDataPending, refetch: refetchAccountsData } = useCallApi(
    `api/report/account-list?page=${page}&limit=20${selectedRange?.length && !!selectedRange[0] ? `&start_date=${selectedRange[0]}&end_date=${selectedRange[1]}` : ""}${accountNo ? `&account_no=${accountNo}` : ""}`,
    [`account-list?page=${page}&limit=20${selectedRange?.length && !!selectedRange[0] ? `&start_date=${selectedRange[0]}&end_date=${selectedRange[1]}` : ""}${accountNo ? `&account_no=${accountNo}` : ""}`],
    5000
  );

  const rangePresets = [
    // Add your date presets here if needed
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements["simple-search"].value;
    console.log("Search query:", query);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onChange = (page) => {
    setPage(page);
  };

  const approved = statsData?.data?.filter((stat) => stat?._id === "Approved");
  const rejected = statsData?.data?.filter((stat) => stat?._id === "Rejected");

  const handleDownload = () => {
    if (downloadDataRange?.length && !!downloadDataRange[0]) {
      window.open(`${process.env.NEXT_PUBLIC_API_URI}api/report/download-csv?start_date=${downloadDataRange[0]}&end_date=${downloadDataRange[1]}`, "_blank");

      closeModal();
    }
  }

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="min-h-screen px-8">
        <div className="min-h-screen">
          <div className="flex flex-wrap justify-between pt-[90px] pb-[60px] gap-[100px] ">
            {statsData?.data?.map((stat) => (
              <button
                className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                onClick={() => console.log("Approved clicked")}
              >
                <div className={`
                   ${stat?._id === "Approved" && "text-green-600"} 
                   ${stat?._id === "Processed" && "text-blue-600"}
                   ${stat?._id === "Rejected" && "text-orange-600"} 
                   text-2xl font-bold`}>
                  {stat?._id === "Processed" ?
                    <>
                      {stat?._id && approved[0]?.count + rejected[0]?.count}
                    </> : stat?.count}
                </div>
                <div className="text-gray-700 font-bold">
                  {stat?._id}
                </div>
              </button>
            ))}

            <div className="bg-white border border-gray-300 flex-1 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none space-y-1 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <Badge
                  status={"processing"}
                  text="Live"
                  color="red"
                />
                <p className={`font-semibold m-0`}>
                  {liveStatus?.data?.action?.split(" ")?.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </p>
              </div>
              <p className="text-gray-700 m-0">
                {liveStatus?.data?.status}
              </p>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Space direction="vertical" size={12}>
                <RangePicker
                  presets={rangePresets}
                  onChange={(dates, dateStrings) => {
                    setSelectedRange(dateStrings);
                  }}
                />
              </Space>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar onSearch={handleSearch} accountNo={accountNo} setAccountNo={setAccountNo} input={input} setInput={setInput} />
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
          {isAccountsDataPending ? (
            <div className='h-96 flex justify-center items-center'>
              <Spin size="large" />
            </div>
          ) : (
            <div className="pt-3 pb-4 rounded-sm flex-1">
              <div className="overflow-x-auto mt-4 flex justify-center flex-col items-center relative">
                <table className="table-auto w-full bg-white shadow-md rounded-md">
                  <thead>
                    <tr className="bg-gray-300 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Account Number</th>
                      <th className="py-3 px-6 text-left">Name</th>
                      <th className="py-3 px-6 text-center">Verify Process Status</th>
                      <th className="py-3 px-6 text-center">Initiated Date</th>
                      <th className="py-3 px-6 text-center">Remark</th>
                      <th className="py-3 px-6 text-center">Process Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {accountsData?.data?.map((account) => (
                      <tr
                        key={account.accountNumber}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          {account.accountNumber}
                        </td>
                        <td className="py-3 px-6 text-left">
                          {account.name.split(' ').map(part => part ? part[0] + '*'.repeat(part.length - 1) : '').join(' ')}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <Popover
                            content={() => (
                              <div className="max-w-96 space-y-2">
                                {account?.process_status?.map(item => (
                                  <div className="flex items-center gap-2">
                                    {item?.status ? <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" /> : <img src="/assets/cross.png" alt="Cross" className="w-5 h-5 mr-3" />}
                                    {item?.name === "initiated" && <span>Initiated at {moment(account.initiatedDate).format('MM/DD/YYYY hh:mm A')}</span>}
                                    {item?.name === "scrapped" && <span>Scrapped at {moment(account.initiatedDate).format('MM/DD/YYYY hh:mm A')}</span>}
                                    {item?.name === "nid_verify" && <span>NID verified at {moment(account.initiatedDate).format('MM/DD/YYYY hh:mm A')}</span>}
                                    {item?.name === "submit" && <span>Submitted at {moment(account.initiatedDate).format('MM/DD/YYYY hh:mm A')}</span>}
                                  </div>
                                ))}
                              </div>
                            )}
                            placement="right"
                          >
                            <div className="flex justify-center items-center">
                              {account?.process_status?.map(item => (
                                item?.status ? <img src="/assets/blueTick.png" alt="Tick" className="w-5 h-5 mr-3" /> : <img src="/assets/cross.png" alt="Cross" className="w-5 h-5 mr-3" />
                              ))}
                            </div>
                          </Popover>
                        </td>
                        <td className="py-3 px-6 text-center">
                          {moment(account.initiatedDate).format('DD/MM/YYYY, HH:mm:ss')}
                        </td>
                        <td className="py-3 px-6 text-center max-w-48 truncate">
                          <Popover
                            content={() => (
                              <div className="max-w-96">
                                {account.remark}
                              </div>
                            )}
                            placement="topLeft"
                            arrow={false}
                          >
                            {account.remark}
                          </Popover>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className={`
                          px-4 py-[2px] rounded-3xl w-max
                          ${account.processState === "Approved" && "bg-green-200 border-green-500"}
                          ${account.processState === "Processed" && "bg-yellow-200 border-yellow-500"}
                          ${account.processState === "Rejected" && "bg-red-200 border-red-500"}
                        `}>
                            <Badge
                              status={account.processState === "Approved" ? "success" : account.processState === "Processed" ? "warning" : account.processState === "Rejected" ? "error" : "default"}
                              text={account.processState}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex justify-end pt-4'>
                <Pagination current={page} onChange={onChange} pageSize={20} total={accountsData?.pagination?.totalItems} showSizeChanger={false} />
              </div>
            </div>
          )}

          {/* Download Report Modal */}
          {/* {isModalOpen && ( */}
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
                    setDownloadDataRange(dateStrings);
                  }}
                  className="mb-4 w-full"
                />
                <div className="flex justify-center">
                  <button
                    onClick={handleDownload}
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
