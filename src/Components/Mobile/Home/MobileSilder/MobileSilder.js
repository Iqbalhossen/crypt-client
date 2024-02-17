import React, { useContext, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLocalStorage from 'use-local-storage';
import { AuthContext } from '../../../../Contexts/AuthContext/MobileAuthProvider';
const MobileSilder = () => {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '"> </span>';
    //     },

    // };

    const { LoginWithEmail, setUser, authUser } = useContext(AuthContext);
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    const [authFindUser, setFindUser] = useState(JSON.parse(localStorage.getItem("ID")));
    // const [userKYC, setUserKYC] = useState([]);


    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/api/kyc/verify/view/${authFindUser?._id}`, {
    //         method: 'GET',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserKYC(data);
    //         });

    // }, [])

    return (
        <>

            <section className="mobile-version">

                <div className="Mobile-version-slider">
                    <Swiper
                        slidesPerView={1}
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
                        // pagination={pagination}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >

                        {data.map((data, index) => <SwiperSlide key={data?._id}>
                            <img src={`http://localhost:5000/${data?.image_url}`} alt="" />
                        </SwiperSlide>)}
                    </Swiper>

                </div>
                <div className="mobile-home-slider-menu-area">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link onClick={handleShow}> <i class="fa-solid fa-user"></i></Link>
                        <input type="text" placeholder="Search" />
                        <Link><i class="fa-solid fa-headphones"></i></Link>
                        <Link><i class="fa-regular fa-comment-dots"></i></Link>
                    </div>
                </div>

                <Offcanvas show={show} onHide={handleClose} className='app mobile-offcanvas-menu' backdrop="static" data-theme={theme}>
                    <Offcanvas.Header >
                        <div className="mobile-offcanvas-menu-hide">
                            <FontAwesomeIcon onClick={handleClose} icon="fa-solid fa-arrow-left" />
                        </div>
                        <div className='d-flex align-items-center'>
                            {theme === 'light' ?
                                <FontAwesomeIcon onClick={switchTheme} className='theme-sun-icon' icon="fa-solid fa-sun" />
                                :
                                <FontAwesomeIcon onClick={switchTheme} className='theme-moon-icon' icon="fa-regular fa-moon" />
                            }
                            <FontAwesomeIcon className='mobile-customer-care-menu-icon' icon="fa-solid fa-headphones" />
                        </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {authFindUser  ?     <div className="mobile-user-info-area-menu d-flex justify-content-between">
                            <div className="mobile-user-info-menu">
                                <h2>Nick Name</h2>
                                <p>arfiniqbal8@gmail.com</p>
                                {/* <p>UID: 1</p> */}
                            </div>
                            
                            <div className="mobile-user-kyc-verify-btn">
                                <Link to='kyc/page'>Verify <FontAwesomeIcon icon="fa-solid fa-angle-right" /></Link>
                            </div>
                        </div> : ''}
                     
                        <Link className="mobile-user-vip-area mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mobile-user-vip-conten">
                                    <p><FontAwesomeIcon icon="fa-regular fa-gem " className='me-2' /> Become VIP</p>
                                </div>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </div>
                        </Link>

                        <div className="mobile-toogle-menu-items-area pb-3">
                            <Link className='d-flex justify-content-between align-items-center'>
                                <div className="mobile-toogle-menu-item-conten">
                                    <p>
                                    <FontAwesomeIcon className='me-2' icon="fa-solid fa-user-plus" /> 
                                        Referral
                                    </p>
                                </div>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </Link>

                        </div>
                        <div className="mobile-toogle-menu-items-area pb-3">
                            <Link className='d-flex justify-content-between align-items-center'>
                                <div className="mobile-toogle-menu-item-conten">
                                    <p>
                                        <FontAwesomeIcon className='me-2' icon="fa-solid fa-gear" /> 
                                        Setting
                                    </p>
                                </div>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </Link>

                        </div>
                        <div className="mobile-toogle-menu-items-area pb-3">
                            <Link to='/fixed/deposit' className='d-flex justify-content-between align-items-center'>
                                <div className="mobile-toogle-menu-item-conten">
                                    <p>
                                        <FontAwesomeIcon className='me-2' icon="fa-solid fa-gear" /> 
                                        Fixed Deposit
                                    </p>
                                </div>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </Link>

                        </div>
                        <div className="mobile-toogle-menu-items-area pb-3">
                            <Link to='/mining' className='d-flex justify-content-between align-items-center'>
                                <div className="mobile-toogle-menu-item-conten">
                                    <p>
                                        <FontAwesomeIcon className='me-2' icon="fa-solid fa-gear" /> 
                                        Mining
                                    </p>
                                </div>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </Link>

                        </div>
                        <div className="mobile-toogle-menu-items-area pb-3">
                            <Link to='/loan' className='d-flex justify-content-between align-items-center'>
                                <div className="mobile-toogle-menu-item-conten">
                                    <p>
                                        <FontAwesomeIcon className='me-2' icon="fa-solid fa-gear" /> 
                                        Loan
                                    </p>
                                </div>
                                <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            </Link>

                        </div>
                      

                    </Offcanvas.Body>
                </Offcanvas>


            </section>


        </>
    );
};

export default MobileSilder;