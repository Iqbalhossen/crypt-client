import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChooseGffex = ({data}) => {

    return (
        <>

            <section className='ChooseGffex-section desktop-version'>
                <div className="ChooseGffex-title pt-5 pb-1 text-center">
                    <h2>{data?.title}</h2>
                    <div className="container-custom">
                        <div className="ChooseGffex-video-area shadow  rounded border-custom mt-5 p-4">              
                            <div class="ChooseGffex-video">
                            <video src={`https://demeserver.gffex.xyz/${data?.videos}`} autoPlay loop muted />
                             
                                <div class="ChooseGffex-video-btn-area">
                                    <div class="ChooseGffex-video-btn">
                                        <Link to='#' >
                                        <FontAwesomeIcon icon={data?.icon_one}  />
                                            <br />
                                            <p htmlFor="">{data?.icon_one_dis}</p>
                                        </Link>
                                        <Link to='#'>
                                        <FontAwesomeIcon icon={data?.icon_two}  />
                                            <br />
                                            <p htmlFor="">{data?.icon_two_dis}</p>
                                        </Link >
                                        <Link to='#'>
                                        <FontAwesomeIcon icon={data?.icon_three}  />
                                            <br />
                                            <p htmlFor="">{data?.icon_three_dis}</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
               
            </section>



        </>
    );
   
};

export default ChooseGffex;