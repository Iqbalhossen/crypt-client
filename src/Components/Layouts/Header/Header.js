import React, { useContext, useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import logo from './logo.png';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Header() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  const [isOpenUserSidebar, setIsopenUserSidebar] = useState(false);

  const ToggleUserSidebar = () => {
    isOpenUserSidebar === true ? setIsopenUserSidebar(false) : setIsopenUserSidebar(true);
  }


  const { LoginWithEmail, authUser, setLoading } = useContext(AuthContext);

  const location = useLocation();
  const from = "/login";
  const navigate = useNavigate();
  const [remove, setremove] = useState(false);
  function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : '';
  }

  let token = getCookie('gffex_token');
  const SignOut = () => {
    document.cookie = `gffex_token=; expires=${new Date(0).toUTCString()}; path=/`;
    localStorage.removeItem("ID");
    const data = null;
    LoginWithEmail(data);
    if (authUser === null) {
      navigate(from, { replace: true });
    }
    setremove(true)
  }
  const logout = localStorage.getItem("ID");;


  useEffect(() => {
    if (!logout && remove === true) {
      navigate(from, { replace: true });
    }
  }, [remove])



  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://66.29.142.198:5000/api/frontend/home/menu/view`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setData(data.data);
      });


  }, [])

  const filteredMenu = data.filter((data) => data.slug !== '/');
  const [logoData, setLogoData] = useState([]);
  useEffect(() => {
    fetch(`http://66.29.142.198:5000/api/frontend/home/header/setting/view`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setLogoData(data.data))
  }, [])
  return (
    <>



      <header className='header-area px-3 desktop-version'>
        <div className="logo">
          <Link to='/'>
            <img src={`http://66.29.142.198:5000/${logoData?.logo}`} alt="" />
            {/* <img src={logo} alt="" /> */}
          </Link>
        </div>
        <nav className='menu-area'>
          <ul>
            <li><Link to='/'>Home</Link></li>


            {filteredMenu.map((data, index) => <MenuItem data={data} key={data?._id}></MenuItem>)}
            {/* <li ><Link to='#' className='menu-with-img'> November Futures Competition
              <img src="https://www.mexc.com/api/file/download/F20230513123659282d06twGdPWw54E3" alt="" />
            </Link>
            </li> */}
          </ul>
        </nav>
        <div className="header-right d-flex align-items-center justify-content-end">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className="search-btn" placeholder="Search" />
          </div>
          {token ?
          //  <button className="btn btn-primary" onClick={SignOut} >Logout</button>
          <>
          <div className='sidebar-toggle-Btn' onClick={ToggleUserSidebar} >
          <FontAwesomeIcon icon="fa-regular fa-user" />
          </div>
          </>
            :
            <Link to='/login' className="btn btn-primary">Log In/Sign Up</Link>}
          <div className='sidebar-toggle-Btn' onClick={ToggleSidebar} >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

      </header>
      <div>

      </div>


      <div className={`sidebar ${isOpen === true ? 'active' : ''}`} data-theme={theme}>
        <div >
          <div className="container">
            <div class="close-btn" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
            {/* <div class="d-grid gap-2 mt-2">

              {token ?
                <>
                  <Link class="btn btn-primary fst-normal" onClick={SignOut} >Logout</Link>
                </> :
                <> <Link class="btn btn-primary fst-normal" to='/login'>Log In/Sign Up</Link>
                </>}
            </div> */}
          </div>
          <div className='mt-2 sidebar-menu'>
            <Link to=''>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Download Gffexvip</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            <Link to=''>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>USD</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            <div onClick={switchTheme}>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Light Mode</span>
                <div class="btn-container">
                  <label class="switch btn-color-mode-switch">
                    <input type="checkbox" name="color_mode" id="color_mode" value="1" />
                    <label htmlFor="color_mode" class="btn-color-mode-switch-inner"></label>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>


      {/* User Sidebar */}
      <div className={`sidebar ${isOpenUserSidebar === true ? 'active' : ''}`} data-theme={theme}>
        <div >
          <div className="container">
            <div class="close-btn" onClick={ToggleUserSidebar}><i className="fa fa-times"></i></div>
            
          </div>
          <div className='mt-2 sidebar-menu'>
            <Link to='/dashboard'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Profile</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            <Link to='/assets/deposit'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Deposit</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            
            <Link to='/user/practice/trade'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Practice Trade</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            <Link to='/user/practice/trade/history'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Practice Trade History</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            
            <Link to='/user/trade'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Trade</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            <Link to='/user/trade/history'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Trade History</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>

            <Link to='/assets/withdraw'>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Withdraw</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            <Link onClick={SignOut}>
              <div class="header_mobileMenuBtn__KBVfi">
                <span>Log Out</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpenUserSidebar === true ? 'active' : ''}`} onClick={ToggleUserSidebar}></div>
      {/* <div>
        <button onClick={switchTheme}> Theme</button>
      </div> */}
    </>
  )
}
