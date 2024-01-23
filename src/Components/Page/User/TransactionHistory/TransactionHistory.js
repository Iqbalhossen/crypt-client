import React from 'react';

const TransactionHistory = () => {
    return (
        <>
            <section className='container-custom'>

                <div className="user-deposit-title pt-5">
                    <h1>Transaction History</h1>
                </div>
                <div className="user-referral-history-area mt-3 mb-5">
                    <div className="user-transaction-history-titile">
                        <h3 className='active'>Deposit</h3>
                        <h3>Withdrawal</h3>
                        <h3>Transfer</h3>
                        <h3>Send</h3>
                        <h3>Others</h3>
                    </div>
                    <div className="user-referral-history-items">
                        <table className='user-referral-history-table'>
                            <thead>
                                <tr class="table-headers">
                                    <th>Crypto</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>TxID</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PlayCo Group Universal Flex</td>
                                    <td>2489</td>
                                    <td>€12.35</td>
                                    <td>5%</td>
                                    <td>2489</td>
                                    <td>€1,536.96</td>
                                </tr>
                                <tr>
                                    <td>House of Dedgeny EUR Flex</td>
                                    <td>5478</td>
                                    <td>€42.68	</td>
                                    <td>2%</td>
                                    <td>2489</td>
                                    <td>€4,676.02</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Local</td>
                                    <td>123</td>
                                    <td>€147.36</td>
                                    <td>3%</td>
                                    <td>2489</td>
                                    <td>€543.76</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Low</td>
                                    <td>5477</td>
                                    <td>€147.00</td>
                                    <td>10%</td>
                                    <td>2489</td>
                                    <td>€80,511.90</td>
                                </tr>
                                <tr>
                                    <td>House of Dedgeny High</td>
                                    <td>5899</td>
                                    <td>€ 288.00</td>
                                    <td>4%</td>
                                    <td>2489</td>
                                    <td>€67,956.48</td>
                                </tr>
                                <tr>
                                    <td>House of Dedgeny USD Med</td>
                                    <td>11477</td>
                                    <td>€18.00</td>
                                    <td>5%</td>
                                    <td>2489</td>
                                    <td>€10,329.30</td>
                                </tr>
                                <tr>
                                    <td>Sterck Inc. Med</td>
                                    <td>1476</td>
                                    <td>€187.00</td>
                                    <td>10%</td>
                                    <td>2489</td>
                                    <td>€27,601.20</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Universal High</td>
                                    <td>6547</td>
                                    <td>€782.00</td>
                                    <td>12%</td>
                                    <td>2489</td>
                                    <td>€614,370.48</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Universal Low</td>
                                    <td>1476</td>
                                    <td>€187.00</td>
                                    <td>10%</td>
                                    <td>2489</td>
                                    <td>€27,601.20</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Universal High</td>
                                    <td>1471</td>
                                    <td>€148.00</td>
                                    <td>18%</td>
                                    <td>2489</td>
                                    <td>€39,187.44</td>
                                </tr>
                                <tr>
                                    <td>Sterck Inc. Low</td>
                                    <td>1978</td>
                                    <td>€68.23</td>
                                    <td>11%</td>
                                    <td>2489</td>
                                    <td>€14,845.48</td>
                                </tr>
                                <tr>
                                    <td>Sterck Inc. Universal High</td>
                                    <td>6512</td>
                                    <td>€642.02</td>
                                    <td>5%</td>
                                    <td>2489</td>
                                    <td>€209,041.71</td>
                                </tr>
                                <tr>
                                    <td>Sterck Inc. Flex</td>
                                    <td>5423</td>
                                    <td>€78.96</td>
                                    <td>7%</td>
                                    <td>2489</td>
                                    <td>€29,974.01</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Universal Med</td>
                                    <td>7812</td>
                                    <td>€54.86</td>
                                    <td>8%</td>
                                    <td>2489</td>
                                    <td>€34,285.31</td>
                                </tr>
                                <tr class='total'>
                                    <th>Total</th>
                                    <td class="total-val" colspan="4">€1,134,860.04</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </>
    );
};

export default TransactionHistory;