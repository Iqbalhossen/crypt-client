import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import logo from './logo.png';
const LoginForm = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
    const { LoginWithEmail, setUser, authUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const userFrom = location.state?.from?.pathname || "/dashboard";

    const [userData, setUserData] = useState({});
    const [user, setUserValue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();


    const handleRegister = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('http://66.29.142.198:5000/api/user/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })  
            .then(res => res.json())
            .then(data => {
                if (data.success === false) {
                    setErrorMessage(data);
                    refSubmitDis.current.removeAttribute("disabled");
                } else {
                    setUserData(data)
                    const user = data;
                    console.log(user)
                    localStorage.setItem("ID", JSON.stringify(user.data));
                    const expires = new Date(Date.now() + 30*6000*1000).toUTCString();
                    document.cookie = `gffex_token=OiJpcWJhbDExMSIsInVzZXJfaWQiOiI2M2VhNmE3MmJ1c2VyX25hbWMzODM5NX0VzZXJfaWQiOiI2M2InVzZXJfaWQiOiI2M2VhNmE3MmU4N2U5ZWJkNGM; expires=${expires};`;
                    event.target.reset();
                    if (user.data) {
                        LoginWithEmail(user.data);
                        navigate(userFrom, { replace: true });
                    }
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
                    <h2>Login</h2>
                    {errorMessage?.success === false ? <span className='text-danger text-start ms-2 py-4'>{errorMessage.message}</span> : ''}
                    <form onSubmit={handleRegister} >
                        <label for="email">Email</label>
                        <input type="email" name='email' id="email" onBlur={handleInputBlur} placeholder="Enter your email" />

                        <label for="password">Password</label>
                        <input type="password" name='password' id="password" onBlur={handleInputBlur} placeholder="Enter your password" />
                        <div class="d-flex align-items-center">
                            <input class="form-check-input me-3" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" htmlFor="gridCheck">
                                Remember Me
                            </label>
                        </div>
                        <Button type="submit" ref={refSubmitDis} className='mt-3'> Login</Button>
                    </form>
                    <div className="d-flex justify-content-between align-items-center">

                        <div class="switch"> <Link to="/forgot/password" > Forget Password?</Link></div>
                        <div class="switch">Don't have an account ? <Link to="/register" >Signup</Link></div>
                    </div>

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

export default LoginForm;