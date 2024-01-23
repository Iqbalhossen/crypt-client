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

const DynamicSinglePage = ({data}) => {
    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
            fetch(`http://localhost:5000/api/frontend/page/menu/single/item/view/${data.name}/${data.menu_id}`, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    setSingleData(data);
                });
    }, [])
    if(singleData?.message === 'Top Bannar Section'){
        return (
            <>
                <Videos></Videos>
            </>
        );
    } 
    if(singleData?.message === 'Event Section'){
        return (
            <>
                <Bonus></Bonus>
            </>
        );
    }  
    if(singleData?.message === 'Slider Section'){
        return (
            <>
                <Sliders></Sliders>
            </>
        );
    }  
    if(singleData?.message === 'Cryptocurrencies Section'){
        return (
            <>
                <PopularCryptocurrencies></PopularCryptocurrencies>
            </>
        );
    }  
    if(singleData?.message === 'Notices Section'){
        return (
            <>
              <Notices></Notices>  
            </>
        );
    }    
    if(singleData?.message === 'New Listing Section'){
        return (
            <>
                <NewListing></NewListing>
            </>
        );
    } 
    if(singleData?.message === 'Choose GFFEX Section'){
        return (
            <>
                <ChooseGffex></ChooseGffex>
            </>
        );
    } 
    if(singleData?.message === 'Our Products Section'){
        return (
            <>
                <DiscoverProducts></DiscoverProducts>
            </>
        );
    }
    if(singleData?.message === 'Community Section'){
        return (
            <>
                <JoinCommunity></JoinCommunity>
            </>
        );
    } 
    if(singleData?.message === 'Gffex App Section'){
        return (
            <>
                <TradeApp></TradeApp>
            </>
        );
    } 
    if(singleData?.message === 'Start Thrade Button'){
        return (
            <>
                <StartThradeBtn></StartThradeBtn>
            </>
        );
    }  
    if(singleData?.message === 'SignUp To Thrade Button'){
        return (
            <>
                <SignUpToTradeBtn></SignUpToTradeBtn>
            </>
        );
    }    

   
};

export default DynamicSinglePage;