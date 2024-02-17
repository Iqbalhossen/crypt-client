import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Forex from './Forex/Forex';
import Stocks from './Stocks/Stocks';
import Crypto from './Crypto/Crypto';

const AllMarkets = () => {




    // useEffect(() => {
    //     fetch(`https://eodhd.com/api/real-time/AAPL.US?api_token=65be7816e677c3.04903253&fmt=json`, {
    //         method: 'GET',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         });


    // }, [])



    

    // function start() {
    //     const socket = new WebSocket('wss://ws.eodhistoricaldata.com/ws/forex?api_token=65be7816e677c3.04903253');

    //     // Connection opened -> Subscribe
    //     socket.addEventListener('open', function (event) {
    //         socket.send(JSON.stringify({'action':'subscribe', 'symbols': 'ETH-USD'}))
    //     });
        
    //     // Listen for messages
    //     socket.addEventListener('message', function (event) {
    //         const newdata = JSON.parse(event.data)
    //         console.log('Message from server ', newdata);
    //     });
        
    //     // Unsubscribe
    //      var unsubscribe = function(symbol) {
    //         socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    //     }
    //     // unsubscribe('AMZN');
    // }

    
    // start();











    
    const ForexShowRef = useRef();
    const StocksShowRef = useRef();
    const CryptoShowRef = useRef();
    const CommoditiesShowRef = useRef();
    const IndiceshowRef = useRef();
    const ETFsShowRef = useRef();
    const ForexActiveClassRef = useRef();
    const StocksActiveClassRef = useRef();
    const CryptoActiveClassRef = useRef();
    const CommoditiesActiveClassRef = useRef();
    const IndicesActiveClassRef = useRef();
    const ETFsActiveClassRef = useRef();

    const CryptoMarketShow = (data) => {

        if (data === 'Forex') {
            ForexShowRef.current.style.display = "block";
            ForexActiveClassRef.current.classList.add("active");


            StocksShowRef.current.style.display = "none";
            CryptoShowRef.current.style.display = "none";
            CommoditiesShowRef.current.style.display = "none";
            IndiceshowRef.current.style.display = "none";
            ETFsShowRef.current.style.display = "none";
            StocksActiveClassRef.current.classList.remove('active');
            CryptoActiveClassRef.current.classList.remove('active');
            CommoditiesActiveClassRef.current.classList.remove('active');
            IndicesActiveClassRef.current.classList.remove('active');
            ETFsActiveClassRef.current.classList.remove('active');

        }
        if (data === 'Stocks') {
            StocksShowRef.current.style.display = "block";
            StocksActiveClassRef.current.classList.add("active");

            ForexShowRef.current.style.display = "none";
            CryptoShowRef.current.style.display = "none";
            CommoditiesShowRef.current.style.display = "none";
            IndiceshowRef.current.style.display = "none";
            ETFsShowRef.current.style.display = "none";
            ForexActiveClassRef.current.classList.remove('active');
            CryptoActiveClassRef.current.classList.remove('active');
            CommoditiesActiveClassRef.current.classList.remove('active');
            IndicesActiveClassRef.current.classList.remove('active');
            ETFsActiveClassRef.current.classList.remove('active');

        }
        if (data === 'Crypto') {
            CryptoShowRef.current.style.display = "block";
            CryptoActiveClassRef.current.classList.add("active");

            ForexShowRef.current.style.display = "none";
            StocksShowRef.current.style.display = "none";
            CommoditiesShowRef.current.style.display = "none";
            IndiceshowRef.current.style.display = "none";
            ETFsShowRef.current.style.display = "none";
            ForexActiveClassRef.current.classList.remove('active');
            StocksActiveClassRef.current.classList.remove('active');
            CommoditiesActiveClassRef.current.classList.remove('active');
            IndicesActiveClassRef.current.classList.remove('active');
            ETFsActiveClassRef.current.classList.remove('active');

        }
        if (data === 'Commodities') {
            CommoditiesShowRef.current.style.display = "block";
            CommoditiesActiveClassRef.current.classList.add("active");

            ForexShowRef.current.style.display = "none";
            CryptoShowRef.current.style.display = "none";
            StocksShowRef.current.style.display = "none";
            IndiceshowRef.current.style.display = "none";
            ETFsShowRef.current.style.display = "none";
            ForexActiveClassRef.current.classList.remove('active');
            CryptoActiveClassRef.current.classList.remove('active');
            StocksActiveClassRef.current.classList.remove('active');
            IndicesActiveClassRef.current.classList.remove('active');
            ETFsActiveClassRef.current.classList.remove('active');

        }
        if (data === 'Indices') {
            IndiceshowRef.current.style.display = "block";
            IndicesActiveClassRef.current.classList.add("active");

            ForexShowRef.current.style.display = "none";
            CryptoShowRef.current.style.display = "none";
            CommoditiesShowRef.current.style.display = "none";
            StocksShowRef.current.style.display = "none";
            ETFsShowRef.current.style.display = "none";
            ForexActiveClassRef.current.classList.remove('active');
            CryptoActiveClassRef.current.classList.remove('active');
            CommoditiesActiveClassRef.current.classList.remove('active');
            StocksActiveClassRef.current.classList.remove('active');
            ETFsActiveClassRef.current.classList.remove('active');

        }
        if (data === 'ETFs') {
            ETFsShowRef.current.style.display = "block";
            ETFsActiveClassRef.current.classList.add("active");

            ForexShowRef.current.style.display = "none";
            CryptoShowRef.current.style.display = "none";
            CommoditiesShowRef.current.style.display = "none";
            IndiceshowRef.current.style.display = "none";
            StocksShowRef.current.style.display = "none";
            ForexActiveClassRef.current.classList.remove('active');
            CryptoActiveClassRef.current.classList.remove('active');
            CommoditiesActiveClassRef.current.classList.remove('active');
            IndicesActiveClassRef.current.classList.remove('active');
            StocksActiveClassRef.current.classList.remove('active');

        }

    }

    return (
        <>
            <section className='container-custom  py-5 m-0 p'>

                <div className="all-market shadow-lg p-3 pt-4  rounded">
                    <div className="all-market-title">
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="all-market-name " onClick={() => CryptoMarketShow('Forex')}>
                                <p className='active' ref={ForexActiveClassRef}>Forex</p>
                            </div>
                            <div className="all-market-name" onClick={() => CryptoMarketShow('Stocks')}>
                                <p ref={StocksActiveClassRef}>Stocks</p>
                            </div>
                            <div className="all-market-name" onClick={() => CryptoMarketShow('Crypto')}>
                                <p ref={CryptoActiveClassRef}>Crypto</p>
                            </div>
                            <div className="all-market-name">
                                <p ref={CommoditiesActiveClassRef} onClick={() => CryptoMarketShow('Commodities')}>Commodities</p>
                            </div>
                            <div className="all-market-name">
                                <p ref={IndicesActiveClassRef} onClick={() => CryptoMarketShow('Indices')}>Indices</p>
                            </div>
                            <div className="all-market-name">
                                <p ref={ETFsActiveClassRef} onClick={() => CryptoMarketShow('ETFs')}>ETFs</p>
                            </div>
                        </div>
                    </div>


                    <div ref={ForexShowRef}>
                        <Forex></Forex>
                    </div>


                    <div style={{ display: 'none' }} ref={StocksShowRef}>
                        <Stocks></Stocks>
                    </div>


                    <div style={{ display: 'none' }} ref={CryptoShowRef}>
                        <Crypto></Crypto>
                    </div>


                    <div style={{ display: 'none' }} ref={CommoditiesShowRef}>

                    </div>


                    <div style={{ display: 'none' }} ref={IndiceshowRef}>

                    </div>


                    <div style={{ display: 'none' }} ref={ETFsShowRef}>

                    </div>




                </div>

            </section>
        </>
    );
};

export default AllMarkets;