import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import img1 from "./linkedin.png";
import HeaderOption from './HeaderOption';
import { Home, SupervisorAccount, } from '@mui/icons-material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { logout } from './features/userSlice';

function Header() {

  const dispatch = useDispatch();
  const auth = getAuth();

  const logoutOfApp = () => {

        dispatch(logout())
        auth.signOut();
  }
  return (
    <div className='header'>
      
      <div className="header__left">
          <img src={img1} alt="linkedin_logo" />

          <div className="header__search">
            <SearchIcon />
            <input placeholder='Search' type="text" />
          </div>
      </div>

      <div className="header__right">
            <HeaderOption Icon = {Home} title="Home" />
            <HeaderOption Icon = {SupervisorAccount} title="My Network" />
            <HeaderOption Icon = {BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon = {NotificationsIcon} title="Notification" />

            <HeaderOption avatar = {true} title="Me"
            onClick={logoutOfApp} />

      </div>
    </div>
    
  )
}

export default Header;