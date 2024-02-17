import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleItem from './SingleItem';

const Crypto = () => {

    // 


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/crypto/currency/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });


    }, [])


    return (
        <>
                 <div className="all-market-details">
                <div className="all-market-details-top d-flex justify-content-between align-items-center">
                    <div className="total-market-name">
                        <Link>{data?.length} Crypto pairs<i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                    <div className="market-trade-amount">
                        <p>$10</p>
                        <small>Min deposit</small>
                    </div>
                    <div className="market-trade-amount">
                        <p>$1</p>
                        <small>Minimum trade</small>
                    </div>

                </div>
            </div>

            <div>
                <div class="css-mkny2 exgjjq30">
                    <div class="css-4c2x90 exgjjq31">
                        <span dir="auto">Name</span>
                    </div>

                    <div class="css-g7jqpb exgjjq31">
                        <span dir="auto">Bid</span>
                    </div>
                    <div class="css-g7jqpb exgjjq31">
                        <span dir="auto">Ask</span></div>
                    <div class="css-1q6uvqr exgjjq31"
                    ><span dir="auto">1D change</span>
                    </div>
                    <div class="css-1xpbnbm exgjjq31">
                    </div>
                </div>
                <div>

                    <section className='pc-top-futures-section p-0'>
                        <div className="ant-tabs-content-holder">
                            <div className="ant-tabs-content ant-tabs-content-top">
                                <div className="ant-table-content" >
                                    <table class="table">
                                        <thead>

                                        </thead>
                                        <tbody>

                                        {data.map((data, index) => <SingleItem data={data} key={data?._id}></SingleItem>)} 





                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
};

export default Crypto;