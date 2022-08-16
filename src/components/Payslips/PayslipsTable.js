import React from 'react'
import { Table } from 'react-bootstrap';
import {  Link } from "react-router-dom";
const PayslipsTable = () => {
  return (
    <>
    <Table responsive className='mb-0'>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="checkbox" id='check1' className='checkbox-style' />
                    <label htmlFor="check1"></label>
                </th>
                <th>Month</th>
                <th>Gross Salary (PKR)</th>
                <th>Reimbursments</th>
                <th>Deductions</th>
                <th>Payslip</th>
                <th>Tax Worksheet</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <input type="checkbox" name="checkbox" id='check2' className='checkbox-style' />
                <label htmlFor="check2"></label>
            </td>
            <td><strong>May 2022</strong></td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            </tr>
            <tr>
            <td>
                <input type="checkbox" name="checkbox" id='check3' className='checkbox-style' />
                <label htmlFor="check3"></label>
            </td>
            <td><strong>May 2022</strong></td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            </tr>
            <tr>
            <td>
                <input type="checkbox" name="checkbox" id='check4' className='checkbox-style' />
                <label htmlFor="check4"></label>
            </td>
            <td><strong>May 2022</strong></td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            </tr>
            <tr>
            <td>
                <input type="checkbox" name="checkbox" id='check5' className='checkbox-style' />
                <label htmlFor="check5"></label>
            </td>
            <td><strong>May 2022</strong></td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            </tr>
            <tr>
            <td>
                <input type="checkbox" name="checkbox" id='check6' className='checkbox-style' />
                <label htmlFor="check6"></label>
            </td>
            <td><strong>May 2022</strong></td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            </tr>
            <tr>
            <td>
                <input type="checkbox" name="checkbox" id='check7' className='checkbox-style' />
                <label htmlFor="check7"></label>
            </td>
            <td><strong>May 2022</strong></td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td>PKR150,000</td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            <td><Link to="/employee-Salary" className='cta'>View</Link></td>
            </tr>
        </tbody>
    </Table>
</>
  )
}

export default PayslipsTable