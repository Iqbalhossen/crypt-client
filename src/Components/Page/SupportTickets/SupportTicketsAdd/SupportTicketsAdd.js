import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const SupportTicketsAdd = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const [userImage, setUserImage] = useState('');
    const refSubmitDis = useRef();

    const handleImage = (e) => {
        setUserImage(e.target.files[0])

    }
  

    const [dataValue, setDataValue] = useState({});

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...dataValue, };
        newUser[field] = value;
        setDataValue(newUser);
    }

    const handleSubmitData = event => {
        event.preventDefault();
        refSubmitDis.current.setAttribute("disabled", true);      
        if (!userImage || userImage === '') {
            const storeData = {  ...dataValue, };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`https://demeserver.gffex.xyz/api/user/support/tickets/store/${authUser?._id}`, storeData, config)
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
                    refSubmitDis.current.removeAttribute("disabled");

                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            const storeData = {  ...dataValue, image:userImage };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`https://demeserver.gffex.xyz/api/user/support/tickets/store/${authUser?._id}`, storeData, config)
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
                    refSubmitDis.current.removeAttribute("disabled");

                })
                .catch(error => {
                    console.log(error)
                })
        }

    }


    return (
        <>
            <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Create New Ticket</h1>
                            <div className=" home-btn-bg desktop-version">
                                <Link to='/ticket' className="btn btn-primary px-3 py-2">
                                    <i className="fa-solid fa-bars-staggered me-1"></i>
                                    ALl Tickets</Link>
                            </div>
                        </div>



                    </div>

                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-12">

                                    <div className="w-100">
                                        <form onSubmit={handleSubmitData}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Name</label>
                                                        <input type="text" defaultValue={authUser?.name} name='amount' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" disabled />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Email Address</label>
                                                        <input type="email" defaultValue={authUser?.email} name='amount' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" disabled />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Subject</label>
                                                        <input type="text" onBlur={handleInputBlur} name='subject' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" required />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Priority</label>
                                                        <select onBlur={handleInputBlur} className="form-select" name='priority' aria-label="Default select example" required>
                                                            <option selected disabled >Select</option>
                                                            <option  value="3">High</option>
                                                            <option value="2">Medium</option>
                                                            <option value="1">Low</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">File (optional)</label>
                                                        <input type="file" onChange={handleImage} name='image' className="form-control" id="exampleFormControlInput2" aria-describedby="emailHelp" accept='.jpg, .jpeg, .png, .pdf, .doc, .docx' />
                                                        <div className="col-md-12 ticket-attachments-message text-muted mt-3">
                                                            Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlInput2" className="form-label">Message</label>
                                                        <textarea onBlur={handleInputBlur} name='message' className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="d-grid gap-2">
                                                <button ref={refSubmitDis} className="btn btn-primary py-2" type="submit"><i className="fa-regular fa-paper-plane me-1"></i> Submit</button>
                                            </div>
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

export default SupportTicketsAdd;