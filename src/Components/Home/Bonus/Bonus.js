import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Bonus() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/frontend/home/bouns/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data[0]);
            });


    }, [])

    return (
        <>
            <section className='container-custom bonus-section desktop-version'>
                <div className="bonus-area border-custom rounded-3">
                    <h5>{data?.title}</h5>
                    <div className="row">
                        <div className="col-3">
                            <div class="bonus-activity_item-bonus-img__CpShW"
                            style={{  
                                backgroundImage: `url(" + "${data?.image_url}" + no-repeat top 0 center/540px 14040px ")`,}}
                              ></div>
                        </div>
                        <div className="col-3">
                            <div className="bouns-items">
                                <h6>{data?.title_one}</h6>
                                <div class="bonus-item_line__DYqVA bonus-item-line"></div>
                                <div class="bonus-item_bonus-item-detail__desc___0DDK mb-4"><span>{data?.dis_one}</span></div>
                                <Link to={data?.dis_one_btn_url} className="bonus-activity_item-bonus-login-button__Mbmwj "><span>{data?.dis_one_btn}</span></Link>
                            </div>
                        </div>
                        <div className="col-3">

                            <div class="bonus-item_bonus-item__count-down__UiIf_"><div class="bonus_bonusItemLabel__kOoJQ"><svg class="sc-gEvEer hSTeNi mx-icon" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 10 10" data-icon="IconCountDown"><path fillRule="evenodd" clipRule="evenodd" d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM4 2.5H5V5.5H7.5V6.5H4V2.5Z" fill="currentColor"></path></svg>Limited-time 2X reward</div></div>
                            <h6>{data?.title_two}</h6>
                            <div class="bonus-item_line__DYqVA bonus-item-line"></div>
                            <div class="bonus-item_bonus-item-detail__desc___0DDK"><span>{data?.dis_two}</span></div>


                        </div>
                        <div className="col-3">
                            <div className="bouns-items">
                                <h6>{data?.title_three}</h6>
                                <div class="bonus-item_line__DYqVA bonus-item-line"></div>
                                <div class="bonus-item_bonus-item-detail__desc___0DDK"><span>{data?.dis_three}</span></div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
