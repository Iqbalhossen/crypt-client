import React, { useEffect, useState } from 'react';
import PopularCryptocurrencies from '../../Home/PopularCryptocurrencies/PopularCryptocurrencies';
import Videos from '../../Home/Videos/Videos';
import Bonus from '../../Home/Bonus/Bonus';
import Sliders from '../../Home/Sliders/Sliders';
import Notices from '../../Home/Notices/Notices';
import NewListing from '../../Home/NewListing/NewListing';
import ChooseGffex from '../../Home/ChooseGffex/ChooseGffex';
import DiscoverProducts from '../../Home/DiscoverProducts/DiscoverProducts';
import JoinCommunity from '../../Home/JoinCommunity/JoinCommunity';
import TradeApp from '../../Home/TradeApp/TradeApp';
import StartThradeBtn from '../../Home/StartThradeBtn/StartThradeBtn';
import SignUpToTradeBtn from '../../Home/SignUpToTradeBtn/SignUpToTradeBtn';
import Skeleton from 'react-loading-skeleton';
import { Circles } from 'react-loader-spinner';

const DynamicSinglePage = ({data}) => {
    const [singleData, setSingleData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
            fetch(`https://demeserver.gffex.xyz/api/frontend/page/menu/single/item/view/${data.name}/${data.menu_id}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setSingleData(data);
                    setLoading(false)
                });
    }, [])

  
    
    if (loading) {
        return (
            <>
                <div className="loader-section d-flex justify-content-center align-items-center">
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
                {/* <Skeleton count={30} height={20} /> */}
            </>
        );
    }

    if (singleData?.message === 'Top Bannar Section') {
        const data = singleData?.VideosData;
        return (
            <>
                <Videos data={data}></Videos>
            </>
        );
    }
    if (singleData?.message === 'Event Section') {
        const data = singleData?.Bounsdata;
        return (
            <>
                <Bonus data={data}></Bonus>
            </>
        );
    }
    if (singleData?.message === 'Slider Section') {
        const data = singleData?.SliderData;
        return (
            <>
                <Sliders data={data}></Sliders>
            </>
        );
    }
    if (singleData?.message === 'Cryptocurrencies Section') {
        const data = singleData?.CryptocurrenciesData;
        return (
            <>
                <PopularCryptocurrencies data={data}></PopularCryptocurrencies>
            </>
        );
    }
    if (singleData?.message === 'Notices Section') {
        const data = singleData?.NoticesData;
        return (
            <>
                <Notices data={data}></Notices>
            </>
        );
    }
    if (singleData?.message === 'New Listing Section') {
        const data = singleData?.NewListingData;
        return (
            <>
                <NewListing data={data}></NewListing>
            </>
        );
    }
    if (singleData?.message === 'Choose GFFEX Section') {
        const data = singleData?.ChooseGFFEXData;
        return (
            <>
                <ChooseGffex data={data}></ChooseGffex>
            </>
        );
    }
    if (singleData?.message === 'Our Products Section') {
        const data = singleData?.OurProductsData;
        return (
            <>
                <DiscoverProducts Title={data}></DiscoverProducts>
            </>
        );
    }
    if (singleData?.message === 'Community Section') {
        const data = singleData?.CommunityData;
        return (
            <>
                <JoinCommunity data={data}></JoinCommunity>
            </>
        );
    }
    if (singleData?.message === 'Gffex App Section') {
        const data = singleData?.GffexAppData;
        return (
            <>
                <TradeApp data={data}></TradeApp>
            </>
        );
    }
    if (singleData?.message === 'Start Thrade Button') {
        const data = singleData?.StartThradeBtnData;
        return (
            <>
                <StartThradeBtn data={data}></StartThradeBtn>
            </>
        );
    }
    if (singleData?.message === 'SignUp To Thrade Button') {
        const data = singleData?.SignUpToTradeBtnData;
        return (
            <>
                <SignUpToTradeBtn data={data}></SignUpToTradeBtn>
            </>
        );
    }

   
};

export default DynamicSinglePage;