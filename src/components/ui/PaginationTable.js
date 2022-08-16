import React from 'react'
import { Icon } from '@iconify/react';
import { Pagination } from 'react-bootstrap';
const PaginationTable = () => {
    return (
        <>
            <>
                <Pagination className='align-items-center justify-content-end'>
                    <li><span>1-8 of 1240</span></li>

                    <Pagination.Item> <i><Icon icon="ep:arrow-left" /></i> </Pagination.Item>

                    <Pagination.Item><i><Icon icon="ep:arrow-right" /></i> </Pagination.Item>
                </Pagination>
            </>
        </>
    )
}

export default PaginationTable