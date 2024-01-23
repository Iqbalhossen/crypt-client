import React, { useContext, useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const UserLogin = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');


    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/user/dashboard";



    const [userLoginSignupData, setUserLoginSignupData] = useState({});
    const [userSignupData, setUserSignupData] = useState({});
    const [userLoginSignupValue, setUserLoginSignupValue] = useState({});
    const refLoginSignupBtnDis = useRef();

    const handleLoginSignup = event => {
        refLoginSignupBtnDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('http://localhost:5000/api/user/auth/mobile/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userLoginSignupValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    refLoginSignupBtnDis.current.removeAttribute("disabled")
                } else {
                    console.log(data)
                    if (data.RegisterEmailSuccess === true) {
                        setUserSignupData(data)
                    } else {
                        setUserLoginSignupData(data)
                    }


                }
            })
            .catch(error => console.log(error));
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...userLoginSignupValue };
        // console.log(newUser);
        newUser[field] = value;
        setUserLoginSignupValue(newUser);
    }


    // Verify Code Section 
    const [userLoginSubmitData, setUserLoginSubmitData] = useState({});
    const [userLoginSubmitDataValue, setUserLoginSubmitDataValue] = useState({});
    const [userLoginSubmitErrorMeg, setUserLoginSubmitErrorMeg] = useState({});
    const refLoginSubmitDataBtnDis = useRef();

    const handleLoginSubmit = event => {
        refLoginSubmitDataBtnDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('http://localhost:5000/api/user/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userLoginSubmitDataValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setUserLoginSubmitErrorMeg(data)
                    refLoginSubmitDataBtnDis.current.removeAttribute("disabled")
                } else {
                    setUserLoginSubmitData(data)
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    const expires = new Date(Date.now() + 30 * 60 * 1000).toUTCString();
                    document.cookie = `gffex_token=OiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmJ1c2VyX25hbWMzODM5NX0VzZXJfaWQiOiI2M2InVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM; expires=${expires};`;
                    event.target.reset();
                    if (user.data) {
                        navigate(userFrom, { replace: true });
                    }
                }
            })
            .catch(error => console.log(error));
    }

    const handleLoginSubmitInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...userLoginSubmitDataValue, email: userLoginSignupData?.data?.email };
        // console.log(newUser);
        newUser[field] = value;
        setUserLoginSubmitDataValue(newUser);
    }
    // Verify Code Section 
    // Verify Code Section 


    const [userCode, setUserCode] = useState({});
    const [userCodeData, setUserCodeData] = useState({});
    const [userCodeError, setUserCodeError] = useState({});
    const refSubmitCode = useRef();

    const handleRegisterVerifyCode = event => {
        refSubmitCode.current.setAttribute("disabled", true);
        event.preventDefault();
        setResend({});
        fetch('http://localhost:5000/api/user/auth/signup/email/verify', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                    `Beare ${userSignupData.token}`,
            },
            body: JSON.stringify(userCode)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setUserCodeError(data);
                    refSubmitCode.current.removeAttribute("disabled")
                } else {
                    setUserCodeData(data)

                }
            })
            .catch(error => console.log(error));
    }

    const CodehandleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...setUserCode, email: userSignupData?.data?.email };
        // console.log(newUser);
        newUser[field] = value;
        setUserCode(newUser);
    }



    // resend 
    const refSubmitCodeResend = useRef();
    const [resend, setResend] = useState({});
    const handleResendCode = event => {
        event.preventDefault();
        setUserCodeError({});
        setResend({})
        const data = { email: userSignupData.data.email }
        fetch('http://localhost:5000/api/user/auth/signup/email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    console.log(data)
                } else {
                    setResend(data)
                }
            })
            .catch(error => console.log(error));
    }


    const refSubmitPassword = useRef();
    const [userPassword, setUserPassword] = useState({});
    const [userPasswordError, setUserPasswordError] = useState({});

    const handleRegisterPassword = event => {
        event.preventDefault();
        refSubmitPassword.current.setAttribute("disabled", true);
        console.log(userPassword);
        fetch('http://localhost:5000/api/user/auth/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userPassword)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setUserPasswordError(data);
                    refSubmitPassword.current.removeAttribute("disabled")
                } else {
                    setUserCode(data)
                    const user = data;
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    const expires = new Date(Date.now() + 30 * 60 * 1000).toUTCString();
                    document.cookie = `gffex_token=OiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmJ1c2VyX25hbWMzODM5NX0VzZXJfaWQiOiI2M2InVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM; expires=${expires};`;
                    event.target.reset();
                    if (user.data) {
                        // LoginWithEmail(user.data);
                        navigate(userFrom, { replace: true });
                    }
                }
            })
            .catch(error => console.log(error));
    }

    const passwordhandleInputBlur = event => {
        setUserPasswordError({});
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...userPassword, email: userCode?.email };
        // console.log(newUser);
        newUser[field] = value;
        setUserPassword(newUser);
    }


    return (
        <>
            <div className="app" data-theme={theme}>
                <section className='mobile-version user-login-mobile'>
                    <div className="user-login-title">
                        <div className="container-custom">
                            <h4>Welcome to Gffex</h4>
                            <p>First login counts as sign-up</p>
                        </div>
                    </div>
                    <div className="user-mobile-login-form" style={{ display: userLoginSignupData?.LoginEmailSuccess === true || userSignupData?.RegisterEmailSuccess === true || userCodeData.success ? 'none' : '' }}>
                        <div className="container-custom py-3">
                            <form onSubmit={handleLoginSignup}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <label htmlFor="email">Email</label>
                                    <Link to='/user/forgot/password'>Forget</Link>
                                </div>
                                <br />
                                <div class="d-grid">
                                    <input type="email" name='email' onBlur={handleInputBlur} id='email' placeholder='Enter your email address' /><br />
                                    <button ref={refLoginSignupBtnDis} type="submit">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="user-mobile-login-form" style={{ display: userLoginSignupData?.LoginEmailSuccess === true ? 'block' : 'none' }}>
                        <div className="container-custom py-3">
                            <form onSubmit={handleLoginSubmit}>
                                <label htmlFor="password">Password</label><br />
                                <div class="d-grid">
                                    <input type="password" name='password' onBlur={handleLoginSubmitInputBlur} id='password' placeholder='Enter your password' /><br />
                                    {userLoginSubmitErrorMeg?.success === false ? <span className='text-danger text-start ms-2 pb-0-'>{userLoginSubmitErrorMeg.message}</span> : ''}
                                    <br />
                                    <button ref={refLoginSubmitDataBtnDis} type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="user-mobile-login-form" style={{ display: userSignupData?.RegisterEmailSuccess === true ? userCodeData.success === true ? 'none' : 'block' : 'none' }}>
                        <div className="container-custom py-3">
                            <form onSubmit={handleRegisterVerifyCode}>
                                <label htmlFor="code">Verify Code</label><br />
                                <div class="d-grid">
                                    <input type="text" name='code' onBlur={CodehandleInputBlur} id='code' placeholder='Enter your code' /><br />
                                    {userCodeError?.success === false ? <span className='text-danger text-start ms-2 pb-0-'>{userCodeError.message}</span> : ''}
                                    <br />
                                    <button ref={refSubmitCode} type="submit">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="user-mobile-login-form" style={{ display: userCodeData.success === true ? '' : 'none' }}>
                        <div className="container-custom py-3">
                            {userPasswordError?.success === false ? <span className='text-danger text-start ms-2 py-4'>{userPasswordError.message}</span> : ''}

                            <form onSubmit={handleRegisterPassword}>
                                <label htmlFor="name">Name</label>
                                <br />
                                <div class="d-grid">
                                    <input type="text" name='name' onBlur={passwordhandleInputBlur} id='name' placeholder='Enter your name' />
                                    <br />
                                </div>

                                <label htmlFor="password">password</label>
                                <br />
                                <div class="d-grid">
                                    <input type="password" name='password' onBlur={passwordhandleInputBlur} id='password' placeholder='Enter your password' />
                                    <br />
                                </div>
                                <label htmlFor="cpassword">confirm password</label>
                                <br />
                                <div class="d-grid">
                                    <input type="password" name='cpassword' onBlur={passwordhandleInputBlur} id='cpassword' placeholder='Enter your confirm password' />
                                    <br />
                                </div>

                                <div class="d-grid">
                                    <button ref={refSubmitPassword} type="submit">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </section>

            </div>
        </>
    );
};

export default UserLogin;