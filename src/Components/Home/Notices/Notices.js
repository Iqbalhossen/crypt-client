import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';


const Notices = ({data}) => {

    return (
        <>

            <section className='deskto-version notices-section container-custom py-xl-4 m-0 d-flex bd-highlight '>
                <div className="notice-icon  bd-highlight desktop-version">
                    <i class="fa-solid fa-volume-high"></i>
                </div>
                <div className="notice-silder flex-grow-1 bd-highlight desktop-version">
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}                         
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        modules={[Autoplay]}
                        loop={true}
                    >
                        {data.map((data, index) => <SwiperSlide key={data._id}>
                            <Link to='#'>{data?.name}</Link>
                        </SwiperSlide>)}

                    </Swiper>
                </div>
                <div className="notice-more-btn  bd-highlight desktop-version">
                    <a class="notices_more__UuCER" target="_blank" rel="noopener noreferrer" href="https://www.mexc.com/support/categories/360000254192"><span>View More</span><svg class="sc-gEvEer hSTeNi mx-icon iconfont iconic_arrow1 notices_arrow__hcJeo" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024" data-icon="ArrowRightOutlined"><path d="M128 469.333333h604.586667l-152.746667-153.173333L640 256l256 256-256 256-60.16-60.16L732.586667 554.666667H128z"></path></svg></a>
                </div>
            </section>


        </>

    );
   
};
export default Notices;