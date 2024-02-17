import React from 'react';
import { Link } from 'react-router-dom';

const SignUpToTradeBtn = ({data}) => {
    console.log(data)
    return (
        <>
              <div className="text-center py-5  mb-2 home-btn-bg desktop-version">
                <Link to={data?.url} className="btn btn-primary px-5 py-3">{data?.name}</Link>
            </div>
        </>
    );
};

export default SignUpToTradeBtn;