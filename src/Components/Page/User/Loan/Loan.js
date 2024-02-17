import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import {  toast } from 'react-toastify';
import axios from 'axios';
import HTMLReactParser from 'html-react-parser';

const Loan = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [dataValue, setDataValue] = useState({});
    const refSubmitDis = useRef();


    const handleSubmitData = async (event) => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        console.log(dataValue)
        try {

            const config = {
                headers: {
                    'content-type': 'application/json',
                }
            };

            await axios
                .post(`http://localhost:5000/api/user/loan/store/${authUser?._id}`, { ...dataValue }, config)
                .then(data => {
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
                    refSubmitDis.current.removeAttribute("disabled");

                })
                .catch(error => {
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
                })



        } catch (error) {
            console.log(error);
        }



    }



    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }
    return (
        <>
            <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Loan </h1>
                        </div>
                    </div>

                    {/* deposit input  */}
                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-7">
                                    <div className="w-75" >
                                        <h3> Loan</h3>
                                        <form onSubmit={handleSubmitData}>
                                            <div className="mb-3">
                                                <label htmlFor="amount" className="form-label">Amount</label>
                                                <input type="number" onBlur={handleInputBlur} name='amount' className="form-control" id="amount" aria-describedby="emailHelp" required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="amount" className="form-label">Reason</label>
                                                <input type="text" onBlur={handleInputBlur} name='reason' className="form-control" id="amount" aria-describedby="emailHelp" required />
                                            </div>
                                            <button ref={refSubmitDis} type="submit" className="btn btn-primary">Submit</button>
                                        </form>


                                    </div>

                                </div>
                                {/* <div className="col-5">
                                    <div className="user-deposit-tips-area">
                                        <div className="user-deposit-tips-title">
                                            <h3>Fixed Deposit Details</h3>
                                        </div>
                                        <div className="user-deposit-tips-dis">
                                       
                                        </div>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};


export default Loan;