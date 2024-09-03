'use client';

import { useEffect } from "react";
import { QueryClientProviderWrapper } from "../../lib/QueryClientProvider";
import { SessionProvider, useSession } from "next-auth/react";

const TokenSetter = () => {
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.accessToken) {
            localStorage.setItem('accessToken', session.accessToken);
        }
    }, [session]);

    return null;
};

const Providers = ({ children }) => {
    return (
        <QueryClientProviderWrapper>
            {children}
        </QueryClientProviderWrapper>
    )
}

export default Providers;