import React from 'react'
import { Table } from 'react-bootstrap';
const NetEarning = () => {
    const earning = [
        {id:1,type:'Basic',unitRate:100000,payable:100000},
        {id:2,type:'Overtime',unitRate:100000,payable:100000},
        {id:3,type:'Tax',unitRate:100000,payable:100000}
    ]
   
    let sum = earning.reduce(function(prev, current) {
        return prev + +current.payable
}, 0);


    return (
        <>
            <Table responsive className='mb-0 table-secondary'>
                <thead>
                    <tr>
                        <th>Earnings</th>
                        <th>Unit Rate</th>
                        <th>Unit Rate</th>
                        <th className='payable'>Payable</th>
                    </tr>
                </thead>
                <tbody>
                    {earning.map((earn) => (
                        <tr>
                        <td>{earn.type}</td>
                        <td><strong>PKR {earn.unitRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}	</strong></td>
                        <td><strong>PKR {earn.unitRate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}	</strong></td>
                        <td><strong className='payable'>PKR {earn.payable.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}	</strong></td>
                        </tr>
                    ))}
                   
                   
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}><strong>Net Salary</strong></td>
                        <td><div className="total">PKR {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}	</div></td>
                    </tr>
                </tfoot>
            </Table></>
    )
}

export default NetEarning