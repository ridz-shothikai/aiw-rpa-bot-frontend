import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Spin } from 'antd';

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [loading, user, router]);

    if (loading || !user) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Spin size="large" />
            </div>
        );
    }

    return children;
}
