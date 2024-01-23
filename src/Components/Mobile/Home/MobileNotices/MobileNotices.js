import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const MobileNotices = () => {
    return (
        <>
            <section className='notices-section py-xl-4 d-flex bd-highlight mobile-version mobile-notice-area'>
                <div className="notice-icon bd-highlight mobile-version">
                    <i class="fa-solid fa-volume-high"></i>
                </div>
                <div className="notice-silder mobile-version mobile-notice-slider flex-grow-1 bd-highlight ">
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        centeredSlides={true}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        //     pauseOnMouseEnter: true,
                        // }}

                        modules={[Autoplay]}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Link to='#'>Voting Result and Listing Arrangement for Kickstarter - Synthalverse (SAI)</Link>
                        </SwiperSlide>
                        <SwiperSlide><Link to='#'>Voting Result and Listing Arrangement for Kickstarter - Synthalverse (SAI)2</Link></SwiperSlide>
                        <SwiperSlide><Link to='#'>Voting Result and Listing Arrangement for Kickstarter - Synthalverse (SAI)3</Link></SwiperSlide>
                        <SwiperSlide><Link to='#'>Voting Result and Listing Arrangement for Kickstarter - Synthalverse (SAI)4</Link></SwiperSlide>
                    </Swiper>
                </div>
                <div className=" mobile-notice-btn mobile-version">
                    <Link><i class="fa-solid fa-list-ul"></i></Link>
                </div>
            </section>

            <section className="pt-1 pb-2 mobile-home-sft-area text-center mobile-version">
                <div className="row">
                    <div className="col-3">
                        <Link><i class="fa-solid fa-parachute-box"></i>
                            <p>M-Day</p></Link>
                    </div>
                    <div className="col-3">
                        <Link>
                            <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            <p>$1000</p>
                        </Link>

                    </div>
                    <div className="col-3">
                        <Link>
                            <i class="fa-solid fa-rocket"></i>
                            <p>Rocket</p>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link>
                            <i class="fa-solid fa-gear"></i>
                            <p>KickStarter</p>
                        </Link>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-3">
                        <Link><i class="fa-solid fa-parachute-box"></i>
                            <p>M-Day</p></Link>
                    </div>
                    <div className="col-3">
                        <Link>
                            <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            <p>$1000</p>
                        </Link>

                    </div>
                    <div className="col-3">
                        <Link>
                            <i class="fa-solid fa-rocket"></i>
                            <p>Rocket</p>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link>
                            <i class="fa-solid fa-gear"></i>
                            <p>KickStarter</p>
                        </Link>
                    </div>
                </div>

                <div className="container-custom py-3">
                    <div class="d-grid gap-2">
                        <Link class="btn btn-primary" to="/user/login">Login</Link>
                        <Link class="btn btn-primary" >Trading</Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MobileNotices;