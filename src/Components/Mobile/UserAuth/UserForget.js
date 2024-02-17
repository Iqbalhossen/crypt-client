import React, {  useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const UserForget = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const [userData, setUserData] = useState({});
    const [user, setUserValue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();


    const handleSubmit = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('http://localhost:5000/api/user/auth/passowrd/forget', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success === false){
                    setErrorMessage(data);
                    refSubmitDis.current.removeAttribute("disabled");
                }else{
                    setUserData(data)
                    event.target.reset();
                }
              
            })
            .catch(error => console.log(error));
    }

    const handleInputBlur = event => {
        setErrorMessage({})
        setUserData({})
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
                <section className='mobile-version user-login-mobile'>
                    <div className="user-login-title">
                        <div className="container-custom">
                            <h4>Forget Password</h4>
                            <p>First login counts as sign-up</p>
                        </div>
                    </div>
                    <div className="user-mobile-login-form">
                        <div className="container-custom py-3">
                        {userData?.success === true ? <span className='text-success text-start ms-2 py-4 fs-4 fw-bolder'>{userData.message}</span> : ''} 
                            <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                                <br />
                                <div className="d-grid">
                                    <input type="email" name='email' onBlur={handleInputBlur} id='email' placeholder='Enter your email address' />
                                    {errorMessage?.success === false ? <span className='text-danger text-start ms-2 py-1'>{errorMessage.message}</span> : ''}
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

export default UserForget;