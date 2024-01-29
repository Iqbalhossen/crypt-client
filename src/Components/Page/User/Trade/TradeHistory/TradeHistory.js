import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Contexts/AuthContext/AuthProvider';
import SingleItem from './SingleItem';

const TradeHistory = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [tradeData, setTradeData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/user/trade/log/history/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                setTradeData(data?.data)
            });


    }, [])
    return (
        <>
            <section className='container-custom'>

                <div className="user-deposit-title pt-5">
                    <h1>Trade History</h1>
                </div>
                <div className="user-referral-history-area mt-3 mb-5">
                    <div className="user-referral-history-items">
                        <table className='user-referral-history-table'>
                            <thead>					
                                <tr class="table-headers">
                                    <th>S.N.</th>
                                    <th>Crypto Currency</th>
                                    <th>Amount</th>
                                    <th>High/Low</th>
                                    <th>Result</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tradeData.map((data, index) => <SingleItem data={data} index={index} key={data?._id}></SingleItem>)}
                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </>
    );
};

export default TradeHistory;