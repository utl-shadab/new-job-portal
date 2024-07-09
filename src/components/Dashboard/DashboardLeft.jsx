import React, { useState } from 'react'
import HomeIcon from "../../assets/dashboard/home.svg"
import Lock from "../../assets/dashboard/lock.svg"
import Logout from "../../assets/dashboard/logout.svg"
import Msg from "../../assets/dashboard/msg.svg"
import Bookmark from "../../assets/dashboard/bookmark.svg"
import Dollar from "../../assets/dashboard/dollar.svg"
// import Users from "../../assets/dashboard/users.svg"
import Work from "../../assets/dashboard/work.svg"
import UserIcon from "../../assets/dashboard/person.svg"
import { Link } from 'react-router-dom';
import "../../App.css"
const DashboardLeft = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="dashboard-left-container">
      <div className="dashboard-items">
        <div className="dashboard-menus">
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'dashboard' ? 'active' : ''}`} onClick={() => handleMenuClick('dashboard')}>
            <img src={HomeIcon} height={"24px"} width={"24px"} alt="" />
            <Link to="/dashboard" className={activeMenu === 'dashboard' ? 'active' : ''}>Dashboard</Link>
          </div>
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'profile' ? 'active' : ''}`} onClick={() => handleMenuClick('profile')}>
            <img src={UserIcon} height={"24px"} width={"24px"} alt="" />
            <Link to="/profile" className={activeMenu === 'profile' ? 'active' : ''}>My Profile</Link>
          </div>
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'applied-jobs' ? 'active' : ''}`} onClick={() => handleMenuClick('applied-jobs')}>
            <img src={Work} height={"24px"} width={"24px"} alt="" />
            <Link to="/applied-jobs" className={activeMenu === 'applied-jobs' ? 'active' : ''}>Applied jobs</Link>
          </div>
         
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'save-jobs' ? 'active' : ''}`} onClick={() => handleMenuClick('save-jobs')}>
            <img src={Bookmark} height={"24px"} width={"24px"} alt="" />
            <Link to="/saved-jobs" className={activeMenu === 'save-jobs' ? 'active' : ''}>Save jobs </Link>
          </div>
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'message' ? 'active' : ''}`} onClick={() => handleMenuClick('message')}>
            <img src={Msg} height={"24px"} width={"24px"} alt="" />
            <Link to="/message" className={activeMenu === 'message' ? 'active' : ''}>Message</Link>
          </div>
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'employer' ? 'active' : ''}`} onClick={() => handleMenuClick('employer')}>
            <img src={Dollar} height={"24px"} width={"24px"} alt="" />
            <Link to="/plans" className={activeMenu === 'employer' ? 'active' : ''}>Plan and Billings</Link>
          </div>
         
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'change-passwords' ? 'active' : ''}`} onClick={() => handleMenuClick('change-passwords')}>
            <img src={Lock} height={"24px"} width={"24px"} alt="" />
            <Link to="/change-password" className={activeMenu === 'change-passwords' ? 'active' : ''}>Change passwords</Link>
          </div>
          <div className={`dash-menu d-flex gap-3 ${activeMenu === 'logout' ? 'active' : ''}`} onClick={() => handleMenuClick('logout')}>
            <img src={Logout} height={"24px"} width={"24px"} alt="" />
            <li><a href="#" className={activeMenu === 'logout' ? 'active' : ''}>Log Out</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLeft
