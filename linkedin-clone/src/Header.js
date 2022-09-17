import React from 'react'
import "./Header.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LinkedinImage from "./assets/linkedin.png"
import HeaderOption from './headerOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications'
import AvatarIcon from '@mui/icons-material/AccountCircle'

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src={LinkedinImage} alt="" />
            <div className="header__search">
                <SearchRoundedIcon/>
                <input type="text" />
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon}title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationIcon} title="Notifications"/>
                <HeaderOption Icon={AvatarIcon} title="Avatars"/>
            </div>
        </div>
    </div>
  )
}

export default Header