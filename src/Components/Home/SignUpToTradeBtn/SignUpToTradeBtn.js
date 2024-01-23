import React from 'react';
import { Link } from 'react-router-dom';

const SignUpToTradeBtn = () => {
    return (
        <>
              <div className="text-center py-5  mb-2 home-btn-bg desktop-version">
                <Link to='#' className="btn btn-primary px-5 py-3">Sign up to trade</Link>
            </div>
        </>
    );
};

export default SignUpToTradeBtn;