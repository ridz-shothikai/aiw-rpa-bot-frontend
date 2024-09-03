import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            const userInfo = localStorage.getItem('userInfo');
            setUser(JSON.parse(userInfo));
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URI}api/auth/login`,
                { email, password }
            );
            localStorage.setItem('accessToken', response.data.token);
            localStorage.setItem('userInfo', JSON.stringify(response.data.user));
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            setUser(response.data.user);
            router.push('/');
        } catch (error) {
            console.error('Login failed', error);
            return error;
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
    };

    return { user, loading, login, logout };
}
