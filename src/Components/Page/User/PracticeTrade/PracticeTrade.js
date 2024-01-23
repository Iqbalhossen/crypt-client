import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleItem from './SingleItem';

const PracticeTrade = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/admin/crypto/currency/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
            });


    }, [])

    return (
        <> 
               <section className='user-deposit'>
                <div className="container-custom">
                    <div className="py-4">
                        <div className="user-deposit-title">
                            <h1>Practice Trade</h1>
                            {/* <p>How To Deposit?</p> */}
                        </div>

                        <div className="row pb-5">
                        {data.map((data, index) => <SingleItem data={data} key={data?._id}></SingleItem>)}                        
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default PracticeTrade;