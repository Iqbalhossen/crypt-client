import React from 'react';

const SingleItem = ({data}) => {
    const {amount, percentage, interest_amount, expired_time, status} = data;
    return (
        <>
            <tr>
                <td>{amount}$</td>
                <td>{percentage} %</td>
                <td>{interest_amount}$</td>
                <td>{expired_time}</td>
                {status === 0 ?
                <td>Pending</td>
                :
                <td>Compaleted</td>
                }
            </tr>
        </>
    );
};

export default SingleItem;