import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Sliders = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> </span>';
        },

    };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/slider/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])


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
                        }}
                        //   onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        loop={true}
                        spaceBetween={30}
                        pagination={pagination}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {data.map((data, index) => <SwiperSlide>
                            <img src={`http://localhost:5000/${data?.image_url}`} alt="" />
                        </SwiperSlide>)}



                        {/* <SwiperSlide>
                            <img src="https://www.mexc.com/api/file/download/F202311130012482347ELAmaCqEq4ggl" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="https://www.mexc.com/api/file/download/F20231020162459266iIBecVVgQpOQHl" alt="" /></SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.mexc.com/api/file/download/F20231021154639768QBdULDXpG1RyGK" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.mexc.com/api/file/download/F202311130012482347ELAmaCqEq4ggl" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="https://www.mexc.com/api/file/download/F20231020162459266iIBecVVgQpOQHl" alt="" /></SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.mexc.com/api/file/download/F20231021154639768QBdULDXpG1RyGK" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://www.mexc.com/api/file/download/F202311130012482347ELAmaCqEq4ggl" alt="" />
                        </SwiperSlide>
                        <SwiperSlide><img src="https://www.mexc.com/api/file/download/F20231020162459266iIBecVVgQpOQHl" alt="" /></SwiperSlide> */}
                    </Swiper>

                </div>
            </div>
        </>
    );
};

export default Sliders;