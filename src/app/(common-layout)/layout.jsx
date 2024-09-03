'use client';

import ProtectedRoute from "../../components/ProtectedRoute";

const CommonLayout = ({ children }) => {
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )
}

export default CommonLayout