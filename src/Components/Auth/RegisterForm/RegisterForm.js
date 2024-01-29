import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Button from 'react-bootstrap/Button';
import { Alert, Form } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import logo from './logo.png';
const RegisterForm = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');


    const { LoginWithEmail, setUser, authUser } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/dashboard";







    const [userData, setUserData] = useState({});
    const [user, setUserValue] = useState({});
    const [userEmailError, setUserEmailError] = useState({})
    const refSubmitEmail = useRef();


    const handleRegister = event => {
        refSubmitEmail.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('http://66.29.142.198:5000/api/user/auth/signup/email', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setUserEmailError(data);
                    refSubmitEmail.current.removeAttribute("disabled")
                } else {
                    setUserData(data)
                }
            })
            .catch(error => console.log(error));
    }

    const handleInputBlur = event => {
        setUserEmailError({})
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        // console.log(newUser);
        newUser[field] = value;
        setUserValue(newUser);
    }
    // Verify Code Section 


    const [userCode, setUserCode] = useState({});
    const [userCodeData, setUserCodeData] = useState({});
    const [userCodeError, setUserCodeError] = useState({});
    const refSubmitCode = useRef();

    const handleRegisterVerifyCode = event => {
        refSubmitCode.current.setAttribute("disabled", true);
        event.preventDefault();
        setResend({});
        fetch('http://66.29.142.198:5000/api/user/auth/signup/email/verify', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization':
                    `Beare ${userData.token}`,
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
        const newUser = { ...setUserCode, email: userData?.data?.email };
        // console.log(newUser);
        newUser[field] = value;
        setUserCode(newUser);
    }

    // console.log(userData)
    // console.log(userCode)


    // resend 
    const refSubmitCodeResend = useRef();
    const [resend, setResend] = useState({});
    const handleResendCode = event => {
        event.preventDefault();
        refSubmitEmail.current.setAttribute("disabled", true);
        setUserCodeError({});
        setResend({})
        const data = { email: userData.data.email }
        fetch('http://66.29.142.198:5000/api/user/auth/signup/email', {
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
                    refSubmitEmail.current.removeAttribute("disabled")
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
        fetch('http://66.29.142.198:5000/api/user/auth/signup', {
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
                    const expires = new Date(Date.now() + 30*60*1000).toUTCString();
                    document.cookie = `gffex_token=OiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmJ1c2VyX25hbWMzODM5NX0VzZXJfaWQiOiI2M2InVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM; expires=${expires};`;
                    event.target.reset();
                    console.log(user.data)
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
            {/* <header className='container-custom py-3 login-area app'  data-theme={theme}>
                <div className="logo">
                   <Link> <img src="https://static.mocortech.com/www/static/images/mexc-logo-light.svg?v=100001" alt="" /></Link>
                </div>
                <div className="language">
                    <Link><i class="fa-solid fa-globe"></i></Link>
                </div>
            </header> */}
            <section className='login-section'>

                <div class="login-card">
                    <div className="py-2">
                        <Link to='/'> <img src={logo} alt="" /></Link>
                    </div>
                    <h2>Signup</h2>

                    {resend?.success === true ? <span className=' text-start ms-2 py-4'>Code Resend Successfull</span> : ''}

                    <form onSubmit={handleRegister} style={{ display: userData.success === true ? 'none' : '' }}>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onBlur={handleInputBlur} placeholder="Enter your email" />
                        <span className='text-danger text-start ms-2'>{userEmailError?.message}</span>
                        {/* <button type="submit" >Next</button> */}
                        <Button type="submit" ref={refSubmitEmail} className='mt-3'> Next</Button>
                    </form>

                    <form onSubmit={handleRegisterVerifyCode} style={{ display: userCodeData.success === true ? 'none' : userData.success === true ? '' : 'none' }}>

                        <label htmlFor="code">Verify code</label>
                        <input type="text" id="code" name="code" onBlur={CodehandleInputBlur} placeholder="Enter your code" />
                        <span className='text-danger text-start ms-2'>{userCodeError?.message}</span>
                        {/* <button type="submit" >Next</button> */}
                        <Button type="submit" ref={refSubmitCode} className='mt-3'>verify</Button>
                        <form onClick={handleResendCode} method="post">
                            <Button type="submit" ref={refSubmitCodeResend} className='mt-3'>resend code</Button>
                        </form>

                    </form>
                    {userPasswordError?.success === false ? <span className='text-danger text-start ms-2 py-4'>{userPasswordError.message}</span> : ''}
                    
                    <form onSubmit={handleRegisterPassword} style={{ display: userCodeData.success === true ? '' : 'none' }}>

                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" onBlur={passwordhandleInputBlur} placeholder="Enter your code" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onBlur={passwordhandleInputBlur} placeholder="Enter your password" />

                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" id="cpassword" name="cpassword" onBlur={passwordhandleInputBlur} placeholder="Enter your confirm password" />
                        {/* <button type="submit" >Next</button> */}
                        <Button type="submit" ref={refSubmitPassword} className='mt-3'> Signup</Button>
                    </form>



                    <div class="switch">Already have an account?  <Link to="/login" >Login here</Link></div>

                </div>
            </section>


            <div className="support-btn-area" title='support'>
                <div className="support-btn">
                    <Link to=''><i class="fa-brands fa-whatsapp"></i></Link>
                    <Link to=''><i class="fa-brands fa-telegram"></i></Link>
                    <Link to=''><i class="fa-brands fa-facebook-messenger"></i></Link>
                    <Link to=''><i class="fa-regular fa-envelope"></i></Link>
                </div>
                <i className="fa-solid fa-headset support-btn-show"></i>
            </div>
        </>
    );
};

export default RegisterForm;