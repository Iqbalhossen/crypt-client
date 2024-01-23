import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
    return (
        <>
            <div className="mobile-version">
                <div className="mobile-menu-bottom">
                    <div className="mobile-menu-items d-flex justify-content-between align-items-center">
                        <Link to='/'>
                            <i class="fa-solid fa-house"></i>
                            <h6>Home</h6>
                        </Link>
                        <Link to='/markets'>
                            <i class="fa-solid fa-chart-simple"></i>
                            <h6>Markets</h6>
                        </Link>
                        <Link to=''>
                            <i class="fa-solid fa-arrow-right-arrow-left"></i>
                            <h6>Trade</h6>
                        </Link>
                        <Link to='/futures'>
                            <i class="fa-solid fa-id-badge"></i>
                            <h6>Futures</h6>
                        </Link>
                        <Link to='/user/dashboard'>
                            <i class="fa-solid fa-wallet"></i>
                            <h6>Wallets</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;