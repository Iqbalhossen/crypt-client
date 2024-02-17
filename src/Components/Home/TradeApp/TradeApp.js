import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const TradeApp = () => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/frontend/home/gffex/app/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
                setLoading(false)
            });


    }, [])

    const [dataBtn, setDataBtn] = useState([]);
    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/frontend/home/gffex/app/btn/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setDataBtn(data?.data);
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
    
                <section className='download_home-App desktop-version'>
                    <h2>{data?.title}</h2>
                    <p>{data?.dis}</p>
                    <div className="download_home-App-content">
                        <div class="download_home-App-content-logo">
                            <img class="download_deviceLogo__mGXRx" src={`https://demeserver.gffex.xyz/${data?.image}`} alt="Gffexvip" loading="lazy" />
                        </div>
                        <div className="download_home-App-content-info">
                            <div className="download_downloadInfoGroup__ITmEa">
                                <div className="download_downloadInfo__WX6Ki">
                                    <img src="https://www.mexc.com/images/new-home/portfolio.svg?v=1001" alt="mexc" loading="lazy" />
                                    <div class="download_contRight___VlGG">
                                        <h5>{data?.sub_title_one}</h5>
                                        <p>{data?.sub_title_one_dis}</p>
                                    </div>
                                </div>
                                <div class="download_downloadInfo__WX6Ki">
                                    <img src="https://www.mexc.com/images/new-home/mobile_apps.svg?v=1001" alt="Gffexvip" loading="lazy" /><div class="download_contRight___VlGG">
                                        <h5>{data?.sub_title_two}</h5>
                                        <p>{data?.sub_title_two_dis}</p></div>
                                </div>
                            </div>
                            <div class="app-download-btn">
                                <Link to={dataBtn?.btn_one_url}>
                                <FontAwesomeIcon icon={dataBtn?.btn_one_icon}  />
                                    <span >{dataBtn?.btn_one_name}</span>
                                </Link>
                                <Link to={dataBtn?.btn_two_url}>
                                <FontAwesomeIcon icon={dataBtn?.btn_one_icon}  />
                                    <span >{dataBtn?.btn_two_name}</span>
                                </Link>
                                <Link to={dataBtn?.btn_three_url}>
                                <FontAwesomeIcon icon={dataBtn?.btn_three_icon}  />
                                    <span >{dataBtn?.btn_three_name}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
    
                </section>
    
            </>
        );
      }
   
};

export default TradeApp;