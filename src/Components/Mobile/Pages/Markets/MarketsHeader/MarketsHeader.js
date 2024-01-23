import React from 'react';
import { Link } from 'react-router-dom';

const MarketsHeader = () => {
    return (
        <>
          <div className="markets-header-section container-custom">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <input type="text" placeholder="Search" />
                    <Link><i class="fa-solid fa-headphones"></i></Link>
                </div>
            </div>
        </>
    );
};

export default MarketsHeader;