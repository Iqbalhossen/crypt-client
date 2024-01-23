import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import useLocalStorage from 'use-local-storage';
import { ToastContainer } from 'react-toastify';

const HomeMain = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    return (
        <>
             <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Header></Header>
            <div className="app" data-theme={theme}>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </>

    );
};

export default HomeMain;