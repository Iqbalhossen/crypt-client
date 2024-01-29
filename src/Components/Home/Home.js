import React, { useEffect, useState } from 'react'
import Videos from './Videos/Videos'
import Bonus from './Bonus/Bonus'
import Notices from './Notices/Notices'
import Sliders from './Sliders/Sliders'
import PopularCryptocurrencies from './PopularCryptocurrencies/PopularCryptocurrencies'
import DiscoverProducts from './DiscoverProducts/DiscoverProducts'
import JoinCommunity from './JoinCommunity/JoinCommunity'
import TradeApp from './TradeApp/TradeApp'
import NewListing from './NewListing/NewListing'
import ChooseGffex from './ChooseGffex/ChooseGffex'
import MobileHome from '../Mobile/Home/MobileHome'
import MobileMenu from '../Mobile/Home/MobileMenu/MobileMenu'
import SingleHome from './SingleHome'
import Testimonial from './Testimonial/Testimonial'


export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://66.29.142.198:5000/api/frontend/home/home/section`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setData(data.data);
      });
  }, [])
  return (
    <>

      {data.map((data, index) =>
        <SingleHome data={data} key={data?._id}></SingleHome>
      )}

      {/* <Videos></Videos>
      <Bonus></Bonus>
      <Notices></Notices>
      <Sliders></Sliders>
      <PopularCryptocurrencies></PopularCryptocurrencies>
      <NewListing></NewListing>
      <ChooseGffex></ChooseGffex>
      <DiscoverProducts></DiscoverProducts>
      <JoinCommunity></JoinCommunity>
      <TradeApp></TradeApp>
     */}
     <Testimonial></Testimonial>
      <MobileHome></MobileHome>
    </>
  )
}
