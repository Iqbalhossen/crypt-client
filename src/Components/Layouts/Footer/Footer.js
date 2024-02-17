import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import MobileMenu from '../../Mobile/Home/MobileMenu/MobileMenu';
import { toast } from 'react-toastify';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
const Footer = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef(null)
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/footer/setting/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setData(data.data))
    }, [])

    const [Newsletter, setNewsletter] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/newsletter/setting/view`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setNewsletter(data.data))
    }, [])


    const [dataValue, setDataValue] = useState({});

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }

    const refSubmitDis = useRef();


    const handleSubmitForm = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const config = {
            headers: {
                'content-type': 'application/json',

            }
        };
        axios
            .post(`http://localhost:5000/api/user/subscribe/store`, dataValue, config)
            .then(data => {
                toast.success(`${data?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                event.target.reset();
                refSubmitDis.current.removeAttribute("disabled");
            })
            .catch(error => {
                if (error?.response?.data?.success === false) {
                    toast.error(`${error?.response?.data?.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refSubmitDis.current.removeAttribute("disabled");
                }
            })
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(false);
        }, 15000);
        return () => clearInterval(interval);
    }, []);


    const [socialSupportData, setSocialSupportData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/social/support/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setSocialSupportData(data?.data);
            });


    }, [])


    if (loading) {
        return (
            <>
                <div className='py-3'>
                    <Skeleton count={10} height={30} />
                </div>
            </>
        )

    } else {
        return (
            <>

                <footer className='footer-area container-custom pt-5 desktop-version'>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer__widget">
                                <Link href="/" className="logo">
                                    {/* <img src={logo} alt='' /> */}
                                    {/* <img src={logo} alt='' /> */}
                                    <img src={`http://localhost:5000/${data?.logo}`} alt="" />
                                </Link>
                                <p> {data?.dis}</p>
                                <ul className="post__share">
                                    <li>
                                        <a href="https://t.me/infogffex" target="__blank">
                                            <i className="fa-brands fa-telegram"></i>                              </a>
                                    </li>
                                    <li>
                                        <a href="https://mail.google.com/mail/u/0/?tab=rm&amp;amp;ogbl#inbox?compose=VpCqJbQVmPcgMbxgmNDfbGBScGbBRhnPxRGdqxFbhvbNfTQLxJwhxJklTZMnqPGPKRWgtxb" target="__blank">
                                            <i className="fa-solid fa-envelope"></i>                             </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/gffexvip" target="__blank">
                                            <i className="fa-brands fa-twitter"></i>                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer__widget">
                                <h5 className="title">Quick Links</h5>
                                <ul className="widget__links">
                                    <li>
                                        <a href="#"> <i className="fa-solid fa-angles-right"></i> <span >Home</span></a>
                                    </li>
                                    <li>
                                        <Link href="#"> <i className="fa-solid fa-angles-right"></i><span > Contact </span></Link>
                                    </li>
                                    <li>
                                        <Link to="/login"> <i className="fa-solid fa-angles-right"></i><span > Sign In </span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer__widget">
                                <h5 className="title">Policies</h5>
                                <ul className="widget__links">
                                    <li>
                                        <Link href="#"><i className="fa-solid fa-angles-right"></i><span > About us </span></Link>
                                    </li>
                                    <li>
                                        <Link href="#/policy/terms-of-service/94"> <i className="fa-solid fa-angles-right"></i><span > Terms Of Service </span></Link>
                                    </li>
                                    <li>
                                        <Link href="#/policy/privacy-policy/92"><i className="fa-solid fa-angles-right"></i><span > Privacy Policy </span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer__widget">
                                <h5 className="title">Our Newsletter</h5>
                                <p>{Newsletter?.dis}</p>
                                {/* <p>Subscribe our newsletter to get regullar news and  tips. we promise we won't harass you. Provident inventore dolorum minus</p> */}
                                <form onSubmit={handleSubmitForm} className="subscribe-form" id="subscribe-form">
                                    <input type="email" onBlur={handleInputBlur} className="form-control subscribe--form--control" required name="email" placeholder="Your Email Address" id="email" />
                                    <button ref={refSubmitDis} type="submit" className="cmn-btn">
                                        <i className="fa-regular fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </footer>
                <section className='company-info-area desktop-version'>
                    <div className="company-info border-custom">
                        <div className="row">
                            <div className="col-4">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                    <div className="company-info-content">
                                        <h6><Link to={`mailto:${data?.email}`}>{data?.email}</Link></h6>
                                        <span className="info">Email Address</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <div className="company-info-content">
                                        <h6><Link to={data?.phone}>{data?.phone}</Link></h6>
                                        <span className="info">Call Us Now</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <div className="company-info-content">
                                        <h6><Link to="#">{data?.address}</Link></h6>
                                        <span className="info">Our Address</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="back-top-btn-area desktop-version" title='back to top' onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} ref={scrollTop} style={{}}>
                    <i className="fa-solid fa-arrow-up-from-bracket desktop-version"></i>
                </div>
                <div className="support-btn-area desktop-version" title='support'>
                    <div className="support-btn">
                        <Link to={socialSupportData?.whatapp_link} target='_blank'><i className="fa-brands fa-whatsapp"></i></Link>
                        <Link to={socialSupportData?.tele_link} target='_blank'><i className="fa-brands fa-telegram"></i></Link>
                        <Link to={socialSupportData?.messenger} target='_blank'><i className="fa-brands fa-facebook-messenger"></i></Link>
                        <Link to='/ticket'><i className="fa-regular fa-envelope"></i></Link>
                    </div>
                    <Link to='/live/chat'><i className="fa-solid fa-headset support-btn-show"></i></Link>

                </div>


                <MobileMenu></MobileMenu>

            </>

        );

    }


};

export default Footer;