import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';

const Profile = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/user/view/single/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setUserData(data.data);
            });


    }, [authUser])

    const [KYCData, setKYCData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/kyc/verify/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setKYCData(data.data);
            });


    }, [])

    return (
        <>
            <section className='user-profile-name-area'>
                <div className="container">
                    <div className="pt-4">
                        <div className="d-flex">
                            <div className="user-image me-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCbJoUCRscGfzySEtqoR5HtHnEOE0ux4r-A&usqp=CAU" alt="" width="100px" height="100px" />
                            </div>
                            <div className="user-details w-100">
                                <div className="user-name-area">
                                    <div className="d-flex align-items-center">
                                        <h4>{authUser?.fname} {authUser?.lname}</h4>
                                        <Link className='user-name-edit'><FontAwesomeIcon icon="fa-solid fa-pencil" /></Link>
                                        <Link className='user-profile-vip'>
                                            <FontAwesomeIcon icon="fa-regular fa-gem" />
                                            <span>Apply for VIP</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className=" row justify-content-between">
                                    <div className='col-6'>
                                        <div className="user-account-details">
                                            <p>Account</p>
                                            <span>{userData?.email}</span>
                                        </div>
                                        {/* <div className="user-account-details">
                                            <p>UID</p>
                                            <span>27238206</span>
                                        </div> */}
                                    </div>
                                    <div className='col-6'>
                                        <div className="user-account-login">
                                            <div className="user-account-login-details">
                                                <p>Sign-up Time</p>
                                                <span>2023-12-06 19:24:52</span>
                                            </div>
                                            <div className="user-account-login-details">
                                                <p>Last Login</p>
                                                <span>2023-12-28 21:38:57</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='container'>
                <div className="pt-5">
                    <div className="row">
                        <div className="col-7">
                            <div className="user-profile-identification ">
                                <h3>Identification</h3>
                                <p>Current Withdrawal Limit: 30 BTC in 24 hours</p>
                                <p>Complete the verification process to increase your withdrawal limit</p>
                                <div className="pt-2">
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        {KYCData?.status === 1 ? 
                                        <p className='user-primary-kyc-btn'>KYC Verified</p>
                                        :
                                        <Link to='/user/id-auth/Kyc' className='user-primary-kyc-btn'>Primary KYC <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
                                        }
                                      
                                        <Link className='user-institutional-verification-btn'>Switch to institutional verification</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="user-profile-identification ">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="user-total-value">
                                        <h3>Total Value</h3>
                                        <h4 className='user-usdt-value'>{userData?.balance} USDT</h4>
                                        <Link to='/assets/deposit' className="btn btn-primary px-5 fw-normal d-block mt-3">Deposit</Link>
                                    </div>
                                    <div className="user-assets">
                                    <Link className='user-institutional-verification-btn fw-bolder'>Asset Details</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-5">
                            {/* <Link className='user-box-btn mb-5'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span> <img src="https://www.mexc.com/static/images/user/overview/invite.png" alt="" /> Referral</span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                                </div>
                                <p>Invite friends for more commissions</p>
                                <div className="user-referral-link">
                                    <span>https://www...Code=1yi93 </span>
                                    <img src="https://www.mexc.com/static/images/user/overview/copy.png" alt="" />
                                </div>
                            </Link> */}
                            <Link className='user-box-btn'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span> <img src="https://www.mexc.com/static/images/user/overview/learn.png" alt="" /> Learn</span>
                                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                                </div>
                                <p>Learn All About Crypto. All Questions, Answered.</p>

                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;