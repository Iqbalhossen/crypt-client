import React, {  useEffect, useState } from 'react';
import SingleItem from './SingleItem';



const MiningPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demeserver.gffex.xyz/api/user/mining/view`, {
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
                            <h1>Mining</h1>
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

export default MiningPage;