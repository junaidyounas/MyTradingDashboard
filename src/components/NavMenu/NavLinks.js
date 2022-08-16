import React from 'react'

import { Nav } from 'react-bootstrap';
const NavLinks = () => {
    return (
        <>
                <ul className="customNavs">
                    <li>
                        <Nav.Link className='cta-link' >Salary Structure</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link className='cta-link active' >Payslips</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link className='cta-link'>Annual Earnings</Nav.Link>
                    </li>
                </ul>

        </>
    )
}

export default NavLinks