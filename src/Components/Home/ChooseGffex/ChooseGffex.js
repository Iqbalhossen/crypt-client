import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChooseGffex = () => {

    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/choose/gffex/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });


    }, [])

    return (
        <>

            <section className='ChooseGffex-section desktop-version'>
                <div className="ChooseGffex-title pt-5 pb-1 text-center">
                    <h2>{data?.title}</h2>
                    <div className="container-custom">
                        <div className="ChooseGffex-video-area shadow  rounded border-custom mt-5 p-4">
                            {/* <div className='ChooseGffex-video'>
                                <video src='https://learn.mocortech.com/learnvideo/Frontpage-Video-EN.mp4' autoPlay loop muted />
                                <div className="ChooseGffex-video-btn-area">
                                    <i class="fa-solid fa-download"></i>
                                </div>
                            </div> */}
                            <div class="ChooseGffex-video">
                            <video src={`http://localhost:5000/${data?.videos}`} autoPlay loop muted />
                                {/* <video src='https://learn.mocortech.com/learnvideo/Frontpage-Video-EN.mp4' autoPlay loop muted /> */}
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
                {/* <div className="text-center py-5  ">
                    <Link to='#' className="btn btn-primary px-5 py-3">Start Trading</Link>
                </div> */}
            </section>



        </>
    );
};

export default ChooseGffex;