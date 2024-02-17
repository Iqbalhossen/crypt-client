import React, { useEffect, useState } from 'react';
import SingleItem from './SingleItem';
import Skeleton from 'react-loading-skeleton';

const DiscoverProducts = ({Title}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/our/products/view`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
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
                <section className='discover-products-area desktop-version'>
                    <h2>{Title?.title}</h2>
                    <div className="discover-products-items-list">
                    {data.map((data, index) => <SingleItem data={data} key={data?._id}></SingleItem>)}           
                    </div>
                </section>
            </>
        );
      }
   
};

export default DiscoverProducts;