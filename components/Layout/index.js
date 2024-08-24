// components/Layout.js

import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Cursor from '../Cursor';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../store/user/slice';

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (!user) {
            dispatch(fetchUserProfile());
        }
    }, [dispatch, user]);
    return (
        <div className="flex flex-col min-h-screen relative cursor-none">
            <Cursor />
            <Head>
                <title>Welcome {user?.lastName}</title>
            </Head>
            <div className="gradient-circle"></div>
            <div className="gradient-circle-bottom"></div>
            <Header userProfile={user || {}}/>

            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
