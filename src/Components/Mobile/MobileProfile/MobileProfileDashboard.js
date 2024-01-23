import React, { useContext, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const MobileProfileDashboard = () => {



    const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

    const location = useLocation();
    const from = "/user/login";
    const navigate = useNavigate();
    const [remove, setremove] = useState(false);
    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
    }

    let token = getCookie('gffex_token');
    const SignOut = () => {
        document.cookie = `gffex_token=; expires=${new Date(0).toUTCString()}; path=/`;
        document.cookie = `gffex_token=; expires=${new Date(0).toUTCString()}; path=/user`;
        localStorage.removeItem("ID");
        const data = null;
        // LoginWithEmail(data);
        navigate(from, { replace: true });
        setremove(true)
    }
    const logout = localStorage.getItem("ID");;
    return (
        <div className='py-5 text-center'>
            <button className="btn btn-primary" onClick={SignOut} >Logout</button>

        </div>
    );
};

export default MobileProfileDashboard;