import React, { useState } from "react";
import { FaSignOutAlt, FaLock } from "react-icons/fa";
import logo from "../assets/doTechLogo.png"

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white fixed top-0 flex h-20 w-full justify-between px-8 shadow">
            <div className="flex items-center">
                <div className=' min-w-[80px] flex justify-center'>
                    <img className='w-40' src={logo} alt="DoTech Logo" />
                    {/* logo */}
                </div>
            </div>

            <div className="relative flex items-center">
                <div className='flex items-center'>
                    <img
                        src="/path/to/profile-image.jpg"
                        alt="Profile"
                        className="rounded-full w-10 h-10"
                    />
                </div>

                <button
                    className="px-4 py-2 ml-4 rounded focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    DoTech Ltd.
                </button>

                {dropdownOpen && (
                    <div className="absolute top-16 right-0 mt-2 py-2 bg-white border rounded shadow-lg z-50">
                        <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <FaSignOutAlt className="inline mr-2" /> Log Out
                        </a>
                        <a href="/update-password" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <FaLock className="inline mr-2" /> Update Password
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
