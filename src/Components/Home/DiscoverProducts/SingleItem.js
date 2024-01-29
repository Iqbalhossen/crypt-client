import React from 'react';

const SingleItem = ({data}) => {
    return (
        <>
             <div className="discover-products-items border-custom rounded-3 mb-3">
                        <div className="discover-products-item-list">
                            <img src={`http://66.29.142.198:5000/${data?.image_url}`} alt="gffex" />
                            <div className="discover-products-item">
                                <h3>{data?.title}</h3>
                                <p>{data?.short_dis}</p>
                                <p class="products_des__CFIiD">{data?.long_dis}</p>
                                <div className="notice-more-btn  bd-highlight">
                                    <a class="notices_more__UuCER" target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/support/categories/360000254192"><span>Learn more</span><svg class="sc-gEvEer hSTeNi mx-icon iconfont iconic_arrow1 notices_arrow__hcJeo" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined"><path d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path></svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default SingleItem;