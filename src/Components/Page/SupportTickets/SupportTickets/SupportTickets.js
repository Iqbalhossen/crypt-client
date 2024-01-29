import React, { useContext, useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SupportTickets = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/user/support/tickets/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])
    return (
        <>


            <section className='container-custom'>

                <div className="user-deposit-title pt-5 d-flex justify-content-between align-items-start">
                    <h1>Support Tickets</h1>
                    <div className="text-center home-btn-bg desktop-version">
                        <Link to='/ticket/new' className="btn btn-primary px-3 py-2">
                        <i className="fa-solid fa-plus me-1"></i>
                            New Tickets</Link>
                    </div>
                </div>
                <div className="user-referral-history-area mt-3 mb-5">
                    <div className="user-referral-history-items">
                        <table className='user-referral-history-table'>
                            <thead>
                                <tr class="table-headers">
                                    <th>Subject</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Last Reply</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => <SingleItem data={data} index={index} key={data?._id}></SingleItem>)}

                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SupportTickets;