import React from 'react'
import { Icon } from '@iconify/react';
import { Dropdown } from 'react-bootstrap';
import Avatar from '../../assets/images/imgAvatar.png';
import { Link } from "react-router-dom";
const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="row">
                <div className="col-lg-7">
                    <div>
                        <h3>Welcome Mohammad Arslan!</h3>
                        <p>Senior User Interface and Experience Designer</p>
                    </div>
                    <h1 style={{ 'display': 'none' }}>Payslips</h1>
                </div>
                <div className="col-lg-5">
                    <div className='rightLinks'>
                        <div className="employee-cade">
                            <span>Employee Code: </span>
                            <h4>5as4a2</h4>
                        </div>
                        <ul >

                            <li><Link to="#" className='btn cta-primary'>Apply for <i><Icon icon="ant-design:plus-outlined" /></i> </Link></li>
                            <li style={{ 'display': 'none' }}><Link to="#" className='btn cta-default'>Download PDF</Link></li>
                            <li><Link to="#" className='rounded-btn'><Icon icon="iconoir:bell" /></Link></li>
                            <li><Link to="#" className='rounded-btn'><Icon icon="ic:sharp-search" /></Link></li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle className="user-btn" id="dropdown-basic">
                                        <img src={Avatar} alt="" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <ul>
                                            <li> <Link to="#">My Profile</Link></li>
                                            <li><Link to="#">Setting</Link></li>
                                            <li> <Link to="#">LogOut</Link></li>
                                        </ul>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar