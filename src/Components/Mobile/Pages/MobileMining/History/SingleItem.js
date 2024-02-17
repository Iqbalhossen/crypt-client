import React from 'react';

const SingleItem = ({data}) => {
    const {promotion_name, period, amount, profit_amount, period_type, status} = data;
    return (
        <>
            <tr>
                <td>{promotion_name}</td>
                <td>{period} {period_type}</td>
                <td>{amount}$</td>
                <td>{profit_amount}$</td>
                {status === 0 ?
                <td>Processing</td>
                :
                <td>Compaleted</td>
                }
            </tr>
        </>
    );
};

export default SingleItem;