import React, { useContext, useEffect, useRef, useState } from 'react';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const MobileLoan = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [dataValue, setDataValue] = useState({});
    const refSubmitDis = useRef();

    const [data, setData] = useState([]);

    useEffect(() => {
        if (authUser?._id) {
            fetch(`https://demeserver.gffex.xyz/api/user/loan/history/${authUser?._id}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setData(data.data);
                });
        }


    }, [])
    console.log(data)

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
                .post(`https://demeserver.gffex.xyz/api/user/loan/store/${authUser?._id}`, { ...dataValue }, config)
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
                            <h4>Loan</h4>
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
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor="email">Reason</label>
                                </div>
                                <br />
                                <div class="d-grid">
                                    <input type="text" name='reason' onBlur={handleInputBlur} id='email' placeholder='reason' /><br />
                                    <button ref={refSubmitDis} type="submit">Submit</button>
                                </div>
                            </form>


                            <table class="table table-striped table-class hidden-sm hidden-xs mobile-data-table pt-4 pb-4" id="table-id">
                                <tr>
                                    <th>Amount</th>
                                    <th>Percentage</th>
                                    <th>Interest Amount</th>
                                    <th>Expired Time</th>
                                    <th>Status</th>
                                </tr>

                                {data.length !== 0 ?
                                    data.map((data, index) => {
                                        if (data) {
                                            return (
                                                <SingleItem data={data} index={index} key={data._id} ></SingleItem>
                                            );
                                        }
                                    }) :
                                    <tr>
                                        <td className="text-muted text-center" colspan="100%">Data not found</td>
                                    </tr>}

                            </table>

                        </div>

                   
                    </div>

                </section>

            </div>
            <MobileMenu></MobileMenu>
        </>
    );
};

export default MobileLoan;