

import React, { createContext, useState } from 'react';
const getlocalStorageItem = () =>{
    let userId = localStorage.getItem("ID");
    if(userId){

        return JSON.parse(userId);
    }else{
// console.log("is ok")

        return null;
    }

}

export const AuthContext = createContext('');

const MobileAuthProvider = ({children}) => {
    const [authUser, setUser] = useState(localStorage.getItem("ID"));
    const {isLoading, setLoading} = useState(false);
    const LoginWithEmail = (data) =>{
        setUser(data);
        console.log("context api : ", data);
    }

      
    function getCookie(name) {
        const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
        return cookieValue ? cookieValue.pop() : '';
      }

      let token = getCookie('gffex_token');

    const authInfo = {authUser, LoginWithEmail, isLoading, setLoading, setUser, token};
console.log(authUser)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default MobileAuthProvider;