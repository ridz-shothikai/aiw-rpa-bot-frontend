"use client"; // This line makes the component a Client Component

import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image"; // Use this for optimized images
import Link from 'next/link'; // Import Link for client-side navigation

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white fixed top-0 flex h-18 w-full justify-between px-8 shadow">
            <div className="flex items-center">
                <div className="min-w-[80px] flex justify-center">
                    <Image
                        src="/assets/doTechLogo.png" // Ensure this path is correct
                        alt="DoTech Logo"
                        width={90}
                        height={40}
                    />
                </div>
            </div>

            <div className="relative flex items-center">
                <div className="flex items-center">
                    <Image
                        src="/path/to/profile-image.jpg" // Ensure this path is correct
                        alt="Profile"
                        width={40}
                        height={40}
                    />
                </div>

                <button
                    className="font-bold px-4 py-2 ml-4 rounded focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    DoTech Ltd.
                </button>

                {dropdownOpen && (
                    <div className="absolute top-16 right-0 mt-2 py-2 bg-white border rounded shadow-lg z-50">
                        <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <FaSignOutAlt className="inline mr-2" /> Log Out
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
