import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Referral = () => {
    return (
        <>
            <section className='container-custom'>
                <div className="user-referral-top-banner-area">
                    <div style={{ backgroundImage: "url(https://static.mocortech.com/www/static/images/invite/top-bg-ko.png)" }} className="user-referral-top-banner">
                        <h1>Refer Friends to Trade with the Lowest Fees</h1>
                        <p >Earn up to <span>70%</span> commission on every trade across MEXC Spot and Futures</p>
                    </div>
                </div>
                <div className="py-4">
                    <div className='user-box-btn user-referral-area mb-5'>
                        <div className="d-flex justify-content-between align-items-center">
                            <span> <img src="https://www.mexc.com/static/images/user/overview/invite.png" alt="" /> Referral</span>
                        </div>
                        <p>Invite friends for more commissions</p>
                        <div className="user-referral-link">
                            <span className='pe-3'>https://www...Code=1yi93 </span>
                            <img src="https://www.mexc.com/static/images/user/overview/copy.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="user-referral-dashboard">
                    <h2>Dashboard</h2>
                    <div className="d-flex pt-4">
                        <div className='user-box-btn me-3 w-25'>
                            <div className="d-flex align-items-center">
                                <img src="https://www.mexc.com/static/images/user/overview/invite.png" alt="" />
                                <span>  Referral</span>
                            </div>
                            <h5 className='pt-3'>0</h5>
                        </div>
                        <div className='user-box-btn w-100'>
                            <div className="d-flex align-items-center">
                                <div className='user-referral-dashboard-com'>
                                    <span>Total (USDT) </span>
                                    <h5 className='pt-3'>0</h5>
                                </div>
                                <div className='user-referral-dashboard-com'>
                                    <span>  Spot (USDT)</span>
                                    <h5 className='pt-3'>0</h5>
                                </div>
                                <div className='user-referral-dashboard-com'>
                                    <span>Futures (USDT)</span>
                                    <h5 className='pt-3'>0</h5>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="user-referral-history-area">
                    <div className="user-referral-history-titile">
                        <h3>Referral History</h3>
                    </div>
                    <div className="referral-commission_myRefererCode__eKzrS">
                        My Referrer: --
                    </div>
                    <div className="user-referral-history-items">
                        <table className='user-referral-history-table'>
                            <thead>
                                <tr class="table-headers">
                                    <th>Friend’s Account</th>
                                    <th>Friend’s UID</th>
                                    <th>Invitation Time</th>
                                    <th>Total (USDT)</th>
                                    <th>Spot (USDT)</th>
                                    <th>Futures (USDT)</th>
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

                <div className="user-referral-history-area my-5">
                    <div className="user-referral-history-titile">
                        <h3>Referral Commission</h3>
                    </div>
                    <div className="user-referral-history-items">
                        <table className='user-referral-history-table'>
                            <thead>
                                <tr class="table-headers">
                                    <th>Friend’s Account</th>
                                    <th>Friend’s UID</th>
                                    <th>Trading Date</th>
                                    <th>Commission Time</th>
                                    <th>Account Type</th>
                                    <th>Commission Rate</th>
                                    <th>Commission Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PlayCo Group Universal Flex</td>
                                    <td>2489</td>
                                    <td>€12.35</td>
                                    <td>5%</td>
                                    <td>2489</td>
                                    <td>2489</td>
                                    <td>€1,536.96</td>
                                </tr>
                                <tr>
                                    <td>House of Dedgeny EUR Flex</td>
                                    <td>5478</td>
                                    <td>€42.68	</td>
                                    <td>2%</td>
                                    <td>2489</td>
                                    <td>2489</td>
                                    <td>€4,676.02</td>
                                </tr>
                                <tr>
                                    <td>PlayCo Group Local</td>
                                    <td>123</td>
                                    <td>€147.36</td>
                                    <td>3%</td>
                                    <td>2489</td>
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
                <div className="user-referral-event-rewards-rules-area mb-2">
                    <h2>Referral Event Rewards Rules</h2>
                    <div className='pt-4'>
                        <p>1. When a friend signed up with a referral code or referral link, the referrer will receive a commission that is a corresponding percentage of trading fee generated from every Spot trade and Futures trade made by the friend.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Referral;