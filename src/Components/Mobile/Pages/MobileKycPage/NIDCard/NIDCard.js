import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import useLocalStorage from 'use-local-storage';
import Webcam from "react-webcam";
const videoConstraints = {
    width: 480,
    height: 480,
    facingMode: "user"
};
const NIDCard = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    const [results, setResults] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();



    const [userfront_page_img, setUserfront_page_img] = useState('');
    const [userback_page_img, setUserback_page_img] = useState('');
    const [message, setMessage] = useState('');

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
        const userData = { user_img: userImage, front_page_img: userfront_page_img, back_page_img: userback_page_img, type:'NID Card' };
        if (userData.front_page_img === '') {
            setMessage("please choose your image");
        } else {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`https://demeserver.gffex.xyz/api/kyc/verify/store`, userData, config)
                .then(data => {
                    event.target.reset();
                    setResults(data)

                })
                .catch(error => {
                    console.log(error)
                })

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
    return (
        <>
            <div className="app mobile-kyc-driving-license container-custom" data-theme={theme}>
                <h2>NID card Verify</h2>

                <section className='mobile-version user-login-mobile'>
                    <div className="user-mobile-login-form" >
                        <div className="container-custom py-3">
                            <form onSubmit={handleSubmitData}>

                                <div class="d-grid pb-2">
                                    <label htmlFor="front_page_img">Front page</label>
                                    <input type="file" onChange={handlefront_page_img} name='front_page_img' id='front_page_img' />
                                </div>
                                <div class="d-grid pb-2">
                                    <label htmlFor="back_page_img">Back page</label>
                                    <input type="file" onChange={handleback_page_img} name='back_page_img' id='back_page_img' />
                                </div>
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
                                        <button onClick={capture}>Take photo</button>

                                        <img src={userImage} alt='' />
                                    </div>
                                    <br />
                                    <br />
                                    <button type="submit">Verify</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};


export default NIDCard;