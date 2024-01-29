import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import dateFormat from "dateformat";
import axios from 'axios';
import Webcam from 'react-webcam';
const videoConstraints = {
    width: 480,
    height: 480,
    facingMode: "user"
};
const KycPage = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [kycTypeData, setkycTypeData] = useState({})

    const refKYCPage = useRef();
    const refKYCTypePage = useRef();

    const handleMenuItems = (data) => {
        if (data === 'Drivinglicense') {
            setkycTypeData({ type: 'Driving License' })
            refKYCPage.current.style.display = "none";
            refKYCTypePage.current.style.display = "block";
        }
        if (data === 'NIDCard') {
            setkycTypeData({ type: 'NID Card' })
            refKYCPage.current.style.display = "none";
            refKYCTypePage.current.style.display = "block";
        }
        if (data === 'Passport') {
            setkycTypeData({ type: 'Passport' })
            refKYCPage.current.style.display = "none";
            refKYCTypePage.current.style.display = "block";
        }
    }

    const [userImage, setUserImage] = useState(null)
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setUserImage(imageSrc)
        },
        [webcamRef]
    );




    const [results, setResults] = useState({});
    const [userfront_page_img, setUserfront_page_img] = useState('');
    const [userback_page_img, setUserback_page_img] = useState('');
    const [message, setMessage] = useState('');
    const refSubmitDis = useRef();

    const handlefront_page_img = (e) => {
        setMessage("")
        setUserfront_page_img(e.target.files[0])

    }
    const handleback_page_img = (e) => {
        setMessage("")
        setUserback_page_img(e.target.files[0])

    }


    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const userData = { user_img: userImage, user_id: authUser?._id,  name: authUser?.name, front_page_img: userfront_page_img, back_page_img: userback_page_img, type: kycTypeData?.type };
        if (userData.front_page_img === '') {
            setMessage("please choose Front page image");
        } else if (userData.back_page_img === '') {
            setMessage("please choose Back page image");
        } else if (userData.user_img === '') {
            setMessage("please take your image");
        } else {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };

            axios
                .post(`http://66.29.142.198:5000/api/kyc/verify/store`, userData, config)
                .then(data => {
                    event.target.reset();
                    setResults(data)
                    toast.success(`${data.data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
                .catch(error => {
                    refSubmitDis.current.removeAttribute("disabled");
                })
        }

    }


    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/kyc/verify/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [results])
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>KYC {data?.status === 0 ? 'Pending' : 'Verify'}</h1>
                        </div>



                    </div>

                    {/* deposit input  */}
                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-7">
                                    {data?.status === 0 ?

                                        <>
                                            <div className="w-75" ref={refKYCPage}>

                                                <div className="mb-3">
                                                    <label htmlFor="front_page_img" className="form-label">Front page </label> <br />
                                                    <img src={`http://66.29.142.198:5000/${data?.front_img}`} alt='' className='pt-2' />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="back_img" className="form-label">Back page </label> <br />
                                                    <img src={`http://66.29.142.198:5000/${data?.back_img}`} alt='' className='pt-2' />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="photo" className="form-label">photo </label>
                                                    <img src={data?.user_img} alt='' className='pt-2' />
                                                </div>

                                               
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="w-75" ref={refKYCPage}>
                                                <div className="d-flex">
                                                    <div className='thradeSettingDataRadio me-3'>
                                                        <input type="radio" name="thradeSetting_id" id='1' onClick={() => handleMenuItems('Drivinglicense')} />
                                                        <label htmlFor='1'><FontAwesomeIcon icon="fa-brands fa-cc-mastercard me-2" />Driving license </label>
                                                    </div>
                                                    <div className='thradeSettingDataRadio me-2'>
                                                        <input type="radio" name="thradeSetting_id" id='2' onClick={() => handleMenuItems('NIDCard')} />
                                                        <label htmlFor='2'><FontAwesomeIcon icon="fa-solid fa-sack-dollar me-2" /> NID card </label>
                                                    </div>
                                                    <div className='thradeSettingDataRadio'>
                                                        <input type="radio" name="thradeSetting_id" id='3' onClick={() => handleMenuItems('Passport')} />
                                                        <label htmlFor='3'><FontAwesomeIcon icon="fa-solid fa-sack-dollar me-2" /> Passport </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-75" style={{ display: 'none' }} ref={refKYCTypePage}>
                                                <h3>{kycTypeData?.type} KYC Verify  Confirm</h3>
                                                <form onSubmit={handleSubmitData}>
                                                    <div className="mb-3">
                                                        <label htmlFor="front_page_img" className="form-label">Front page </label>
                                                        <input type="file" onChange={handlefront_page_img} name='front_page_img' className="form-control" id="front_page_img" aria-describedby="emailHelp" required />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label htmlFor="back_page_img" className="form-label">Back page </label>
                                                        <input type="file" onChange={handleback_page_img} name='back_page_img' className="form-control" id="back_page_img" aria-describedby="emailHelp" required />
                                                    </div>
                                                    <div className="mb-3">
                                                        <div class="d-grid">
                                                            <label htmlFor="img">Your photo</label>
                                                            <div className="mobile-kyc-webcam text-center">
                                                                <Webcam
                                                                    height='480'
                                                                    audio={false}
                                                                    ref={webcamRef}
                                                                    screenshotFormat="image/jpeg"
                                                                    width='100%'
                                                                    videoConstraints={videoConstraints}
                                                                />

                                                                <img src={userImage} alt='' className='pt-2' />

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button ref={refSubmitDis} type="submit" className="btn btn-primary">Submit</button>
                                                </form>
                                                <button onClick={capture}>Take photo</button>

                                            </div>
                                        </>
                                    }

                                </div>
                                <div className="col-5">
                                    <div className="user-deposit-tips-area">
                                        <div className="user-deposit-tips-title">
                                            <h3>Withdrawal Notification</h3>
                                        </div>
                                        <div className="user-deposit-tips-dis">
                                            <p>Enjoy 0 transaction fees and fast speed for withdrawals made to your MEXC custodial wallet.</p>
                                            <p>Please do not withdraw funds to an ICO address or for crowdfunding. MEXC will not be responsible for distributing any future tokens you may receive.</p>
                                        </div>
                                    </div>
                                    <div className="user-deposit-faq-area">
                                        <div className="user-deposit-tips-title d-flex justify-content-between align-items-center">
                                            <h3>Withdrawal FAQ</h3>
                                            <Link>View More</Link>
                                        </div>
                                        <div className="user-deposit-faq-lists pt-4">
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                How to withdraw on MEXC?
                                            </Link>
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                Not receiving withdraw issue?
                                            </Link>
                                            <Link> <FontAwesomeIcon icon="fa-solid fa-receipt" />
                                                Withdrawn to the wrong address or filled in the wrong Memo/Tag?
                                            </Link>
                                        </div>
                                        <div className="user-deposit-faq-lists-btn py-3">
                                            <Link className='d-flex justify-content-between align-items-center'><span> <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" className='me-1' /> View all deposit & withdrawal status</span> <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default KycPage;