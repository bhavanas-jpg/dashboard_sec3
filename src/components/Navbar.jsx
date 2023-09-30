import React from 'react'
import logo from "../assets/logo.svg"
import settings from "../assets/Vector.svg";
import workspace from "../assets/Vector-1.svg";
import report from "../assets/report.svg"

const Navbar = () => {
  return (
    <div className="navbar__container">
     <img
     className="logo"
     src={logo}
     alt="logo"
     />
     <ul>
    
        <li className="nav__item">
          <img src={report} alt="reports-icon" />
          Reports</li>
        <li className="nav__item active">
        <img src={workspace} alt="workspace-icon" />
          Workspaces</li>
        <li className="nav__item">
        <img src={settings } alt="settings-icon" />
          Settings</li>
     </ul>
    </div>
  )
}

export default Navbar