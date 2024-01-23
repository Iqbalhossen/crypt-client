import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

const MobileKycPage = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    return (
        <> 
            <div className="app mobile-version mobile-kyc-page container-custom" data-theme={theme}>
                <h2>Select your ID type</h2>
                <div className="mobile-kyc-btn">
                    <Link to='/kyc/driving/license'>
                        <FontAwesomeIcon icon="fa-regular fa-id-card" />
                        Driving license
                    </Link>
                </div>
                <div className="mobile-kyc-btn">
                    <Link to='/kyc/nid/card'>
                        <FontAwesomeIcon icon="fa-regular fa-id-card" />
                        NID card
                    </Link>
                </div>
                <div className="mobile-kyc-btn">
                    <Link to='/kyc/passport'>
                        <FontAwesomeIcon icon="fa-regular fa-id-card" />
                       Passport
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MobileKycPage;