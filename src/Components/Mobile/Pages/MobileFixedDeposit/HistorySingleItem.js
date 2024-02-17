import React from 'react';

const HistorySingleItem = ({data}) => {
    const {promotion_name, period, amount, profit_amount} = data;
    return (
        <>
            <tr>
                <td>{promotion_name}</td>
                <td>{period}</td>
                <td>{amount}$</td>
                <td>{profit_amount}$</td>
            </tr>
        </>
    );
};

export default HistorySingleItem;