import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Sliders = ({data}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> </span>';
        },

    };


    return (
        <>
            <div className="container-custom desktop-version">
                <div className="home-slider">
                    <Swiper
                        breakpoints={{
                            576: {
                                width: 576,
                                slidesPerView: 2,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            992: {
                                width: 992,
                                slidesPerView: 4,
                            },
                            1024: {
                                width: 1024,
                                slidesPerView: 4,
                            },
                            1200: {
                                width: 1024,
                                slidesPerView: 4,
                            },
                        }}
                        //   onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        //     pauseOnMouseEnter: true,
                        // }}

                        // loop={true}
                        spaceBetween={30}
                        // pagination={pagination}
                        // modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {data.map((data, index) => <SwiperSlide>
                            <img src={`https://demeserver.gffex.xyz/${data?.image_url}`} alt="" />
                        </SwiperSlide>)}
                    </Swiper>

                </div>
            </div>
        </>
    );
   
};

export default Sliders;