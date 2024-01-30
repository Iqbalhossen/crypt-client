import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from './image1.jpeg'
import image2 from './image2.jpg'
import image3 from './image3.jpeg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const Testimonial = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"> </span>';
        },

    };

    return (
        <>
            <section className="testimonial-area">
                <div className="testimonial-title pb-2">
                    <h4>What the market leaders says about crypto <br /> & The digital trading system</h4>
                
                </div>
                <div className="testimonial">
                        <Swiper

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


                            <SwiperSlide>
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img src={image1} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <div className="testimonial-rating">
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                        </div>
                                        <div className="testimonial-dis">
                                            <p>Bitcoin is the future</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <Link> Michael Saylor</Link>
                                            <small>Founder & Chairman</small>
                                            <small>MicroStrategy</small>
                                        </div>

                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img src={image2} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <div className="testimonial-rating">
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                        </div>
                                        <div className="testimonial-dis">
                                            <p>The only thing I own of any significance beyond Tesla & SpaceX stock is Bitcoin. And then some Etherium and Dogecoin.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <Link>Elon Musk</Link>
                                            <small>Founder & Ceo</small>
                                            <small>Tesla & SpaceX</small>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <img src={image3} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <div className="testimonial-rating">
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                            <FontAwesomeIcon icon="fa-solid fa-star" />
                                        </div>
                                        <div className="testimonial-dis">
                                            <p>Bitcoin is no different than what gold represented for thousands of years. It is an asset class that protects you.</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <Link>Laurence D. Fink</Link>
                                            <small>Chairman and Chief Executive Officer of BlackRock</small>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
            </section>
        </>
    );
};

export default Testimonial;