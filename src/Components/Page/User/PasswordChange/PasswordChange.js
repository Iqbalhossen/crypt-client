import React, { useContext, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';


const PasswordChange = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [updateData, setUpdateData] = useState({});
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/user/view/single/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setUserData(data.data);
            });


    }, [authUser, updateData])


    // store data 
   
    const [dataValue, setDataValue] = useState({});
    
    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }


    const refSubmitDis = useRef();

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);
        const config = {
            headers: {
                'content-type': 'application/json',

            }
        };
        if (userData?._id) {
            axios
                .put(`http://localhost:5000/api/user/auth/password/update/${userData?._id}`, dataValue, config)
                .then(data => {
                    event.target.reset();
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
                    setUpdateData(data.data)
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
        } else {
            toast.error(`something is worng`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }



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
                            <h1>Password Update</h1>
                        </div>


                    </div>

                    {/* deposit input  */}
                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="w-75 m-auto">
                                        <form onSubmit={handleSubmitData}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                                        <input type="password"  onBlur={handleInputBlur} name='password' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">New Password</label>
                                                        <input type="password"  onBlur={handleInputBlur} name='npassword' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password</label>
                                                        <input type="password"  onBlur={handleInputBlur} name='cpassword' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" />
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <button type='submit' ref={refSubmitDis} className="btn btn-primary">Update</button>
                                        </form>
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

export default PasswordChange;