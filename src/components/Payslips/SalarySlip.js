import React from 'react'
import { Icon } from '@iconify/react';
import { Card,Row,Col } from 'react-bootstrap';
import PieChart from '../Charts/PieChart';
import EmployeeInfo from './EmployeeInfo';
import NetPay from './NetPay';
import NetEarning from './NetEarning';

const SalarySlip = () => {
const printBody = () => {
    window.print()
}

    return (
        <>
            <Card className='cardSlip'>
                <Card.Title>
                    <h4>Payslip for May 2022</h4>
                    <ul className='action-title'>
                        <li><button className='btn btn-icon'><Icon icon="charm:download" /></button> </li>
                        <li><button className='btn btn-icon' onClick={printBody}><Icon icon="ion:print" /></button> </li>
                    </ul>
                </Card.Title>
                <Card.Body>
                    <div className="header-card">
                          <div className="chart">
                            <PieChart/>  
                            </div> 
                            <div className="media-body">
                            <h2>Paid: PKR 150,000 <i><Icon icon="lucide:check-circle" /></i></h2>
                            <ul>
                                <li>
                                    <div className="chart-label yellow">
                                        <span>Deduction</span>
                                        <div className="amount">PKR 12,000</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="chart-label green">
                                        <span>Reimbursements</span>
                                        <div className="amount">PKR 12,000</div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div className="printCard">
                        <div className="bodySlip">
                        <div className="company-info">
                            <h3>Aquila360</h3>
                            <div className="address">High-Q Tower, Jail Road, Lahore, Pakistan</div>
                        </div>
                        <div className="content-slip">
                            <h4>Payslip for the month of May 2022</h4>
                            <h5>Employee Pay Summary</h5>
                            <Row>
                                <Col lg="9">
                                    <EmployeeInfo/>
                                </Col>
                                <Col lg="3">
                                   <NetPay/>
                                </Col>
                            </Row>
                            <hr />
                            <NetEarning/>
                        </div>
                        </div>
                        <div className="total-payment">
                            <div className="total"><span>Total Net Payable</span> <span className="amount">PKR 150,000.00	</span> <small>(One hundred fifty thousand Pakistani Rupees)</small></div>
                        </div>
                        <div className="footer-page">
                            <p>**Total Net Payable = Gross Earnings - Total Deductions</p>
                            <p className='mt-5 text-center'>-- This is a system generated payslip, hence the signature is not required. --</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default SalarySlip