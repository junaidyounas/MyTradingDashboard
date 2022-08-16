import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const MonthInfo = (props) => {
    const data = [
        { id: 1, month: "May 2022", amount: '150,000' },
        { id: 2, month: "May 2022", amount: '150,000' },
        { id: 3, month: "May 2022", amount: '150,000' },
        { id: 4, month: "May 2022", amount: '150,000' },
        { id: 5, month: "May 2022", amount: '150,000' },
        { id: 6, month: "May 2022", amount: '150,000' },

    ];
    return (
        <>

            {data.map((user) => (

                <Link to="#" className='cardMonth'>
                    <div className="media-header">
                        <h4>{user.month}</h4>
                        <i className='status'><Icon icon="lucide:check-circle" /></i>
                    </div>
                    <div className="media-body">
                        <p>Paid: PKR{user.amount}</p>
                    </div>
                </Link>
            ))}
        </>

    )
}

export default MonthInfo