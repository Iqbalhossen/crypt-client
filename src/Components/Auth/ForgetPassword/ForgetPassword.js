import React, {  useRef, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import { Button } from 'react-bootstrap';
const ForgetPassword = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const [userData, setUserData] = useState({});
    const [user, setUserValue] = useState({});
    const [errorMessage, setErrorMessage] = useState({})
    const refSubmitDis = useRef();


    const handleSubmit = event => {
        refSubmitDis.current.setAttribute("disabled", true);
        event.preventDefault();
        fetch('https://demeserver.gffex.xyz/api/user/auth/passowrd/forget', {
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
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        // console.log(newUser);
        newUser[field] = value;
        setUserValue(newUser);
    }

    return (
        <>
            <section className='login-section'>
                <div className="login-card">
                    <div className="py-2">
                        <Link to='/'> <img src={logo} alt="" /></Link>
                    </div>
                    <h2>Account Recovery</h2>    
                    {userData?.success === true ? <span className='text-success text-start ms-2 py-4 fs-4 fw-bolder'>{userData.message}</span> : ''}               
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id="email" onBlur={handleInputBlur} placeholder="Enter your email" />
                        {errorMessage?.success === false ? <span className='text-danger text-start ms-2 py-1'>{errorMessage.message}</span> : ''}
                        <Button type="submit" ref={refSubmitDis} className='mt-3'>Submit</Button>
                    </form>

                </div>
            </section>

        </>
    );
};

export default ForgetPassword;