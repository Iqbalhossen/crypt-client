import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicSinglePage from './DynamicSinglePage';

const DynamicPage = () => {
    const { slug } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/frontend/home/menu/${slug}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });
    }, [slug])
    //   console.log(slug)
    return (
        <>
            {data.map((data, index) =>
                <DynamicSinglePage data={data} key={data._id}></DynamicSinglePage>
            )}
        </>
    );
};

export default DynamicPage;