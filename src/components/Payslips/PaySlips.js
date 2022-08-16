import React from 'react'

import { Row,Col  } from 'react-bootstrap';
import MonthInfo from './MonthInfo';
import SalarySlip from './SalarySlip';
const PaySlips = () => {

  return (
      <>
      <div className="content py-3">
            <Row>
               <Col lg="3">
                    <MonthInfo/>
                </Col> 
                <Col lg="9">
                    <SalarySlip/>    
                </Col>            
            </Row>
      </div>
      </>
  )
}

export default PaySlips