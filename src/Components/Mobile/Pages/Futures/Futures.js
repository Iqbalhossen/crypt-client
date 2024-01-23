import React from 'react';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import useLocalStorage from 'use-local-storage';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Futures = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    return (
        <>
            <div className="app" data-theme={theme}>
                <div className="mobile-future-coin-items py-2">
                    <div className="container-custom ">
                        <div className="mobile-future-coin-item row text-center">
                            <div className="col-6">
                                <p className='mobile-future-coin-item-active'>USDT-M</p>
                            </div>
                            <div className="col-6">
                                <p >COIN-M</p>
                            </div>
                        </div>
                        <section className='py-xl-4 py-3 d-flex bd-highlight '>
                            <div className="notice-icon bd-highlight pe-3 mobile-version">
                                <i className="fa-solid fa-volume-high "></i>
                            </div>
                            <div className="notice-silder mobile-version mobile-notice-slider flex-grow-1 bd-highlight ">
                                <marquee>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laudantium vero! Accusamus iure non, dicta aliquam ut illum, obcaecati modi quae distinctio facilis aperiam perferendis corporis. Quo aspernatur vitae iure.
                                </marquee>
                            </div>
                            <div className=" mobile-notice-btn mobile-version  px-3">
                                <Link><i className="fa-solid fa-list-ul"></i></Link>
                            </div>
                        </section>

                        <div className="mobile-future-coin-names d-flex align-items-center justify-content-between">
                            <div className="mobile-future-coin-name">
                                <h3>BTC USDT</h3>
                            </div>

                            <div className="mobile-future-coin-icon">
                            <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <MobileMenu />
        </>
    );
};

export default Futures;