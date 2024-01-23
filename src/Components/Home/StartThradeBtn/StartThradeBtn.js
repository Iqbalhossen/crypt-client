import React from 'react';
import { Link } from 'react-router-dom';

const StartThradeBtn = () => {
    return (
        <>
            <div className="text-center pb-5 pt-2 desktop-version">
                <Link to='#' className="btn btn-primary px-5 py-3">Start Trading</Link>
            </div>
        </>
    );
};

export default StartThradeBtn;