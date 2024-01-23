import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
const PracticeTradeNow = () => {
    const { id, name } = useParams();
    // var ws = null;
    const [data, setData] = useState()
    const [results, setResults] = useState([])
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/crypto/currency/single/view/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setCryptoData(data?.data);
            });


    }, [])


    function start() {
        let ws_coinbase = new WebSocket("wss://ws-feed.pro.coinbase.com");
        ws_coinbase.onopen = function () {
            ws_coinbase.send(
                JSON.stringify({
                    type: "subscribe",
                    channels: [{
                        name: "ticker",
                        product_ids: [`${cryptoData?.Symbol}-USD`]
                    }]
                })
            );
        };
        // parseFloat(data?.price)
        ws_coinbase.onmessage = function (event) {
            let current_price_coinbase = JSON.parse(event.data);
            // console.log(current_price_coinbase.type === 'ticker')
            if (current_price_coinbase.type === 'ticker') {
                let price_coinbase = parseFloat(current_price_coinbase?.price).toFixed(2);
                setData(price_coinbase);
            }
        };

        ws_coinbase.onclose = (e) => {
            // console.log(e);
        };
    }

    start();

    const [dataValue, setDataValue] = useState({});
    const [thradeSettingData, setthradeSettingData] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/trade/setting/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setthradeSettingData(data?.data);
            });


    }, [])
    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }

    const refSubmitDisLow = useRef();
    const refSubmitDisHigh = useRef();

    const tradeTimeRef = useRef(null);
    const [tradeTime, setTradeTime] = useState(null)

    const handleSubmitData = (HighLow) => {
        if (data) {
            refSubmitDisLow.current.setAttribute("disabled", true);
            refSubmitDisHigh.current.setAttribute("disabled", true);
            const userData = { ...dataValue, CryptoCurrency: cryptoData, Crypto_price: data, user_id: authUser._id, HighLow: HighLow }
            const config = {
                headers: {
                    'content-type': 'application/json',
                }
            };
            axios
                .post(`http://localhost:5000/api/user/Practice/trade/log/store`, userData, config)
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
                   
                    setResults(data.data.data);
                    setTradeTime(data.data.data.OutTime)
                    console.log(data.data.data.OutTime)
                    tradeTimeRef.current.classList.remove("d-none");
                    refSubmitDisLow.current.removeAttribute("disabled");
                    refSubmitDisHigh.current.removeAttribute("disabled");
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
                        refSubmitDisLow.current.removeAttribute("disabled");
                        refSubmitDisHigh.current.removeAttribute("disabled");
                    }
                })
        } else {
            toast.error(`Something is wrong try again`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }
    const TO = "2024-01-22T02:50:00.635Z";
    class Completed extends Component {
        render() {
          return <FlipClockCountdown to={tradeTime} className="flip-clock" >
          </FlipClockCountdown> 
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
            <section className='user-deposit'>
                <div className="container-custom">

                    <div style={{ borderRadius: 2, background: "#000", marginTop: 12, }} className='d-none' ref={tradeTimeRef}>
                        {/* <FlipClockCountdown to={TO} className="flip-clock" >
                        </FlipClockCountdown> */}
                        <Completed />
                    </div>


                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Practice Trade Now</h1>
                            <h1>Current {name} Price :  {data} USD</h1>
                        </div>

                        <div className="row">

                            <div className="pb-4">
                                <div className='user-deposit-input-area'>
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="w-75">

                                                {/* <form > */}

                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlInput2" className="form-label">Amount</label>
                                                    <input type="number" name='amount' onChange={handleInputBlur} className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" min='10' />
                                                </div>
                                                <div className="mb-3">
                                                    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Time</label>
                                                        <select name='GatewayId' onChange={handleInputBlur} className="form-select" aria-label="Default select example">
                                                            <option selected disabled> select</option>

                                                            {thradeSettingData.map((data) => {
                                                                return (
                                                                    <option value={data?._id} key={data?._id}>{data?.Time} {data?.Unit}</option>
                                                                );
                                                            })
                                                            }
                                                        </select> */}

                                                    <div className='thradeSettingDataRadio'>
                                                        {thradeSettingData.map((data) => {
                                                            return (
                                                                <>  <input type="radio" name="thradeSetting_id" id={data?._id} value={data?._id} onChange={handleInputBlur} />
                                                                    <label htmlFor={data?._id}><FontAwesomeIcon icon="fa-regular fa-clock" /> {data?.Time} {data?.Unit}</label></>
                                                            );
                                                        })
                                                        }
                                                    </div>
                                                </div>
                                                <button ref={refSubmitDisLow} onClick={() => handleSubmitData('Low')} className="btn btn-danger me-5">Low</button>
                                                <button ref={refSubmitDisHigh} onClick={() => handleSubmitData('High')} className="btn btn-primary">High</button>
                                                {/* </form> */}



                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>
        </>
    );
};

export default PracticeTradeNow;