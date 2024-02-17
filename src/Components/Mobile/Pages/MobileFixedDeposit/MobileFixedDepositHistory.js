import React, { useContext, useEffect, useState } from 'react';
import MobileMenu from '../../Home/MobileMenu/MobileMenu';
import { AuthContext } from '../../../../Contexts/AuthContext/AuthProvider';
import HistorySingleItem from './HistorySingleItem';

const MobileFixedDepositHistory = () => {
    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (authUser?._id) {
            fetch(`http://localhost:5000/api/user/fixed/deposit/store/view/${authUser?._id}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setData(data.data);
                });
        }


    }, [])
    console.log(data)
    return (
        <>
            <div className="app" >
                <section className='mobile-version user-login-mobile'>
                    <div className="user-login-title">
                        <div className="container-custom">
                            <h4>Fixed Deposit History</h4>
                        </div>
                    </div>
                    <div className="user-mobile-login-form" >
                        <div className="container-custom py-3">
                            <table class="table table-striped table-class hidden-sm hidden-xs mobile-data-table" id="table-id">
                                <tr>
                                    <th>Promotion Name</th>
                                    <th>Period</th>
                                    <th>Amount</th>
                                    <th>Profit</th>
                                    <th>Status</th>
                                </tr>

                                {data.length !== 0 ?
                                    data.map((data, index) => {
                                        if (data) {
                                            return (
                                                <HistorySingleItem data={data} index={index} key={data._id} ></HistorySingleItem>
                                            );
                                        }
                                    }) :
                                    <tr>
                                        <td className="text-muted text-center" colspan="100%">Data not found</td>
                                    </tr>}

                            </table>
                        </div>

                    </div>

                </section>

            </div>
            <MobileMenu></MobileMenu>
        </>
    );
};

export default MobileFixedDepositHistory;