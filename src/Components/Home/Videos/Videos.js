import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Videos({ data }) {
    const [loading, setLoading] = useState(false);
    if (loading) {
        return (
            <>
                <Skeleton count={6} height={60} />
            </>
        )

    } else {

        return (
            <>
                <section className='videos-section desktop-version'>
                    <video src={`http://localhost:5000/${data?.video_url}`} autoPlay loop muted />
                    <div className="video-content-section">
                        <h1>{data?.title_one}<br />{data?.title_two}</h1>
                        <p>
                            {data?.dis_one}<br />
                            {data?.dis_two}
                        </p>
                        <div className="video-btn">
                            <Link to={data?.btn_url} className="btn btn-primary">{data?.btn_name}</Link>
                            <Link to={data?.icon_one_url}>
                                <FontAwesomeIcon icon={data?.icon_one} />
                            </Link>

                            <Link to={data?.icon_two_url}>
                                <FontAwesomeIcon icon={data?.icon_two} />
                            </Link>
                            <Link to={data?.icon_three_url}>
                                <FontAwesomeIcon icon={data?.icon_three} />
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        )

    }


}
