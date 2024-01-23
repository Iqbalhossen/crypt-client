import React from 'react';
import dateFormat from 'dateformat';
const SingleItem = ({data}) => {
    return (
        <>
            <tr>
                <td>{data?.GatewayName}</td>
                <td>{dateFormat(data.created_at, 'mmmm dS yyyy')}</td>
               
                <td> 
                {data.Status === 0 ? <span class="badge bg-warning ">pending</span> :''}
                {data.Status === 1 ? <span class="badge bg-success ">accept</span> :''}
                {data.Status === 2 ? <span class="badge bg-danger ">rejected</span> :''}
                 </td>
                <td>{data?.Amount}</td>
                {/* <td>{data?.Transaction}</td> */}
                <td>
                {data.Status === 0 ? <span class="badge bg-warning ">pending</span> :''}
                {data.Status === 1 ? <span class="badge bg-success ">accept</span> :''}
                {data.Status === 2 ? <span class="badge bg-danger ">rejected</span> :''}</td>
            </tr>
        </>
    );
};

export default SingleItem;