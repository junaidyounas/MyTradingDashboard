import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const PaymentHistory = () => {
    const payments = [
        { id: 1, month: "May 2022", amount: '200,000' },
        { id: 2, month: "May 2022", amount: '150,000' },
        { id: 3, month: "May 2022", amount: '150,000' },
        { id: 4, month: "May 2022", amount: '150,000' },
        { id: 5, month: "May 2022", amount: '150,000' },
        { id: 6, month: "May 2022", amount: '150,000' },

    ];
  return (
   <>  
   
   {payments.map((history) => (
    <div className="media-history">
    <div className="media-body">
        <span>{history.month}</span>
        <h4>PKR  {history.amount}</h4>
    </div>
    <Link to="/employee-Salary" className='cta'>View Slip <i><Icon icon="akar-icons:arrow-right" /></i></Link>
</div>
  ))}
  
 </>
  )
}

export default PaymentHistory