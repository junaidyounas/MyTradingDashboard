import React from 'react'
import { Row, Col } from 'react-bootstrap';

const EmployeeInfo = () => {
    return (
        <>
            <div className="info-employee">
                <Row>
                    <Col lg="3">
                        <p><strong>Employee Name</strong></p>
                    </Col>
                    <Col lg="9">
                        <p>Mohammad Arslan ud Din, *Employee number</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                        <p><strong>Designation</strong></p>
                    </Col>
                    <Col lg="9">
                        <p>Senior UI/UX Designer</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                        <p><strong>Date of Joining	</strong></p>
                    </Col>
                    <Col lg="9">
                        <p>19/04/2022</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                        <p><strong>Salary Period</strong></p>
                    </Col>
                    <Col lg="9">
                        <p>April 2022</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                        <p><strong>Pay Period	</strong></p>
                    </Col>
                    <Col lg="9">
                        <p>May 2022</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3">
                        <p><strong>Pay Date	</strong></p>
                    </Col>
                    <Col lg="9">
                        <p>15/06/2022</p>
                    </Col>
                </Row>
            </div></>
    )
}

export default EmployeeInfo