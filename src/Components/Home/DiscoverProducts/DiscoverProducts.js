import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';

const DiscoverProducts = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/our/products/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });
    }, [])

    const [Title, setTitle] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/our/products/title/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setTitle(data?.data);
            });

    }, [])
    return (
        <>
            <section className='discover-products-area desktop-version'>
                <h2>{Title?.title}</h2>
                <div className="discover-products-items-list">


                {data.map((data, index) => <SingleItem data={data} key={data?._id}></SingleItem>)}


                    {/* <div className="discover-products-items border-custom rounded-3">
                        <div className="discover-products-item-list">
                            <img src="https://www.mexc.com/images/new-home/product-spot_2x.png?v=1003" alt="mexc" />
                            <div className="discover-products-item">
                                <h3>Spot</h3>
                                <p>Tons of Cryptos. Fast Crypto Listing.</p>
                                <p class="products_des__CFIiD">We rank top in the quantity of crypto listed among the first-tier exchanges.</p>
                                <div className="notice-more-btn  bd-highlight">
                                    <a class="notices_more__UuCER" target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/support/categories/360000254192"><span>Learn more</span><svg class="sc-gEvEer hSTeNi mx-icon iconfont iconic_arrow1 notices_arrow__hcJeo" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined"><path d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </section>
        </>
    );
};

export default DiscoverProducts;