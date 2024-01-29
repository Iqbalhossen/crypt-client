import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ data }) => {

    const [subMenuData, setSubMenuData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/sub/menu/view/${data?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setSubMenuData(data);
            });


    }, [])
    return (
        <>
            {/* <li><Link  key={data._id}>{data?.name}</Link></li>  */}
            <li><Link to={`/${data?.slug}`}>
                {/* <div className="hot-menu">HOT</div> */}
                {data.name}
                {/* <i className="fa-solid fa-caret-down"></i> */}
            </Link>
                {/* {
                    subMenuData.length !== 0
                        ?
                        <ul className='submenu'>
                            <li>
                                <div className="submenu-item">
                                    <Link to='' className='d-flex justify-content-cente align-items-center'>
                                        <div className="submenu-img">
                                            <img src="https://www.mexc.com/api/file/download/F20230302190727519F16umVIxdbSSlQ" alt="" />
                                        </div>
                                        <div className="submenu-content">
                                            <h6>Global Bank Transfer <small>New</small></h6>
                                            <span>Buy/Sell via SEPA</span>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="submenu-item">
                                    <Link to='' className='d-flex justify-content-cente align-items-center'>
                                        <div className="submenu-img">
                                            <img src="https://www.mexc.com/api/file/download/F2023030219070182043o2qwM91SzJHf" alt="" />
                                        </div>
                                        <div className="submenu-content">
                                            <h6>Global Bank Transfer <small>New</small></h6>
                                            <span>Buy/Sell via SEPA</span>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="submenu-item">
                                    <Link to='' className='d-flex justify-content-cente align-items-center'>
                                        <div className="submenu-img">
                                            <img src="https://www.mexc.com/api/file/download/F20230302190436816vpIxz2i9QQ5ZDK" alt="" />
                                        </div>
                                        <div className="submenu-content">
                                            <h6>Global Bank Transfer <small>New</small></h6>
                                            <span>Buy/Sell via SEPA</span>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        : ''
                } */}

            </li>
            {/* <li><Link to={`/${data?.slug}`} key={data._id}>{data?.name}</Link></li>  */}
        </>
    );
};

export default MenuItem;