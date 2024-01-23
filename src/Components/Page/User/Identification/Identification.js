import React from 'react';
import { Link } from 'react-router-dom';

const Identification = () => {
    return (
        <>
            <section className='container-custom'>
                <div className="pt-3">
                    <nav className='breadcrumb-area' aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/dashboard'>Profile</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Identification</li>
                        </ol>
                    </nav>
                    <div className="user-identification-title">
                        <h2>Identification</h2>
                    </div>
                    <div className="user-KYC">
                        <div className="user-KYC-title">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3>KYC</h3>
                                    <p>Increase your 24-hour withdrawal limit to 200 BTC</p>
                                </div>
                                <button type="button" className="btn btn-primary">Verify</button>
                            </div>
                        </div>
                        <p className='user-KYC-dis'>Personal information</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Identification;