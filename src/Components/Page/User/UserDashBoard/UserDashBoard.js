import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';

const UserDashBoard = () => {


    return (
        <>
            <section className='user-dashboard'>
                <div className="row">
                    <div className="col-3 user-menu-left">
                        <div className="user-menu-area pt-3">
                            <Link className="user-nav-items active">
                            <FontAwesomeIcon icon="fa-regular fa-user" />
                            <p>Profile</p>
                            </Link>                       
                            <Link to='/user/practice/trade' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-solid fa-shield" />
                            <p>Practice</p>
                            </Link>  
                            <Link to='/user/trade' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" />
                            <p>Trade</p>
                            </Link>   
                                                                                                               
                            <Link to='/assets/deposit' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-solid fa-receipt" />
                            <p>Deposit</p>
                            </Link>    
                            <Link to='/assets/withdraw' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-solid fa-square-check" />
                            <p>Withdrawal <br /> Addresses/Contacts</p>
                            </Link>                       
                            <Link to='/user/id-auth' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-solid fa-id-card-clip" />
                            <p>Identification</p>
                            </Link>                       
                            <Link to='/user/referral' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                            <p>Referral</p>
                            </Link>                                          
                            <Link to='/assets/record' className="user-nav-items">
                            <FontAwesomeIcon icon="fa-brands fa-quinscape" />
                            <p>Transaction Log</p>
                            </Link>                       
                                                
                        </div>
                    </div>
                    <div className="col-9">
                        <Profile></Profile>
                    </div>
                </div>

            </section>
        </>
    );
};

export default UserDashBoard;