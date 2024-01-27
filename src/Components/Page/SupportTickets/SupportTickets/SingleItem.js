import React from 'react';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SingleItem = ({ data, index }) => {
    const tradeDate = data?.InTime
    return (
        <>
            <tr>
                <td>
                    <Link>
                        [Ticket#{data?.ticket}]{data?.subject}
                    </Link>
                </td>
                <td>
                    {data?.status === 0 ? <span className="badge bg-info text-dark">Open</span> : ''}
                    {data?.status === 1 ? <span className="badge bg-info text-dark">Answered</span> : ''}
                    {data?.status === 2 ? <span className="badge bg-warning text-dark">Replied</span> : ''}
                    {data?.status === 3 ? <span className="badge bg-danger">Close</span> : ''}
                </td>
                <td>
                    {data?.priority === 1 ? <span className="badge bg-info text-dark">Low</span> : ''}
                    {data?.priority === 2 ? <span className="badge bg-warning text-dark">Medium</span> : ''}
                    {data?.priority === 3 ? <span className="badge bg-danger">Danger</span> : ''}

                </td>
                <td>
                    {dateFormat(tradeDate, "dd-mm-yyyy h:MM:ss TT")}
                </td>
                <td>
                    <div className=" home-btn-bg desktop-version">
                        <Link to={`/ticket/view/${data?._id}`}  className="btn btn-primary px-3 py-2">
                            <i className="fa-solid fa-display me-1"></i>
                            Details
                        </Link>
                    </div>
                </td>



            </tr>
        </>
    );
};

export default SingleItem;