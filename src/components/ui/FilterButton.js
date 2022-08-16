import React from 'react'
import { Dropdown } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const FilterButton = ({btnCaption,filter1, filter2}) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle className="filterCta" id="dropdown-basic">
                     <span>{btnCaption}</span> <i><Icon icon="bi:filter" /></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-custom'>
                    <ul>
                        <li><Link to="#">{filter1} </Link></li>
                        <li><Link to="#">{filter2} </Link></li>
                    </ul>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default FilterButton