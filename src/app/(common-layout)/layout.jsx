'use client';

import { useRouter } from "next/navigation";

const CommonLayout = ({ children }) => {
    const router = useRouter();

    if (typeof window !== undefined) {
        if (!localStorage.getItem("accessToken")) {
            router.push("/login");
        }
    }

    return (
        <>
            {children}
        </>
    )
}

export default CommonLayout