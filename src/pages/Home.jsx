import React from 'react'
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Home = () => {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    })
    //const AccountTable = () => {  
        const accountData = [  
            {  
                accountNumber: '1084227031332',  
                name: 'John Doe',  
                verifyProcessStatus: '✔️ ✔️',  
                initiatedDate: '10/10/2024 19:25',  
                remark: 'Approved',  
                accountStatus: 'Processed',  
                processStatus: 'Approved',
                view: '-',  
            },  
            {  
                accountNumber: '1084227031333',  
                name: 'Jane Smith',  
                verifyProcessStatus: '✔️ ❌',  
                initiatedDate: '10/10/2024 19:26',  
                remark: 'Rejected - Date of Birth is missing',  
                accountStatus: 'Processed',  
                processStatus: 'Rejected',  
                view: '-',
            },  
            {  
                accountNumber: '1084227031334',  
                name: 'Mike Johnson',  
                verifyProcessStatus: '✔️ ✔️',  
                initiatedDate: '10/10/2024 19:27',  
                remark: 'Approved',  
                accountStatus: 'Processed',  
                processStatus: 'Approved',  
                view: '-',
            },  
        ];  
    //};
    


    return (
        <div>


            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/src/assets/logo.png" className="h-8" alt=" Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Name</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                        </button>

                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"></a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



            <div className="flex justify-between px-20">
                <button
                    className="bg-white border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                    onClick={() => console.log('Approved clicked')}
                >
                    <div className="text-blue-600 text-2xl font-bold">22,997</div>
                    <div className="text-gray-700">Approved</div>
                </button>
                <button
                    className="bg-white border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                    onClick={() => console.log('Processed clicked')}
                >
                    <div className="text-green-600 text-2xl font-bold">24,157</div>
                    <div className="text-gray-700">Processed</div>
                </button>
                <button
                    className="bg-white border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                    onClick={() => console.log('Rejected clicked')}
                >
                    <div className="text-orange-600 text-2xl font-bold">1,160</div>
                    <div className="text-gray-700">Rejected</div>
                </button>
                <button
                    className="bg-white border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer transition-shadow duration-150 ease-in-out hover:shadow-lg active:shadow-xl focus:outline-none"
                    onClick={() => console.log('Rejected clicked')}
                >
                    <div className="text-red-600 text-2xl font-bold">1,160</div>
                    <div className="text-gray-700">Rejected</div>
                </button>
            </div>





            <div>

                Body

                <div className="flex items-center p-4">

                    <div id="date-range-picker" date-rangepicker className="flex items-center">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input id="datepicker-range-start" name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input id="datepicker-range-end" name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                        </div>
                    </div>

                    <div className="ml-4">
                        <button className="bg-black text-white rounded-md px-4 py-2 flex items-center">
                            Download Report
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3l-4 4-4-4m4 4V1" />
                            </svg>
                        </button>
                    </div>


                    <div class="relative flex">
                        <input
                            type="search"
                            class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                            placeholder="Search Account No."
                            aria-label="Search"
                            id="exampleFormControlInput2"
                            aria-describedby="button-addon2" />
                        <span
                            class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                            id="button-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>
                    </div>


                    
                    
                </div>
                
                <div className='pt-3 pb-4 rounded-sm border border-grey-200 flex-1'>

                    <div mt-3>
                    <table className='min-w-full rounded-lg border border-solid border-gray-border min-h-32 accounttable'>
                        <thead>
                            <tr>
                                <td>Account Number</td>
                                <td>Name</td>
                                <td>Verify/Process Status</td>
                                <td>Initiated Date</td>
                                <td>Remark</td>
                                <td>Account Status</td>
                                <td>Process Status</td>
                                <td>View</td>
                            </tr>
                        </thead>
                        <tbody>
                        {accountData.map((order)=>(
                        <tr key={order.accountNumber}>
                            <td>{order.accountNumber}</td>
                            <td>{order.name}</td>
                            <td>{order.verifyProcessStatus}</td>
                            <td>{order.initiatedDate}</td>
                            <td>{order.remark}</td>
                            <td>{order.accountStatus}</td>
                            <td>{order.processStatus}</td>
                            <td>{order.view}</td>

                        </tr>
                    ))}
                        </tbody>
                    </table>

                    
                    </div>

                    

                </div>
            </div>

        </div>
    )
};
export default Home;
