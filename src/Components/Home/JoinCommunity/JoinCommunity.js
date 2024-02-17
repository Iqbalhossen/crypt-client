import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
const JoinCommunity = ({data}) => {
    const [loading, setLoading] = useState(true);
    
    const [dataBtn, setDataBtn] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/community/btn/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setDataBtn(data.data);
                setLoading(false)
            });


    }, [])

    if (loading) {
        return (
          <>
            <Skeleton count={8} />
          </>
        )
    
      } else {
        return (
            <>
              
    
                <section className='join-community-area desktop-version'>
                    <div className="join-community-area-bg">
                        <div className="join-community-area-bg-content">
                            <div className="join-community-area-mask">
                                <img src={`http://localhost:5000/${data?.image}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="join-community-area-body__Jgr43">
                        <h2>{data?.title}</h2>
                        <p>{data?.title}</p>
                        <div className="community_communityBigBtn__MD3tr py-4">
                            <div className="popular-btn me-5">
                                <Link to={data?.Btn_one_url}>
                                <FontAwesomeIcon icon={data?.Btn_one_icon}  />
                                    <p >{data?.Btn_one_name}</p>
                                </Link>
                                <Link to={data?.Btn_two_url}>
                                <FontAwesomeIcon icon={data?.Btn_two_icon}  />
                                <p >{data?.Btn_two_name}</p>
                                </Link>
                            </div>
                        </div>
    
                        <div className="join-community-social">
                            {dataBtn.map((data, index) =>
                                <Link to={data?.btn_url}>
                                    <img src={`http://localhost:5000/${data?.btn_image}`}  alt="" />
                                </Link>
                            )}                    
                        </div>
                    </div>
                </section>
            </>
        );
      }
    
};

export default JoinCommunity;