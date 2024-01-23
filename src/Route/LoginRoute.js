import React from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const LoginRoute = ({children}) => {

    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
      }

      
    const location = useLocation();
    let token = getCookie('gffex_token');

    if(!token){
        return children;
        
    }
    else if(token){
        return <Navigate to='/dashboard' state={{from:location}} replace ></Navigate>

    }
 
   

  
   
}

export default LoginRoute;