import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({data}) => {
    return (
        <>
            <div className="col-3">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <div className="item-box  m-auto">
                            <Link to={`/user/practice/trade/with/${data?.Name}/${data?._id}`} className="product-item" >
                                <figure>
                                    <img src={`http://66.29.142.198:5000/${data?.image}`} className="img-fluid" alt='' />
                                </figure>
                                <h3 className="product-title">{data?.Name}</h3>
                                <Link to='#' className="btn btn-primary"> Trade Now</Link>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleItem;