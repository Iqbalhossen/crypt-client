import React, { useEffect, useState } from 'react';

const MainSpotItems = () => {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=100&sparkline=false&locale=en"
    const [coin, setCoin] = useState([]);

    useEffect(() => {
        fetch(url
            , {
                method: 'GET',
            })
            .then((res) => res.json())
            .then((data) => {
                setCoin(data);
                // console.log(data)
            });
        // axios.get(url).then((response) => {
        //     const theUsers = response.data;
        //     setCoin(theUsers);
        // });
    }, []);

    return (
        <>
              <div className="container-custom">
                    <div className="market-content-sub-menu">
                        <span>USDT</span>
                        <span>USDC</span>
                        <span>ETH</span>
                        <span>BTC</span>
                    </div>

                </div>

                <div className="home-crypto-data-area">
                    <div className="container-custom">
                        <div className="row py-3 home-crypto-data-title">
                            <div className="col-6">
                                <p>Name / Vol</p>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>Last Price</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p>Change</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div >
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC <small> / USDT</small></h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-danger">-1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home-crypto-data-list">
                                <div className="col-6">
                                    <h6>BTC USDT</h6>
                                    <p>Perpetual</p>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6 text-center">
                                            <h6>37767.9</h6>
                                            <p>$2334345.4</p>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div class="d-grid gap-2 ps-3">
                                                <span class="btn btn-success">+1.19%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
        </>
    );
};

export default MainSpotItems;