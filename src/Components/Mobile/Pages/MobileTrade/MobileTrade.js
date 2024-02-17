import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';

const MobileTrade = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const [currencies, setcurrencies] = useState([]);
    const [pair, setpair] = useState("");
    const [price, setprice] = useState("0.00");
    const [pastData, setpastData] = useState({});
    const ws = useRef(null);

    let first = useRef(false);
    const url = "https://api.pro.coinbase.com";

    useEffect(() => {
        ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    
        let pairs = [];
    
        const apiCall = async () => {
          await fetch(url + "/products")
            .then((res) => res.json())
            .then((data) => (pairs = data));
          
          let filtered = pairs.filter((pair) => {
            if (pair.quote_currency === "USD") {
              return pair;
            }
          });
    
          filtered = filtered.sort((a, b) => {
            if (a.base_currency < b.base_currency) {
              return -1;
            }
            if (a.base_currency > b.base_currency) {
              return 1;
            }
            return 0;
          });
    
          
          setcurrencies(filtered);
    
          first.current = true;
        };
    
        apiCall();
      }, []);

    useEffect(() => {
        if (!first.current) {

            return;
        }


        let msg = {
            type: "subscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let jsonMsg = JSON.stringify(msg);
        ws.current.send(jsonMsg);

        let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
        const fetchHistoricalData = async () => {
            let dataArr = [];
            await fetch(historicalDataURL)
                .then((res) => res.json())
                .then((data) => (dataArr = data));

            // let formattedData = formatData(dataArr);
            // setpastData(formattedData);
        };

        fetchHistoricalData();

        ws.current.onmessage = (e) => {
            let data = JSON.parse(e.data);
            if (data.type !== "ticker") {
                return;
            }

            if (data.product_id === pair) {
                setprice(data.price);
            }
        };
    }, [pair]);

    const handleSelect = (e) => {
        let unsubMsg = {
            type: "unsubscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let unsub = JSON.stringify(unsubMsg);

        ws.current.send(unsub);

        setpair(e.target.value);
    };


    useEffect(() => {
        fetch('https://api1.binance.com')
            .then((res) => res.json())
            .then((data) => (
                console.log(data)
            ));

    }, []);

    return (
        <>
            <div className="app" data-theme={theme}>
                <div className="mobile-future-coin-items py-2">
                    <div className="container-custom ">

                        <section className='py-xl-4 py-3 d-flex bd-highlight '>
                            <div className="notice-icon bd-highlight pe-3 mobile-version">
                                <i className="fa-solid fa-volume-high "></i>
                            </div>
                            <div className="notice-silder mobile-version mobile-notice-slider flex-grow-1 bd-highlight ">
                                <marquee>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laudantium vero! Accusamus iure non, dicta aliquam ut illum, obcaecati modi quae distinctio facilis aperiam perferendis corporis. Quo aspernatur vitae iure.
                                </marquee>
                            </div>
                            <div className=" mobile-notice-btn mobile-version  px-3">
                                <Link><i className="fa-solid fa-list-ul"></i></Link>
                            </div>
                        </section>

                        <div className="mobile-future-coin-names d-flex align-items-center justify-content-between">
                            <div className="mobile-future-coin-name">
                            {
                                    <select name="currency" value={pair} onChange={handleSelect}>
                                        {currencies.map((cur, idx) => {
                                            return (
                                                <option key={idx} value={cur.id}>
                                                    {cur.display_name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                }
                            </div>

                            <div className="mobile-future-coin-icon">
                                <FontAwesomeIcon icon="fa-solid fa-chart-simple" />
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
                            </div>
{price}
                        </div>
                    </div>
                </div>

            </div>
            <MobileMenu />
        </>
    );
};

export default MobileTrade;