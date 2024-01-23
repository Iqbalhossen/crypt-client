import React from 'react';
import useLocalStorage from 'use-local-storage';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileDashBoard = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    return (
        <>
            <div className="app" data-theme={theme}>
                <div className="mobile-user-dashboard">

                    <div className="mobile-user-dashboard-menu  mobile-version">
                        <h6 className='active-markets-content-menu'>Overview</h6>
                        <h6>Spot</h6>
                        <h6>Futures</h6>
                        <h6>Fiat</h6>
                    </div>

                    <div className="container-custom">
                        <div className="mobile-user-total-value">
                            <span>Total Value <FontAwesomeIcon icon="fa-solid fa-eye" /> </span>
                            <h2>0 <small>USDC</small> <FontAwesomeIcon icon="fa-solid fa-caret-down" /></h2>
                            <h4>0 <small>USDC</small> <FontAwesomeIcon icon="fa-solid fa-caret-down" /></h4>
                            <div className="mobile-dashboard-btn">
                                <button type="button" className="btn btn-primary">Deposit</button>
                                <button type="button" className="btn btn-outline-primary">Withdraw</button>
                                <button type="button" className="btn btn-outline-primary">Transfer</button>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-user-protfolio">
                        <div className="container-custom">
                            <div className="mobile-user-protfolio-title">
                                <h2>Protfolio</h2>
                                <FontAwesomeIcon icon="fa-solid fa-chart-pie" />
                            </div>
                            <div className="mobile-user-protfolio-menu">
                                <div className="mobile-user-protfolio-menu-item">
                                    <h4> <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" /> Spot</h4>
                                    <h5>0 USDT <FontAwesomeIcon icon="fa-solid fa-angle-right" /></h5>
                                </div>
                            </div>
                            <div className="mobile-user-protfolio-menu">
                                <div className="mobile-user-protfolio-menu-item">
                                    <h4> <FontAwesomeIcon icon="fa-brands fa-slack" />Futures</h4>
                                    <h5>0 USDT <FontAwesomeIcon icon="fa-solid fa-angle-right" /></h5>
                                </div>
                            </div>
                            <div className="mobile-user-protfolio-menu">
                                <div className="mobile-user-protfolio-menu-item">
                                    <h4> <FontAwesomeIcon icon="fa-solid fa-heart" /> Fiat</h4>
                                    <h5>0 USDT <FontAwesomeIcon icon="fa-solid fa-angle-right" /></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <MobileMenu></MobileMenu>
        </>
    );
};

export default MobileDashBoard;