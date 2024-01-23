import React from 'react';
import { Link } from 'react-router-dom';

const CryptoThrade = () => {
    return (
        <>
            <section className='crypto-thrade-area container-custom mobile-version pb-3'>

                <div className="row">
                    <div className="col-4">
                        <Link to='#'>
                            <h6>BTC/USDT <small>-1.18%</small></h6>
                            <h5>37772.87</h5>
                            <p><i class="fa-solid fa-equals"></i> $37798.43</p>
                            <h4>Thrade Now <i class="fa-solid fa-angle-right"></i></h4>

                        </Link>
                    </div>
                    <div className="col-4">
                        <Link to='#'>
                            <h6>BTC/USDT <small>-1.18%</small></h6>
                            <h5>37772.87</h5>
                            <p><i class="fa-solid fa-equals"></i> $37798.43</p>
                            <h4>Thrade Now <i class="fa-solid fa-angle-right"></i></h4>

                        </Link>
                    </div>
                    <div className="col-4">
                        <Link to='#'>
                            <h6>BTC/USDT <small>-1.18%</small></h6>
                            <h5>37772.87</h5>
                            <p><i class="fa-solid fa-equals"></i> $37798.43</p>
                            <h4>Thrade Now <i class="fa-solid fa-angle-right"></i></h4>

                        </Link>
                    </div>
                </div>

            </section>
           
        </>
    );
};

export default CryptoThrade;