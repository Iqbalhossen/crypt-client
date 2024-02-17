import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { Alert } from 'react-bootstrap';
import Completed from './Completed';
import TradeChart from './TradeChart';



const ThradeNow = () => {
    const { id, name } = useParams();
    var ws = null;
    const [data, setData] = useState()
    const [dataSet, setDataSet] = useState({})
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [cryptoData, setCryptoData] = useState([]);
  
    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/admin/crypto/currency/single/view/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setCryptoData(data?.data);
            });


    }, [])


    function start() {
        let ws_coinbase = new WebSocket("wss://ws-feed.pro.coinbase.com");

        let last_price_coinbase = null;

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
                setDataSet(current_price_coinbase);
            }
        };

        ws_coinbase.onclose = (e) => {
            // console.log(e);
        };

        ws_coinbase.onerror = (error) => {
            console.error("WebSocket Error", error);
        };
    }

    start();
    const [dataValue, setDataValue] = useState({});
    const [thradeSettingData, setthradeSettingData] = useState([]);

    const [results, setResults] = useState([])

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/admin/trade/setting/view`, {
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
            // refSubmitDis.current.removeAttribute("disabled");
            const userData = { ...dataValue, CryptoCurrency: cryptoData, Crypto_price: data, user_id: authUser._id, HighLow: HighLow }
            const config = {
                headers: {
                    'content-type': 'application/json',
                }
            };
            axios
                .post(`https://demeserver.gffex.xyz/api/user/trade/log/store`, userData, config)
                .then(data => {
                    if(data?.data?.success === true){
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
                        setResults(data.data.data)
                        setTradeTime(data.data.data.OutTime)
                        tradeTimeRef.current.classList.remove("d-none");
                        refSubmitDisLow.current.removeAttribute("disabled");
                        refSubmitDisHigh.current.removeAttribute("disabled");
                    }else{
                        toast.error(`${data.data.message}`, {
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
                    refSubmitDisLow.current.removeAttribute("disabled");
                    refSubmitDisHigh.current.removeAttribute("disabled");
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

                <div style={{ borderRadius: 2, background: "#000", }} className='d-none' ref={tradeTimeRef}>
                        <FlipClockCountdown 
                        to={tradeTime}
                         className="flip-clock" 
                         renderMap={[false, true, true, true]}
                         labels={[ 'HOURS', 'MINUTES', 'SECONDS']} >
                        <Completed data={results} />
                        </FlipClockCountdown >
                       
                    </div>

                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Trade Now</h1>
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
                                        <div className="col-5">
                                            <div className="w-100">

                                            <TradeChart dataSet={dataSet}></TradeChart>

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

export default ThradeNow;