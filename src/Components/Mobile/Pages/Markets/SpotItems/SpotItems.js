import React, { useRef } from 'react';
import MainSpotItems from './MainSpot/MainSpotItems';
import InnovSpotItems from './Innov/InnovSpotItems';
import AssessmentSpotItems from './Assessment/AssessmentSpotItems';
import ZonexSpotItems from './Zonex/ZonexSpotItems';

const SpotItems = () => {

    const refMainShow = useRef();
    const refMainClassAdd = useRef();
    const refInnovShow = useRef();
    const refInnovClassAdd = useRef();
    const refAssessmentShow = useRef();
    const refAssessmentClassAdd = useRef();
    const refZonexShow = useRef();
    const refZonexClassAdd = useRef();


    const handleMenuItems = (data) => {
        if (data === 'Main') {
            refMainShow.current.style.display = "block";
            refInnovShow.current.style.display = "none";
            refAssessmentShow.current.style.display = "none";
            refZonexShow.current.style.display = "none";

            refMainClassAdd.current.classList.add("active-markets-content-menu");
            refInnovClassAdd.current.classList.remove("active-markets-content-menu");
            refAssessmentClassAdd.current.classList.remove("active-markets-content-menu");
            refZonexClassAdd.current.classList.remove("active-markets-content-menu");
        }

        if (data === 'Innov') {
            refInnovShow.current.style.display = "block";
            refMainShow.current.style.display = "none";
            refAssessmentShow.current.style.display = "none";
            refZonexShow.current.style.display = "none";

            refInnovClassAdd.current.classList.add("active-markets-content-menu");
            refMainClassAdd.current.classList.remove("active-markets-content-menu");
            refAssessmentClassAdd.current.classList.remove("active-markets-content-menu");
            refZonexClassAdd.current.classList.remove("active-markets-content-menu");
            
        }
        if (data === 'Assessment') {
            refAssessmentShow.current.style.display = "block";
            refMainShow.current.style.display = "none";
            refInnovShow.current.style.display = "none";
            refZonexShow.current.style.display = "none";

            refAssessmentClassAdd.current.classList.add("active-markets-content-menu");
            refMainClassAdd.current.classList.remove("active-markets-content-menu");
            refInnovClassAdd.current.classList.remove("active-markets-content-menu");
            refZonexClassAdd.current.classList.remove("active-markets-content-menu");
        }

        if (data === 'Zonex') {
            refZonexShow.current.style.display = "block";
            refMainShow.current.style.display = "none";
            refInnovShow.current.style.display = "none";
            refAssessmentShow.current.style.display = "none";

            refZonexClassAdd.current.classList.add("active-markets-content-menu");
            refMainClassAdd.current.classList.remove("active-markets-content-menu");
            refInnovClassAdd.current.classList.remove("active-markets-content-menu");
            refAssessmentClassAdd.current.classList.remove("active-markets-content-menu");
            
        }

    }


    return (
        <>
            <div className="markets-content-section">
                <div className="markets-content-menu container-custom">
                    <h5 onClick={() => handleMenuItems('Main')} ref={refMainClassAdd}  className='active-markets-content-menu'>Main</h5>
                    <h5 onClick={() => handleMenuItems('Innov')} ref={refInnovClassAdd}>Innov</h5>
                    <h5 onClick={() => handleMenuItems('Assessment')} ref={refAssessmentClassAdd}>Assessment</h5>
                    <h5 onClick={() => handleMenuItems('Zonex')} ref={refZonexClassAdd}>Zonex</h5>
                </div>
                <hr className='markets-content-menu-hr' />
                <div ref={refMainShow}>
                    <MainSpotItems ></MainSpotItems>
                </div>
                <div style={{display:'none'}} ref={refInnovShow}>
                    <InnovSpotItems ></InnovSpotItems>
                </div>
                <div  style={{display:'none'}} ref={refAssessmentShow}>
                   <AssessmentSpotItems></AssessmentSpotItems>
                </div>
                <div   style={{display:'none'}} ref={refZonexShow}>
                    <ZonexSpotItems></ZonexSpotItems>
                </div>
            </div>
        </>
    );
};

export default SpotItems;