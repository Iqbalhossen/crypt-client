import React from 'react';

const SingleMessageItem = ({ data, index }) => {
    if (data?.recevierId !== null) {
        return (
            <>
                <div className="media media-chat p-0">
                    {index === 0 ?
                        <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                        :
                        ''
                    }

                    <div className="media-body">
                        <p>{data?.message}</p>
                        {/* <p className="meta"><time datetime="2018">23:58</time></p> */}
                    </div>
                </div>

                {/* <div className="media media-meta-day">Today</div> */}


            </>
        );
    } else {
        return (
            <>

                <div className="media media-chat media-chat-reverse p-0 me-5">
                    <div className="media-body p-0">
                        <p>{data?.message}</p>
                        {/* <p className="meta"><time datetime="2018">00:12</time></p> */}
                    </div>
                </div>

            </>
        );
    }

};

export default SingleMessageItem;