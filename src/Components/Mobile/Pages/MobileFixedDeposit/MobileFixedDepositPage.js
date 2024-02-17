import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MobileFixedDepositPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/fixed/deposit/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });


    }, [])
    return (
        <>
            <div className="app" >
                <div className="mobile-user-dashboard">
                    <div className="mobile-user-protfolio mt-0 pt-3">
                        <div className="container-custom">
                            <div className="mobile-user-protfolio-title">
                                <h2>Fixed Deposit</h2>
                                <Link to='/fixed/deposit/history'> History </Link>
                            </div>

                            <div className="pb-5">
                                <div className="row pb-5">
                                    {data.map((data, index) => <SingleItem data={data} key={data?._id}></SingleItem>)}
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


export default MobileFixedDepositPage;