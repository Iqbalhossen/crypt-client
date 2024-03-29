import React from 'react'
import './darkTheme.css';
import './lightTheme.css';
import './index.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Layouts/HomeMain';
import Home from './Components/Home/Home';
import LoginForm from './Components/Auth/LoginForm/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm/RegisterForm';
import UserDashBoard from './Components/Page/User/UserDashBoard/UserDashBoard';
import UserPrivateRoute from './Route/UserPrivateRoute';
import LoginRoute from './Route/LoginRoute';
import UserLogin from './Components/Mobile/UserAuth/UserLogin';
import UserMobilePrivateRoute from './Route/UserMobilePrivateRoute';
import MobileLoginRoute from './Route/MobileLoginRoute';
import MobileProfileDashboard from './Components/Mobile/MobileProfile/MobileProfileDashboard';
import DynamicPage from './Components/Page/DynamicPage/DynamicPage';
import Markets from './Components/Mobile/Pages/Markets/Markets';
import MobileDashBoard from './Components/Mobile/Pages/MobileDashBoard/MobileDashBoard';
import MobileKycPage from './Components/Mobile/Pages/MobileKycPage/MobileKycPage';
import DrivingLicense from './Components/Mobile/Pages/MobileKycPage/DrivingLicense/DrivingLicense';
import NIDCard from './Components/Mobile/Pages/MobileKycPage/NIDCard/NIDCard';
import Passport from './Components/Mobile/Pages/MobileKycPage/Passport/Passport';
import Futures from './Components/Mobile/Pages/Futures/Futures';
import ForgetPassword from './Components/Auth/ForgetPassword/ForgetPassword';
import ReSetPassword from './Components/Auth/ReSetPassword/ReSetPassword';
import UserForget from './Components/Mobile/UserAuth/UserForget';
import Identification from './Components/Page/User/Identification/Identification';
import Referral from './Components/Page/User/Referral/Referral';
import Deposit from './Components/Page/User/Deposit/Deposit';
import Withdraw from './Components/Page/User/Withdraw/Withdraw';
import Trade from './Components/Page/User/Trade/Trade';
import PracticeTrade from './Components/Page/User/PracticeTrade/PracticeTrade';
import TransactionHistory from './Components/Page/User/TransactionHistory/TransactionHistory';
import ThradeNow from './Components/Page/User/Trade/ThradeNow/ThradeNow';
import PracticeTradeNow from './Components/Page/User/PracticeTrade/PracticeTradeNow/PracticeTradeNow';
import TradeHistory from './Components/Page/User/Trade/TradeHistory/TradeHistory';
import PracticeTradeHistory from './Components/Page/User/PracticeTrade/PracticeTradeHistory/PracticeTradeHistory';
import KycPage from './Components/Page/User/KycPage/KycPage';
import KycPrivateRoute from './Route/KycPrivateRoute';
import KycRoute from './Route/KycRoute';
import Demo from './Components/Demo/Demo';
import SupportTickets from './Components/Page/SupportTickets/SupportTickets/SupportTickets';
import SupportTicketsAdd from './Components/Page/SupportTickets/SupportTicketsAdd/SupportTicketsAdd';
import SupportTicketsView from './Components/Page/SupportTickets/SupportTicketsView/SupportTicketsView';
import ProfileUpdate from './Components/Page/User/ProfileUpdate/ProfileUpdate';
import PasswordChange from './Components/Page/User/PasswordChange/PasswordChange';
import AllMarkets from './Components/Home/AllMarkets/AllMarkets';
import ChatPage from './Components/LiveChatsPage/ChatPage/ChatPage';
import FixedDepositPage from './Components/Page/User/FixedDeposit/FixedDepositPage';
import FixedDeposit from './Components/Page/User/FixedDeposit/FixedDeposit';
import MiningPage from './Components/Page/User/Mining/MiningPage';
import Mining from './Components/Page/User/Mining/Mining';
import Loan from './Components/Page/User/Loan/Loan';
import MobileFixedDepositPage from './Components/Mobile/Pages/MobileFixedDeposit/MobileFixedDepositPage';
import MobileFixedDeposit from './Components/Mobile/Pages/MobileFixedDeposit/MobileFixedDeposit';
import MobileFixedDepositHistory from './Components/Mobile/Pages/MobileFixedDeposit/MobileFixedDepositHistory';
import MobileMiningPage from './Components/Mobile/Pages/MobileMining/MobileMiningPage';
import MobileMining from './Components/Mobile/Pages/MobileMining/MobileMining';
import MiningHistory from './Components/Mobile/Pages/MobileMining/History/MiningHistory';
import MobileLoan from './Components/Mobile/Pages/MobileLoan/MobileLoan';
import MobileTrade from './Components/Mobile/Pages/MobileTrade/MobileTrade';
function App() {

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<HomeMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/:slug" element={<DynamicPage />} />
          <Route path="/all/market" element={<AllMarkets />} />
          <Route path="dashboard" element={<UserPrivateRoute><UserDashBoard /></UserPrivateRoute>} />
          <Route path="/user/id-auth" element={<UserPrivateRoute><Identification /></UserPrivateRoute>} />
          <Route path="/user/referral" element={<UserPrivateRoute><Referral /></UserPrivateRoute>} />
          <Route path="/assets/deposit" element={<UserPrivateRoute><Deposit /></UserPrivateRoute>} />
          <Route path="/assets/withdraw" element={<UserPrivateRoute><KycPrivateRoute> <Withdraw /> </KycPrivateRoute></UserPrivateRoute>} />
          <Route path="/user/trade" element={<UserPrivateRoute><Trade /></UserPrivateRoute>} />
          <Route path="/user/trade/history" element={<UserPrivateRoute><TradeHistory /></UserPrivateRoute>} />
          <Route path="/user/practice/trade" element={<UserPrivateRoute><PracticeTrade /></UserPrivateRoute>} />
          <Route path="/user/practice/trade/history" element={<UserPrivateRoute><PracticeTradeHistory /></UserPrivateRoute>} />
          <Route path="/assets/record" element={<UserPrivateRoute><TransactionHistory /></UserPrivateRoute>} />
          <Route path="/user/trade/with/:name/:id" element={<UserPrivateRoute><ThradeNow /></UserPrivateRoute>} />
          <Route path="/user/practice/trade/with/:name/:id" element={<UserPrivateRoute><PracticeTradeNow /></UserPrivateRoute>} />
          <Route path="/user/id-auth/Kyc" element={<UserPrivateRoute><KycRoute><KycPage /></KycRoute></UserPrivateRoute>} />
          <Route path="/ticket" element={<UserPrivateRoute><SupportTickets/></UserPrivateRoute>} />
          <Route path="/ticket/new" element={<UserPrivateRoute><SupportTicketsAdd/></UserPrivateRoute>} />
          <Route path="/ticket/view/:id" element={<UserPrivateRoute><SupportTicketsView/></UserPrivateRoute>} />
          <Route path="/user/profile/update" element={<UserPrivateRoute><ProfileUpdate/></UserPrivateRoute>} />
          <Route path="/user/password/update" element={<UserPrivateRoute><PasswordChange/></UserPrivateRoute>} />
          <Route path="/user/fixed/deposit" element={<UserPrivateRoute><FixedDepositPage/></UserPrivateRoute>} />
          <Route path="/user/fixed/deposit/:id" element={<UserPrivateRoute><FixedDeposit/></UserPrivateRoute>} />
          <Route path="/user/loan" element={<UserPrivateRoute><Loan/></UserPrivateRoute>} />
          <Route path="/user/mining" element={<UserPrivateRoute><MiningPage/></UserPrivateRoute>} />
          <Route path="/user/mining/:id" element={<UserPrivateRoute><Mining/></UserPrivateRoute>} />
          <Route path="/live/chat" element={<UserPrivateRoute><ChatPage/></UserPrivateRoute>} />
        </Route>
        <Route path="login" element={<LoginRoute><LoginForm /></LoginRoute>} />
        <Route path="register" element={<LoginRoute><RegisterForm /></LoginRoute>} />
        <Route path="/forgot/password" element={<LoginRoute> <ForgetPassword /> </LoginRoute>} />
        <Route path="/reset/password/:id/:token" element={<LoginRoute> <ReSetPassword /> </LoginRoute>} />
        
        <Route path="user/login" element={<MobileLoginRoute><UserLogin /></MobileLoginRoute>} />
        <Route path="/user/forgot/password" element={<UserForget />} />
        {/* <Route path="user/dashboard" element={<UserMobilePrivateRoute><MobileProfileDashboard /></UserMobilePrivateRoute>} /> */}

        <Route path="markets" element={<Markets />} />
        <Route path="user/dashboard" element={<MobileDashBoard />} />
        <Route path="kyc/page" element={<MobileKycPage />} />
        <Route path="/kyc/driving/license" element={<DrivingLicense />} />
        <Route path="/kyc/nid/card" element={<NIDCard />} />
        <Route path="/kyc/passport" element={<Passport />} />
        <Route path="/futures" element={<Futures />} />
        <Route path="/fixed/deposit" element={<MobileFixedDepositPage />} />
        <Route path="/fixed/deposit/:id" element={<MobileFixedDeposit />} />
        <Route path="/fixed/deposit/history" element={<MobileFixedDepositHistory />} />
        <Route path="/mining" element={<MobileMiningPage />} />
        <Route path="/mining/:id" element={<MobileMining />} />
        <Route path="/mining/history" element={<MiningHistory />} />
        <Route path="/loan" element={<MobileLoan />} />
        <Route path="/trade" element={<MobileTrade />} />
      </Routes>
    </BrowserRouter>

 
  );
}

export default App;