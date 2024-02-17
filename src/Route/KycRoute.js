import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const KycRoute = ({children}) => {

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/kyc/verify/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])
    if(data?.status === 1){
        return <Navigate to='/assets/withdraw' sate={{from:location}} replace ></Navigate>
        
    }else{
        return children;  
    }

   
    
}

export default KycRoute;