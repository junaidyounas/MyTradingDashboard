import React from 'react'
import TopBar from '../components/Topbar/TopBar'
import { Link } from "react-router-dom";
import { Card, Row, Col, Tab, Nav ,ListGroup} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import WeeklyChart from '../components/Charts/WeeklyChart';
import MonthlyChart from '../components/Charts/MonthlyChart';
import PaymentHistory from '../components/dashboard/PaymentHistory';

const Dashboard = () => {

    return (
        <>
            <div className="content-wrapper">
                <TopBar />
                <div className="content py-3">
                    <Row>
                        <Col lg="3" className="mb-4">
                            <Card className="card-counter">
                                <div className='label'>Leave Requests</div>
                                <h3>10</h3>
                                <p><span className='text-primary'><i><Icon icon="ant-design:caret-up-filled" /></i>10.00%</span> up from last month</p>
                            </Card>
                        </Col>
                        <Col lg="3" className="mb-4">
                            <Card className="card-counter">
                                <Card.Text className='label'>Medical Reimbursements</Card.Text>
                                <h3>65,000 <span>PKR</span></h3>
                                <Card.Text><span className='text-primary'><i><Icon icon="ant-design:caret-up-filled" /></i>10.00%</span> up from last month</Card.Text>
                            </Card>
                        </Col>
                        <Col lg="3" className="mb-4">
                            <Card className="card-counter">
                                <Card.Text className='label'>Schooling</Card.Text>
                                <h3>50,000 <span>PKR</span></h3>
                                <Card.Text><span className='text-danger'><i><Icon icon="ant-design:caret-down-filled" /></i> 10.00%</span> up from last month</Card.Text>
                            </Card>
                        </Col>
                        <Col lg="3" className="mb-4">
                            <Card className="card-counter">
                                <Card.Text className='label'>On-time / Late attendance</Card.Text>
                                <h3>3</h3>
                                <Card.Text><span className='text-primary'><i><Icon icon="ant-design:caret-up-filled" /></i>10.00%</span> up from last month</Card.Text>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <Card className='card-payment-main mb-4'>
                                <Row className='align-items-center'>
                                    <Col lg="9">
                                        <ul>
                                            <li>
                                                <div className="chart-label blue">
                                                    <span>Your Net Pay</span>
                                                    <div className="amount">PKR 200,000</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="chart-label red">
                                                    <span>Deductions</span>
                                                    <div className="amount">PKR 50,000</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="chart-label yellow">
                                                    <span>Reimbursements</span>
                                                    <div className="amount">PKR 12,000</div>
                                                </div>
                                            </li>
                                        </ul>
                                        <Card.Text> <i><Icon icon="mdi:alert" /></i> <span>The infomation that you are seeing is for the upcoming period of payroll</span></Card.Text>
                          
                                    </Col>
                                    <Col lg="3" className='text-end'>
                                        <Link to="/employee-Salary" className='btn cta-primary'>View Slip <i><Icon icon="bi:arrow-right-short" /></i></Link>
                                    </Col>
                                </Row>
                            </Card>
                            <div className='title-card mb-3'>
                                <h4 className='title-lead'>Activity</h4>
                            </div>
                            <div className="main-tabs">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col lg={7}>
                                            <Nav variant="pills" className="customNavs">
                                                <Nav.Item>
                                                    <Nav.Link className='cta-link' eventKey="first">Weekly</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className='cta-link' eventKey="second">Monthly</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link className='cta-link' eventKey="third">Last year</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col lg={5} className="text-lg-end">
                                            
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <ListGroup className='group-btn'>
                                                        <ListGroup.Item><Nav.Link className='cta-link active'>Deductions</Nav.Link></ListGroup.Item>
                                                        <ListGroup.Item><Nav.Link className='cta-link'>Reimbursements</Nav.Link></ListGroup.Item>
                                                    </ListGroup>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                <ListGroup className='group-btn'>
                                                        <ListGroup.Item><Nav.Link className='cta-link active'>Deductions</Nav.Link></ListGroup.Item>
                                                        <ListGroup.Item><Nav.Link className='cta-link'>Reimbursements</Nav.Link></ListGroup.Item>
                                                    </ListGroup>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                <ListGroup className='group-btn'>
                                                        <ListGroup.Item><Nav.Link className='cta-link active'>Deductions</Nav.Link></ListGroup.Item>
                                                        <ListGroup.Item><Nav.Link className='cta-link'>Reimbursements</Nav.Link></ListGroup.Item>
                                                    </ListGroup>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Card.Body>
                                                <WeeklyChart/>
                                            </Card.Body>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <Card.Body>
                                           <MonthlyChart/>
                                           </Card.Body>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                          <Card.Body>
                                           <MonthlyChart/>
                                          </Card.Body>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div className="card-history h-100">
                            <div className='title-card mb-3'>
                                <h4 className='title-lead'>History</h4>
                                <Link to="/payslips" className='cta'>View All</Link>
                            </div>
                            <div className="cardBody">
                                    
                               <PaymentHistory/>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Dashboard