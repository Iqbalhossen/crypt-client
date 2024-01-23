import React, { useRef } from 'react';
import SpotItems from '../SpotItems/SpotItems';
import Futures from '../Futures/Futures';

const MarketsMenu = () => {


    
    const refSpotShow = useRef();
    const refSpotClassAdd = useRef();
    const refFuturesShow = useRef();
    const refFuturesClassAdd = useRef();


    const handleMenuItems = (data) => {
        if (data === 'Spot') {
            refSpotShow.current.style.display = "block";
            refFuturesShow.current.style.display = "none";
           

            refSpotClassAdd.current.classList.add("active-markets-content-menu");
            refFuturesClassAdd.current.classList.remove("active-markets-content-menu");
    
        }

        if (data === 'Futures') {
            refFuturesShow.current.style.display = "block";
            refSpotShow.current.style.display = "none";
           

            refFuturesClassAdd.current.classList.add("active-markets-content-menu");
            refSpotClassAdd.current.classList.remove("active-markets-content-menu");
           
            
        }
       
    }


    return (
        <>
            <div className="container-custom">
                <div className="Markets-Menu-section">
                    <h4 className='active-markets-content-menu' ref={refSpotClassAdd} onClick={()=>handleMenuItems('Spot')}>Spot</h4>
                    <h4 onClick={()=>handleMenuItems('Futures')} ref={refFuturesClassAdd}>Futures <span>0 Maker Fees</span></h4>
                </div>
            </div>


            {/* Markets Content section  */}
           <div ref={refSpotShow}>
           <SpotItems></SpotItems>
           </div>

           <div ref={refFuturesShow} style={{display:'none'}}>
           <Futures></Futures>
           </div>
         
        </>
    );
};

export default MarketsMenu;