import React from 'react'
import "./SideBar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function SideBar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={"./andrew-ridley-jR4Zf-riEjI-unsplash.jpg"} alt="background_image" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.photoUrl}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <span>2,455</span>
            </div>
            <div className="sidebar__stat">
                <p>Views on posts</p>
                <span>5,058</span>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
                {recentItem ("reactjs")}
                {recentItem ("programming")}
                {recentItem ("softwareengineering")}
                {recentItem ("design")}
                {recentItem ("developer")}
        </div>
    </div>
  )
}

export default SideBar;