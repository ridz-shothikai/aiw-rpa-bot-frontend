"use client"; // This line makes the component a Client Component

import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image"; // Use this for optimized images
import Link from 'next/link'; // Import Link for client-side navigation
import { Popover } from "antd";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({ redirect: false, callbackUrl: '/login' });
        localStorage.removeItem("accessToken");
        router.push("/login");
    };

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
                <Popover
                    content={() => {
                        return (
                            <p onClick={handleLogout} className="m-0 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md cursor-pointer">
                                <FaSignOutAlt className="inline mr-2" /> Log Out
                            </p>
                        )
                    }}
                    trigger="click"
                >
                    <div className="flex items-center cursor-pointer"> 
                        <button className="font-medium px-4 py-2 rounded focus:outline-none">
                            DoTech Ltd.
                        </button>
                    </div>
                </Popover>
            </div>
        </nav>
    );
}
