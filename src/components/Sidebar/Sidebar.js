import React from 'react'
import {  NavLink,Link } from "react-router-dom";
import Logo from '../../assets/images/logo.svg';
import { Icon } from '@iconify/react';
import SideBarFooter from './SideBarFooter';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
          <Link to="/" ><img src={Logo} alt="" /></Link>
      </div>
      <div className="sidebar-navs">
        <ul className='navBars'>
          <li><NavLink to="/"  className={isActive =>"navLinks" + (!isActive ? " unselected" : "")}>
            <i className='icon'><Icon icon="fluent:home-16-filled" /></i> <span>Dashboard</span></NavLink></li>
          <li><NavLink to="/payslips" className='navLinks'><i className='icon'><Icon icon="fa:pencil-square" /></i> <span>Salary</span></NavLink></li>
        </ul>
      </div>
      <SideBarFooter/>
    </div>
  )
}

export default Sidebar