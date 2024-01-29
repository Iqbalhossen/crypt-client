import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import SingleItem from './SingleItem';

const SupportTicketsView = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const { id } = useParams();
    const [updateData, setUpdateData] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/user/support/tickets/view/by/id/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])

    const [messageData, setMessageData] = useState([]);
    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/user/support/tickets/message/view/${id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setMessageData(data.data);
            });


    }, [updateData])
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
            const storeData = { ...dataValue };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            axios
                .post(`http://66.29.142.198:5000/api/user/support/tickets/replay/${id}`, storeData, config)
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
                    setUpdateData(data);
                    refSubmitDis.current.removeAttribute("disabled");

                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            const storeData = { ...dataValue, image: userImage };
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',

                }
            };
            axios
                .post(`http://66.29.142.198:5000/api/user/support/tickets/replay/${id}`, storeData, config)
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
                    setUpdateData(data);
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
                            <h1>
                                {data?.status === 0 ? <span className="badge bg-info text-dark">Open</span> : ''}
                                {data?.status === 1 ? <span className="badge bg-info text-dark">Answered</span> : ''}
                                {data?.status === 2 ? <span className="badge bg-warning text-dark">Replied</span> : ''}
                                {data?.status === 3 ? <span className="badge bg-danger">Close</span> : ''}
                                [Ticket#{data?.ticket}] {data?.subject}</h1>
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
                                                <button ref={refSubmitDis} className="btn btn-primary py-2" type="submit"><i className="fa-solid fa-reply me-1"></i> Reply</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="pb-4">
                        <div className='user-deposit-input-area'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="w-100">
                                    <div class="row">
                                    {messageData.map((data, index) => <SingleItem data={data} key={data?._id} ticket={data}></SingleItem>)}
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


export default SupportTicketsView;