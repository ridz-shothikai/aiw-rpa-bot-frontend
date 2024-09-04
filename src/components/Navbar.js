"use client"; // This line makes the component a Client Component

import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import { Popover } from "antd";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
    const { user, logout } = useAuth();

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
                            <p onClick={logout} className="m-0 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md cursor-pointer">
                                <FaSignOutAlt className="inline mr-2" /> Log Out
                            </p>
                        )
                    }}
                    trigger="click"
                >
                    <div className="flex items-center cursor-pointer">
                        <button className="font-medium px-4 py-2 rounded focus:outline-none">
                            {user?.name || "User"}
                        </button>
                    </div>
                </Popover>
            </div>
        </nav>
    );
}
