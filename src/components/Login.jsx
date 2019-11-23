import React from 'react'
import { Col, Form, Button, Alert } from 'react-bootstrap'
import { AuthConsumer } from './AuthContext'

export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userName: '', password: '' }
  }

  handleChange = ({ target: { name, value } }) => {
    if (this.state[name] === undefined) return
    this.setState({ [name]: value })
  }

  fakeSubmit = fn => e => {
    e.preventDefault()
    return fn(e)
  }

  render() {
    const { userName, password } = this.state
    const { location } = this.props
    const successRedirect =
      location && location.state && location.state.from
        ? location.state.from
        : '/'
    return (
      <div className="d-flex justify-content-center">
        <Col md={5}>
          <h3 className="text-center mb-4">Sign In</h3>
          <AuthConsumer>
            {({ login, errMsg, closeErrMsg }) => (
              <Form
                onChange={this.handleChange}
                onSubmit={this.fakeSubmit(
                  login(userName, password, successRedirect)
                )}
              >
                <Form.Group controlId="formBasicUserName">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    name="userName"
                    type="text"
                    placeholder="Enter user name"
                    defaultValue={userName}
                  />
                  <Form.Text className="text-muted">
                    To try it enter "reactUser"
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    defaultValue={password}
                  />
                  <Form.Text className="text-muted">
                    To try it enter "landing"
                  </Form.Text>
                </Form.Group>
                {errMsg && (
                  <Alert onClose={closeErrMsg} dismissible variant="danger">
                    {errMsg}
                  </Alert>
                )}
                <Button
                  variant="outline-success"
                  type="submit"
                  className="btn-block"
                >
                  Sign In
                </Button>
              </Form>
            )}
          </AuthConsumer>
        </Col>
      </div>
    )
  }
}
