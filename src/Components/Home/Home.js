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
import Skeleton from 'react-loading-skeleton'
import { Circles } from 'react-loader-spinner'
import AllMarkets from './AllMarkets/AllMarkets'
import TradingPlatform from './TradingPlatform/TradingPlatform'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/frontend/home/home/section`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setData(data.data);
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


  return (
    <>

      {data.map((data, index) =>
        <SingleHome data={data} key={data?._id}></SingleHome>
      )}
      {/* <AllMarkets></AllMarkets>
      <Testimonial></Testimonial>
      <TradingPlatform></TradingPlatform> */}
      <MobileHome></MobileHome>
    </>
  )
}
