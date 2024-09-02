'use client';

import { useRouter } from "next/navigation";

const CommonLayout = ({ children }) => {
    const router = useRouter();

    if (!localStorage.getItem("accessToken")) {
        router.push("/login");
    }

    return (
        <>
            {children}
        </>
    )
}

export default CommonLayout