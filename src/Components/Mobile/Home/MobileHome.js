import React from 'react';
import MobileSilder from './MobileSilder/MobileSilder';
import MobileNotices from './MobileNotices/MobileNotices';
import CryptoThrade from './CryptoThrade/CryptoThrade';
import MobileCryptoChain from './MobileCryptoChain/MobileCryptoChain';

const MobileHome = () => {
    return (
       <>
       <MobileSilder></MobileSilder>
       <MobileNotices></MobileNotices>
       <CryptoThrade></CryptoThrade>
       <MobileCryptoChain></MobileCryptoChain>
       </>
    );
};

export default MobileHome;