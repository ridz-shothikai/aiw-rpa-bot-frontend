'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CommonLayout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            router.push("/login");
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default CommonLayout