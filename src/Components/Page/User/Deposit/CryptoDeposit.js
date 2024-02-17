import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const CryptoDeposit = ({aagagag}) => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/payment/gateways/manual/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])
    const [dataValue, setDataValue] = useState({});
    const [Gatewaydata, setGatewaydata] = useState({});

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }
    const [userdata, setuserdata] = useState({});
    const handleForm = event => {
        event.preventDefault();
        fetch(`https://demeserver.gffex.xyz/api/user/payment/gateways/manual/view/${dataValue?.GatewayId}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {             
                setuserdata({ ...data?.data, ...dataValue });
               
            });

        // setuserdata({ ...Gatewaydata, ...dataValue });

    }

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/payment/gateways/manual/view/${dataValue?.GatewayId}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setGatewaydata(data.data);
            });
    }, [dataValue])
    

    const [userImage, setUserImage] = useState('');
    const [message, setMessage] = useState('');
    const refSubmitDis = useRef();

    const handleImage = (e) => {
        setMessage("")
        setUserImage(e.target.files[0])

    }
  
    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const storeData = { GatewayData:userdata, user_id: authUser?._id, screenshot: userImage };
        if (storeData.screenshot === '') {
            setMessage("please choose your image");
            refSubmitDis.current.removeAttribute("disabled");
        } else {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`https://demeserver.gffex.xyz/api/user/payment/gateways/manual/deposit/store`, storeData, config)
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
                    refSubmitDis.current.removeAttribute("disabled");

                })
                .catch(error => {
                    console.log(error)
                })
        }

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
            <div className="w-75">
                {!(userdata?._id) ?
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Select Gateway</label>
                            <select name='GatewayId' onChange={handleInputBlur} className="form-select" aria-label="Default select example">
                                <option selected disabled> select</option>

                                {data.map((data) => {
                                    return (
                                        <option value={data?._id} key={data?._id}>{data?.GatewayName}</option>
                                    );
                                })
                                }

                                {/* {data.map((data, index) => <option value="1" key={data?._id}>{data?.GatewayName}</option> )} */}
                                {/* <option value="1">BTC</option>
                                                  <option value="2">USD</option>
                                                  <option value="3">USDT</option> */}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Amount</label>
                            <input type="number" name='amount' onChange={handleInputBlur} className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" min={Gatewaydata?.MinimumAmount} max={Gatewaydata?.MaximumAmount} />
                        </div>
                        <button type="submit" className="btn btn-primary">Next</button>
                    </form>
                    :
                    <>
                        <h3>Deposit Confirm</h3>
                        <p>You have requested {userdata?.amount} USD , Please pay {userdata?.amount} USD for successful payment Please follow the instruction below</p>
                        <p>{userdata?.DepositInstruction}</p>

                        <form onSubmit={handleSubmitData}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Transaction screenshot</label>
                                <input type="file" name='amount' onChange={handleImage} className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" min={Gatewaydata?.MinimumAmount} max={Gatewaydata?.MaximumAmount} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Network Type</label>
                                <div className="form-check">
                                    <input className="form-check-input" onChange={handleInputBlur}  type="radio" name="NetworkType" value='ERC20' id="flexRadioDefault1" required />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        ERC20
                                    </label>
                                </div>
                            </div>
                            <button type="submit" ref={refSubmitDis} className="btn btn-primary">Submit</button>
                        </form>
                    </>
                }

            </div>
        </>
    );
};

export default CryptoDeposit;