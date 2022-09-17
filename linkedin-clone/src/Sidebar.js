import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';

function Sidebar() {
  return (
    <div class="sidebar">
        <div class="sidebar__top">
            <img src="https://media-exp1.licdn.com/dms/image/C4D16AQG8Z8Z2Z7Z8jQ/profile-displaybackgroundimage-shrink_350_1400/0/1628871400000?e=1634169600&v=beta&t=3Z7Z7Z8jQ" alt="" />
            <Avatar clasnnName="sidebar__avatar" />
            <h2>Augusto Hernandez</h2>
            <h4>aa.hernandez7602@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__statNumber">
                <p>viewes on post</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                
            </div>
        </div>
    </div>
  )
}

export default Sidebar