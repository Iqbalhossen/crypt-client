import React, { useEffect, useState } from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
const SingleItem = ({data}) => {
    const [AdminData, setAdminData] = useState([]);
    useEffect(() => {
        if(data?.admin_id){
            fetch(`http://localhost:5000/api/admin/role/view/${data?.admin_id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setAdminData(data.data);
            });
        }
        


    }, [])
    const [ticket, setTicketData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/support/tickets/view/by/id/${data?.support_ticket_id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setTicketData(data.data);
            });


    }, [])
    const [ticketFile, setTicketFileData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/user/support/tickets/file/view/${data?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setTicketFileData(data.data);
            });


    }, [])
    if(AdminData?.name === undefined){
    return (
        <>

            <div class="col-sm-12 pb-3">
                <div class="card shadow py-2">
                    <div class="card-body">
                        <h5 class="card-title">
                            {ticket?.subject}
                        </h5>
                        <p class="card-text">{data?.message}</p>
                        <p class="card-text">
                            {ticketFile?.attachment !== undefined ?
                            <>
                            File : <small><Link to={`http://localhost:5000/${ticketFile?.attachment}`} target='_blank'> Attachment </Link></small>
                            </>
                             : '' }
                            </p>
                        <p class="card-text">Date : <small>{dateFormat(data.created_at, 'mmmm dS yyyy')}</small></p>
                    </div>
                </div>
            </div>

        </>
    );
}else{
    return (
        <>

            <div class="col-sm-12 pb-3">
                <div class="card shadow py-2">
                    <div class="card-body">
                        <h5 class="card-title">{AdminData?.name}
                        <br />
                        <small>
                            {AdminData?.role === 'super_admin' ? 'Super Admin' : ''}
                            {AdminData?.role === 'admin' ? 'Admin' : ''}
                            {AdminData?.role === 'staff' ? 'Staff' : ''}
                        </small>
                        </h5>
                        <p class="card-text">{data?.message}</p>
                        <p class="card-text">
                            {ticketFile?.attachment !== undefined ?
                            <>
                            File : <small><Link to={`http://localhost:5000/${ticketFile?.attachment}`} target='_blank'> Attachment </Link></small>
                            </>
                             : '' }
                            </p>
                        <p class="card-text">Date : <small>{dateFormat(data.created_at, 'mmmm dS yyyy')}</small></p>
                    </div>
                </div>
            </div>

        </>
    );
}
    
};

export default SingleItem;