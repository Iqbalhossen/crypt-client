import React from 'react';
import { Link } from 'react-router-dom';
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

const SingleItem = ({ data }) => {
    return (
        <>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <div className="item-box  m-auto">
                            <Link to={`/fixed/deposit/${data?._id}`} className="product-item" >
                                <figure>
                                    <img src={`https://demeserver.gffex.xyz/${data?.image}`} className="img-fluid" alt='' />
                                </figure>
                                <h3 className="product-title">{data?.promotion_name}</h3>
                                <p className="btn btn-primary expired_time-css">
                                    <FlipClockCountdown
                                        to={data?.expired_time}
                                        className="flip-clock"
                                        
                                         >
                                    </FlipClockCountdown >
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleItem;