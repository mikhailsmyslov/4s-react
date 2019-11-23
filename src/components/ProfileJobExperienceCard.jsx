import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'

export default props => {
  const {
    companyName = '',
    jobTitle = '',
    hired = '',
    left = '',
    duties = [],
  } = props

  return (
    <Card border="light" className="w-100 mb-5">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{companyName}</Card.Title>
          </Col>
          <Col>
            <p>
              {hired} - {left}
            </p>
          </Col>
        </Row>
        <h6>{jobTitle}</h6>
          <ul>
            {duties.map((duty, ind) => (
              <li key={ind}>{duty}</li>
            ))}
          </ul>
      </Card.Body>
    </Card>
  )
}
