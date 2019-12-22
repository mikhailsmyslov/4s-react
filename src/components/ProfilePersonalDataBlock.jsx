import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default props => {
  const {
    avatar = '',
    firstName = '',
    lastName = '',
    age = '',
    email = '',
  } = props

  return (
    <Row className="mb-5">
      <Col md={4} >
        <img src={avatar} alt="avatar" className="w-100" />
      </Col>
      <Col md={{ offset: 1 }} ml={2}>
        <dl>
          <dt>First name:</dt>
          <dd>{firstName}</dd>
          <hr />
          <dt>Last name:</dt>
          <dd>{lastName}</dd>
          <hr />
          <dt>Age:</dt>
          <dd>{age}</dd>
          <hr />
          <dt>E-mail:</dt>
          <dd>
            <a href={`mailto:${email}`}>{email}</a>
          </dd>
          <hr />
        </dl>
      </Col>
    </Row>
  )
}
