import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from './download.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Grid } from 'swiper/modules';

const NewListing = ({data}) => {

    return (
        <>

            <div className="py-3 desktop-version">
                <div className="New-Listing-title text-center pt-5">
                    <h2>{data?.title}</h2>
                    <div className="notice-more-btn  bd-highlight text-end w-100 container-custom mb-3">
                        <Link className="notices_more__UuCER" target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/support/categories/360000254192">
                            <span>View Market</span>
                            <svg className="sc-gEvEer hSTeNi mx-icon iconfont iconic_arrow1 notices_arrow__hcJeo" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined"><path d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path></svg></Link>
                    </div>
                    <div className="New-Listing-slider">
                        <Swiper


                            slidesPerView={4}
                            speed= {20000}
                            grid={{
                                rows: 2,
                                fill: "row",
                            }}
                            slidesOffsetAfter={0}
                            grabCursor={true}
                            mousewheelControl={true}
                            keyboardControl={true}
                            autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                            // spaceBetween={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Grid, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='' className='new-listing-area'>
                                    <div className="new-listing-content-area">
                                        <div className="new-listing-content-top d-flex  align-items-center">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXYSs2F_0O04sLv8AjIH43Owr2rEIfkFEOA&usqp=CAU" alt="" />
                                            <h6>Market Name</h6>
                                        </div>
                                        <div className="new-listing-content pt-2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="listing-content pe-5">
                                                        <h5>0.000004</h5>
                                                        <p>789%</p>
                                                    </div>
                                                    <img src={image} alt="" />
                                                </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>

                            </SwiperSlide>
                            <SwiperSlide>

                            </SwiperSlide>
                          
                        </Swiper>
                    </div>

                </div>
              
            </div>
        </>
    );
    
};

export default NewListing;