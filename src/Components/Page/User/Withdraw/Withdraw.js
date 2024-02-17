import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import dateFormat from "dateformat";
import axios from 'axios';

const Withdraw = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [WithdrawMethodData, setWithdrawMethodData] = useState([]);

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/withdrawal/method/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setWithdrawMethodData(data?.data);
            });


    }, [])



    const [dataValue, setDataValue] = useState({});

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }
    const [userdata, setuserdata] = useState({});

    const refhandleFormSubmitDis = useRef();
    const refGatewayShow = useRef();
    const refConfirmWithdarwFormSubmitDis = useRef();

    const handleForm = event => {
        event.preventDefault();
        refhandleFormSubmitDis.current.setAttribute("disabled", true);
        const storeData = { ...dataValue, user_id: authUser?._id };
        const config = {
            headers: {
                'content-type': 'application/json',

            }
        };
        axios
            .post(`https://demeserver.gffex.xyz/api/user/withdrawal/amount/check`, storeData, config)
            .then(data => {
                refGatewayShow.current.style.display = "none";
                refConfirmWithdarwFormSubmitDis.current.style.display = "block";
                setuserdata(data)
            })
            .catch(error => {
                if (error?.response?.data?.success === false) {
                    toast.error(`${error?.response?.data?.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refhandleFormSubmitDis.current.removeAttribute("disabled");
                }
            })
    }


    const [message, setMessage] = useState('');

    const [confirmDataValue, setconfirmDataValue] = useState({});

    const handleConfirmInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...confirmDataValue, };
        newUser[field] = value;
        setconfirmDataValue(newUser);
    }

    const refSubmitDis = useRef();
    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const storeData = { GatewayData: userdata, ...confirmDataValue, };
        const config = {
            headers: {
                'content-type': 'application/json',

            }
        };
        axios
            .post(`https://demeserver.gffex.xyz/api/user/withdrawal/confirm`, storeData, config)
            .then(data => {
                event.target.reset();
                toast.success(`${data.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                refGatewayShow.current.style.display = "block";
                refConfirmWithdarwFormSubmitDis.current.style.display = "none";
                refSubmitDis.current.removeAttribute("disabled");
                refhandleFormSubmitDis.current.removeAttribute("disabled");
            })
            .catch(error => {
                if (error?.response?.data?.success === false) {
                    toast.error(`${error?.response?.data?.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
    }


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/withdrawal/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });


    }, [])

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Withdraw</h1>
                            <p>How To Withdraw?</p>
                        </div>

                        {/* how to deposit  */}
                        <div class="hh-grayBox pt45 pb20">
                            <div class="d-flex justify-content-between">
                                <div class="Deposit-tracking completed">
                                    <span class="is-complete">1</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Select the Token and Confirm the Withdrawal Address</h3>
                                        <p>Select the token and network you want to withdraw and paste the copied withdrawal address on this page. </p>
                                    </div>
                                </div>
                                <div class="Deposit-tracking completed">
                                    <span class="is-complete">2</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Transfer Confirmation</h3>
                                        <p>Wait for the blockchain network to confirm the transfer. </p>
                                    </div>
                                </div>
                                <div class="Deposit-tracking completed">
                                    <span class="is-complete">3</span>
                                    <div className='Deposit-tracking-dis'>
                                        <h3>Withdrawal Successful</h3>
                                        <p>-The blockchain network has confirmed the transfer. MEXC will transfer the asset to your withdrawal address.</p>
                                    </div>
                                </div>

                                <div class="Deposit-tracking-show-hide">
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
                                    <div className="w-75" ref={refGatewayShow}>
                                        <form onSubmit={handleForm}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Method</label>
                                                <select name='MethodId' onChange={handleInputBlur} className="form-select" aria-label="Default select example">
                                                    <option selected disabled> select</option>
                                                    {WithdrawMethodData.map((data) => {
                                                        return (
                                                            <option value={data?._id} key={data?._id}>{data?.Name}</option>
                                                        );
                                                    })
                                                    }

                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Amount</label>
                                                <input type="number" onChange={handleInputBlur} name='Amount' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                            </div>
                                            <button type='submit' ref={refhandleFormSubmitDis} className="btn btn-primary">Next</button>
                                        </form>
                                    </div>

                                    <div className="w-75" style={{ display: 'none' }} ref={refConfirmWithdarwFormSubmitDis}>
                                        <form onSubmit={handleSubmitData}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Network Type</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={handleConfirmInputBlur} type="radio" name="NetworkType" value='BTC' id="flexRadioDefault1" required />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        BTC
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" onChange={handleConfirmInputBlur} type="radio" name="NetworkType" value='ERC20' id="flexRadioDefault2" required />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                        ERC20
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Withdrawal address</label>
                                                <input type="text" onChange={handleConfirmInputBlur} name='WithdrawalAddress' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                            </div>
                                            <button type='submit' ref={refSubmitDis} className="btn btn-primary">Confirm</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="user-deposit-tips-area">
                                        <div className="user-deposit-tips-title">
                                            <h3>Withdrawal Notification</h3>
                                        </div>
                                        <div className="user-deposit-tips-dis">
                                            <p>Enjoy 0 transaction fees and fast speed for withdrawals made to your MEXC custodial wallet.</p>
                                            <p>Please do not withdraw funds to an ICO address or for crowdfunding. MEXC will not be responsible for distributing any future tokens you may receive.</p>
                                        </div>
                                    </div>
                                    <div className="user-deposit-faq-area">
                                        <div className="user-deposit-tips-title d-flex justify-content-between align-items-center">
                                            <h3>Withdrawal FAQ</h3>
                                            <Link>View More</Link>
                                        </div>
                                        <div className="user-deposit-faq-lists pt-4">
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                How to withdraw on MEXC?
                                            </Link>
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                Not receiving withdraw issue?
                                            </Link>
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                Withdrawn to the wrong address or filled in the wrong Memo/Tag?
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
                                <h3>Withdrawal History</h3>
                            </div>
                            <div className="user-referral-history-items">
                                <table className='user-referral-history-table'>
                                    <thead>
                                        <tr class="table-headers">
                                            <th>Gateway | Transaction</th>
                                            <th>Initiated</th>
                                            <th>Amount</th>
                                            <th>Conversion</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((data, index) =>
                                            <tr>
                                                <td>
                                                    {data?.GatewayName} <br />
                                                    {data?.Transaction}
                                                </td>
                                                <td> {dateFormat(data.Created_At, "d-m-yyyy h:MM:ss TT")}</td>
                                                <td> {data?.AmountWithVat}$</td>
                                                <td>1 USD = {data?.Conversion} USD</td>
                                                <td> {data?.Status === 0
                                                        ?
                                                        <span class="badge bg-warning ">Pending</span>
                                                        :
                                                        ''
                                                    }
                                                    {data?.Status === 1
                                                        ?
                                                        <span class="badge bg-success">Approve</span>
                                                        :
                                                        ''
                                                    }
                                                    {data?.Status === 2
                                                        ?
                                                        <span class="badge bg-danger">Reject</span>
                                                        :
                                                        ''
                                                    }</td>
                                              
                                            </tr>
                                        )}


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

export default Withdraw;