import React from 'react';
import { Link } from 'react-router-dom';

const StartThradeBtn = ({data}) => {
    return (
        <>
            <div className="text-center pb-5 pt-2 desktop-version">
                <Link to={data?.url} className="btn btn-primary px-5 py-3">{data?.name}</Link>
            </div>
        </>
    );
};

export default StartThradeBtn;