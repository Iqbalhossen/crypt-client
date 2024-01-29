import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const KycPrivateRoute = ({children}) => {

    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`http://66.29.142.198:5000/api/kyc/verify/view/${authUser?._id}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            });


    }, [])
    if(data?.status === 0 || data?.status === 2 || data === null){
        return <Navigate to='/user/id-auth/Kyc' sate={{from:location}} replace ></Navigate>
        
    }else{
        return children;  
    }

   
    
}

export default KycPrivateRoute;