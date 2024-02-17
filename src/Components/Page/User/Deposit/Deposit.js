import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import CryptoDeposit from './CryptoDeposit';
import SingleItem from './SingleItem';

const Deposit = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [depostData, setdepostData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/payment/gateways/manual/all/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setdepostData(data.data);
            });


    }, [])



    const refGatewayShow = useRef();
    const refCryptoDepositShow = useRef();



    const handleMenuItems = (data) => {
        if (data === 'crypto') {
            refGatewayShow.current.style.display = "none";
            refCryptoDepositShow.current.style.display = "block";
        }
    }


    return (
        <>

            <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Deposit</h1>
                            <p>How To Deposit?</p>
                        </div>

                        {/* how to deposit  */}
                        <div className="hh-grayBox pt45 pb20">
                            <div className="d-flex justify-content-between">
                                <div className="Deposit-tracking completed">
                                    <span className="is-complete">1</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Select the Token and Copy the Wallet Address</h3>
                                        <p>Select the token and network you want to deposit and copy the wallet address shown on this page. </p>
                                    </div>
                                </div>
                                <div className="Deposit-tracking completed">
                                    <span className="is-complete">2</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Withdraw to Wallet Address</h3>
                                        <p>Paste the copied wallet address on other exchange platforms and submit a withdrawal application. </p>
                                    </div>
                                </div>
                                <div className="Deposit-tracking completed">
                                    <span className="is-complete">3</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Transfer Confirmation</h3>
                                        <p>Wait for the blockchain network to confirm the transfer.</p>
                                    </div>
                                </div>
                                <div className="Deposit-tracking">
                                    <span className="is-complete">4</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Deposit Successful</h3>
                                        <p>After the blockchain network has confirmed the transfer, MEXC will transfer the asset to your wallet address.</p>
                                    </div>
                                </div>
                                <div className="Deposit-tracking-show-hide">
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* deposit input  */}
                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-7">
                                    <div ref={refGatewayShow}>
                                        <div className="w-75">

                                            <div className="mb-3">
                                                {/* <label htmlFor="exampleFormControlInput1" className="form-label">Select Gateway</label>
                                                <select name='GatewayId' onChange={handleInputBlur} className="form-select" aria-label="Default select example">
                                                    <option selected disabled> select</option>
                                                    <option onClick={() => handleMenuItems('master-card')} value="master-card">master-card</option>
                                                    <option onClick={() => handleMenuItems('visa')} value="visa">visa</option>
                                                    <option onClick={() => handleMenuItems('crypto')} value="crypto">crypto</option>
                                                </select> */}
                                                <div className="d-flex">
                                                    <div className='thradeSettingDataRadio me-3'>
                                                        <input type="radio" name="thradeSetting_id" id='1' onClick={() => handleMenuItems('card')} />
                                                        <label htmlFor='1'><FontAwesomeIcon icon="fa-brands fa-cc-mastercard me-2" /> Master Card </label>
                                                    </div>
                                                    <div className='thradeSettingDataRadio'>
                                                        <input type="radio" name="thradeSetting_id" id='2' onClick={() => handleMenuItems('crypto')} />
                                                        <label htmlFor='2'><FontAwesomeIcon icon="fa-solid fa-sack-dollar" /> Crypto </label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'none' }} ref={refCryptoDepositShow}>
                                        <CryptoDeposit ></CryptoDeposit>
                                    </div>

                                </div>
                                <div className="col-5">
                                    <div className="user-deposit-tips-area">
                                        <div className="user-deposit-tips-title">
                                            <h3>Tips</h3>
                                        </div>
                                        <div className="user-deposit-tips-dis">
                                            <p>This address only supports deposit of USDT assets. Do not deposit other assets to this address as the assets will not be credited or recoverable.</p>
                                            <p>Please note: If the single deposit amount is less than the minimum deposit amount, it will not be credited. The platform will not be liable for any loss of assets resulting from this. Thank you for your understanding and support!</p>
                                        </div>
                                    </div>
                                    <div className="user-deposit-faq-area">
                                        <div className="user-deposit-tips-title d-flex justify-content-between align-items-center">
                                            <h3>Deposit FAQ</h3>
                                            <Link>View More</Link>
                                        </div>
                                        <div className="user-deposit-faq-lists pt-4">
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                How to Deposit on MEXC？
                                            </Link>
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                Deposit Hasn’t Been Credited To My Account?
                                            </Link>
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                Wrong Deposit Return Application ?
                                            </Link>
                                        </div>
                                        <div className="user-deposit-faq-lists-btn py-3">
                                            <Link className='d-flex justify-content-between align-items-center'><span> <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className='me-1' /> View all deposit & withdrawal status</span> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* deposit history */}
                    <div className="pb-3">
                        <div className="user-deposit-history my-5">
                            <div className="user-referral-history-titile">
                                <h3>Recent Deposits</h3>
                            </div>
                            <div className="user-referral-history-items">
                                <table className='user-referral-history-table'>
                                    <thead>
                                        <tr className="table-headers">
                                            <th>Crypto</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Amount</th>
                                            {/* <th>TxID</th> */}
                                            <th>Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                     
                                        {depostData.map((data, index) => <SingleItem data={data} key={data?._id}></SingleItem>)}

                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Deposit;