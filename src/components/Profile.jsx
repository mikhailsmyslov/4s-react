import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { AuthConsumer } from './AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import PersonalDataBlock from './ProfilePersonalDataBlock'
import JobExperienceBlock from './ProfileJobExperienceBlock'
import HobbiesBlock from './ProfileHobbiesBlock'

export default () => (
  <AuthConsumer>
    {({ user, logout }) => (
      <>
        <Row className="mb-2">
          <Col >
            <h2>
              Profile
              <small className="text-muted ml-4">{user.nickName}</small>
            </h2>
          </Col>
          <Col className="text-right">
            <Button variant="link" onClick={logout()} className="text-dark">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Log out
            </Button>
          </Col>
        </Row>
        <PersonalDataBlock {...user} />
        <JobExperienceBlock {...user} />
        <HobbiesBlock {...user} />
      </>
    )}
  </AuthConsumer>
)
