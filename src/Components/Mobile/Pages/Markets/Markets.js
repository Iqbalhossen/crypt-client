import React from 'react';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import MarketsHeader from './MarketsHeader/MarketsHeader';
import useLocalStorage from 'use-local-storage';
import MarketsMenu from './MarketsMenu/MarketsMenu';

const Markets = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    return (
        <>
            <div className="app" data-theme={theme}>
                <div className="mobile-version ">
                    <MarketsHeader></MarketsHeader>
                    <MarketsMenu></MarketsMenu>
                    <MobileMenu></MobileMenu>
                </div>
            </div>

        </>
    );
};

export default Markets;