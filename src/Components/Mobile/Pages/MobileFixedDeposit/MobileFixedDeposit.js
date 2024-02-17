import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import HTMLReactParser from 'html-react-parser';
const MobileFixedDeposit = () => {

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const { id } = useParams()
    const [data, setData] = useState({});
    const [dataValue, setDataValue] = useState({});
    const refSubmitDis = useRef();

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/fixed/deposit/view/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])


    const handleSubmitData = async (event) => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        try {

            const config = {
                headers: {
                    'content-type': 'application/json',
                }
            };

            await axios
                .post(`https://demeserver.gffex.xyz/api/user/fixed/deposit/store/${id}`, { ...dataValue, user_id: authUser?._id }, config)
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
            <div className="app" >
                <section className='mobile-version user-login-mobile'>
                    <div className="user-login-title">
                        <div className="container-custom">
                            <h4>Fixed Deposit</h4>
                            <p>Profit</p>
                        </div>
                    </div>
                    <div className="user-mobile-login-form" >
                        <div className="container-custom py-3">
                            <form onSubmit={handleSubmitData}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor="email">Amount</label>
                                </div>
                                <br />
                                <div class="d-grid">
                                    <input type="number" name='amount' onBlur={handleInputBlur} id='email' placeholder='Enter your amount' /><br />
                                    <button ref={refSubmitDis} type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="py-4">
                            <div className="container-custom">
                                <h4>Fixed Deposit Details</h4>
                                {data?.dis ?
                                    HTMLReactParser(data?.dis)
                                    :
                                    ''}
                            </div>
                        </div>
                    </div>

                </section>

            </div>
            <MobileMenu></MobileMenu>
        </>
    );
};

export default MobileFixedDeposit;