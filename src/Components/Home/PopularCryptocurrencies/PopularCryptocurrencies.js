import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const PopularCryptocurrencies = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/cryptocurrencies/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });


    }, [])
    
    let menu = ['Top Futures', 'Hot', 'Newest', 'Top Volume', 'Top Gainers']


    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en"
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
            <section className='popular-cryptocurrencies-section desktop-version'>
                <div className="pc-title">
                    <h2>{data?.name}</h2>
                    <div className="container-custom">
                        <div className="border-custom rounded-3 pc-tabs-list">

                            <div className="pc-tabs-nav">
                                <div className="pc-tabs-nav-list">
                                    <div className="pc-swiper-custom-pagination" />
                                    {/* <div className="pc-tab-nav-item-hot">
                                        <Link to='#'><span>Top Futures</span>
                                        <span class="hot-list_makerTitle">Maker 0% / Taker 0.02%</span>
                                        </Link>
                                    </div>
                                    <span className="pc-tab-nav-item">
                                        Newest
                                    </span>
                                    <div className="pc-tab-nav-item">
                                        <Link to='#'>Hot</Link>
                                    </div>
                                    <div className="pc-tab-nav-item">
                                        <Link to='#'>Top Volume</Link>
                                    </div>
                                    <div className="pc-tab-nav-item-hot-change">
                                        <Link to='#'><span>Top Gainers</span>
                                        <span class="hot-list_changes">159.74%</span>
                                        </Link>
                                    </div> */}
                                </div>
                                <div className="notice-more-btn  bd-highlight">
                                    <a class="notices_more__UuCER" target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/support/categories/360000254192"><span>View More</span><svg class="sc-gEvEer hSTeNi mx-icon iconfont iconic_arrow1 notices_arrow__hcJeo" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined"><path d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path></svg></a>
                                </div>
                            </div>

                            <Swiper
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}

                                loop={true}
                                spaceBetween={30}
                                pagination={{
                                    el: '.pc-swiper-custom-pagination',
                                    clickable: true,
                                    renderBullet: function (index, className) {
                                        return '<span class="' + className + ' pc-tab-nav-item">' + (menu[index]) + '</span>';
                                    }
                                }}


                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <section className='pc-top-futures-section'>
                                        <div className="ant-tabs-content-holder">
                                            <div className="ant-tabs-content ant-tabs-content-top">
                                                <div className="ant-table-content">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Trading Pair</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Change</th>
                                                                <th scope="col">Market</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {


                                                                coin.map((data, index) => <tr data={data} index={index} key={data._id}>  <td>{(data.id).toUpperCase()} USDT Perpetual</td>
                                                                    <td>{data.current_price}$</td>
                                                                    <td>{data.price_change_percentage_24h}%</td>
                                                                    <td>upcoming</td>
                                                                    <td><button type="button" class="btn btn-outline-primary">Trade</button></td> </tr>)

                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <section className='pc-top-futures-section'>
                                        <div className="ant-tabs-content-holder">
                                            <div className="ant-tabs-content ant-tabs-content-top">
                                                <div className="ant-table-content">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Trading Pair</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Change</th>
                                                                <th scope="col">Market</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {


                                                                coin.map((data, index) => <tr data={data} index={index} key={data._id}>  <td>{(data.id).toUpperCase()} USDT Perpetual</td>
                                                                    <td>{data.current_price}$</td>
                                                                    <td>{data.price_change_percentage_24h}%</td>
                                                                    <td>upcoming</td>
                                                                    <td><button type="button" class="btn btn-outline-primary">Trade</button></td> </tr>)

                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <section className='pc-top-futures-section'>
                                        <div className="ant-tabs-content-holder">
                                            <div className="ant-tabs-content ant-tabs-content-top">
                                                <div className="ant-table-content">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Trading Pair</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Change</th>
                                                                <th scope="col">Market</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {


                                                                coin.map((data, index) => <tr data={data} index={index} key={data._id}>  <td>{(data.id).toUpperCase()} USDT Perpetual</td>
                                                                    <td>{data.current_price}$</td>
                                                                    <td>{data.price_change_percentage_24h}%</td>
                                                                    <td>upcoming</td>
                                                                    <td><button type="button" class="btn btn-outline-primary">Trade</button></td> </tr>)

                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <section className='pc-top-futures-section'>
                                        <div className="ant-tabs-content-holder">
                                            <div className="ant-tabs-content ant-tabs-content-top">
                                                <div className="ant-table-content">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Trading Pair</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Change</th>
                                                                <th scope="col">Market</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {


                                                                coin.map((data, index) => <tr data={data} index={index} key={data._id}>  <td>{(data.id).toUpperCase()} USDT Perpetual</td>
                                                                    <td>{data.current_price}$</td>
                                                                    <td>{data.price_change_percentage_24h}%</td>
                                                                    <td>upcoming</td>
                                                                    <td><button type="button" class="btn btn-outline-primary">Trade</button></td> </tr>)

                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <section className='pc-top-futures-section'>
                                        <div className="ant-tabs-content-holder">
                                            <div className="ant-tabs-content ant-tabs-content-top">
                                                <div className="ant-table-content">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Trading Pair</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Change</th>
                                                                <th scope="col">Market</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {


                                                                coin.map((data, index) => <tr data={data} index={index} key={data._id}>  <td>{(data.id).toUpperCase()} USDT Perpetual</td>
                                                                    <td>{data.current_price}$</td>
                                                                    <td>{data.price_change_percentage_24h}%</td>
                                                                    <td>upcoming</td>
                                                                    <td><button type="button" class="btn btn-outline-primary">Trade</button></td> </tr>)

                                                            }

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </SwiperSlide>


                            </Swiper>

                        </div>
                    </div>

                </div>
                
            </section>
            <div className="text-center py-5 start-trading-btn desktop-version">
                <Link to='#' className="btn btn-primary px-5 py-3">Start Trading</Link>
            </div>

        </>
    );
};

export default PopularCryptocurrencies;