import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Videos() {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/videos/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])


    return (
        <>
            <section className='videos-section desktop-version'>
                <video src={`http://66.29.142.198:5000/${data?.video_url}`} autoPlay loop muted />
                <div className="video-content-section">
                    <h1>{data.title_one}<br />{data.title_two}</h1>
                    <p>
                        {data.dis_one}<br />
                        {data.dis_two}
                    </p>
                    <div className="video-btn">
                        <Link to={data.btn_url} className="btn btn-primary">{data.btn_name}</Link>
                        <Link to={data.icon_one_url}>
                            <FontAwesomeIcon icon={data?.icon_one} />
                        </Link>

                        <Link to={data.icon_two_url}>
                            <FontAwesomeIcon icon={data?.icon_two} />
                        </Link>
                        <Link to={data.icon_three_url}>
                            <FontAwesomeIcon icon={data?.icon_three} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
