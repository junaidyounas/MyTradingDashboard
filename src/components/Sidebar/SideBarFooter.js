import React from 'react';
import { Icon } from '@iconify/react';
import {  Link } from "react-router-dom";
const SideBarFooter = () => {
    return (
        <> <div className='sidebarFooter'>
            <ul>
                <li>
                    <div className="mode"> 
                        <div className='media-body'><i className='moon'><Icon icon="ooui:moon" /></i> <span>Dark Mode</span>
                        </div>
                        <input type="checkbox" name='themeswitch' id='themeswitch' className="theme-switcher" />
                        <label htmlFor="themeswitch"> <span className='on'>ON</span><span className='off'>OFF</span>  </label>
                     </div>
                </li>
                <li>
               <Link to="#"> <i><Icon icon="majesticons:logout" /></i> <span>Logout</span></Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default SideBarFooter