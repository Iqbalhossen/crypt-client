import React, { useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Link, useParams, } from 'react-router-dom';
import logo from './logo.png';
import { Button } from 'react-bootstrap';

const ReSetPassword = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const { id, token } = useParams();

    const [userToken, setTokenData] = useState({});
    const [SuccessData, setSuccessData] = useState({});
    const [user, setUserValue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();

    const handleSubmit = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch(`https://demeserver.gffex.xyz/api/user/auth/passowrd/reset/${id}/${token}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.token_success === false) {
                    setTokenData(data)
                }
                if (data?.success === false) {
                    setErrorMessage(data)
                    refSubmitDis.current.removeAttribute("disabled");
                }

                if (data?.success === true) {
                    setSuccessData(data)
                }

            })
            .catch(error => console.log(error));
    }

    const handleInputBlur = event => {
        setErrorMessage({})
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        // console.log(newUser);
        newUser[field] = value;
        setUserValue(newUser);
    }
    return (
        <>
            <div className="app" data-theme={theme}>

                <section className='login-section desktop-version'>
                    <div className="login-card">
                        <div className="py-2">
                            <Link to='/'> <img src={logo} alt="" /></Link>
                        </div>
                        <h2>Reset</h2>
                        {userToken?.token_success === false ? <span className='text-danger text-start ms-2 py-4 fs-4 fw-bolder'>{userToken.message}</span> : ''}
                        {SuccessData?.success === true ? <span className='text-success text-start ms-2 py-4 fs-4 fw-bolder'>{SuccessData.message}</span> : ''}
                        <form onSubmit={handleSubmit} >
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id="password" onBlur={handleInputBlur} placeholder="Enter your password" required />
                            <label htmlFor="cpassword" className='pt-3'>Confirm Password</label>
                            <input type="password" name='cpassword' id="cpassword" onBlur={handleInputBlur} placeholder="Enter your confirm password" required />
                            {errorMessage?.success === false ? <span className='text-danger text-start ms-2 py-2'>{errorMessage.message}</span> : ''}
                            <Button type="submit" ref={refSubmitDis} className='mt-3'>Submit</Button>
                        </form>
                    </div>
                </section>



                <section className='mobile-version user-login-mobile'>
                    <div className="user-login-title">
                        <div className="container-custom">
                            <h4>Reset</h4>
                            {/* <p>First login counts as sign-up</p> */}
                        </div>
                    </div>
                    <div className="user-mobile-login-form">
                        <div className="container-custom py-3">
                            {userToken?.token_success === false ? <span className='text-danger text-center ms-2 py-4 fs-4 fw-bolder'>{userToken.message}</span> : ''}
                            {SuccessData?.success === true ? <span className='text-success text-center text-start ms-2 py-4 fs-4 fw-bolder'>{SuccessData.message}</span> : ''}
                            <form onSubmit={handleSubmit}>
                                <div className="d-grid">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name='password' onBlur={handleInputBlur} id='password' placeholder='Enter your new password'  required />
                                    <label htmlFor="cpassword">Confirm Password</label>
                                    <input type="password" name='cpassword' onBlur={handleInputBlur} id='cpassword' placeholder='Enter confirm password' required />
                                    {errorMessage?.success === false ? <span className='text-danger text-start ms-2 py-2'>{errorMessage.message}</span> : ''}
                                    <button ref={refSubmitDis} className='mt-3' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>

            </div>

        </>
    );
};

export default ReSetPassword;