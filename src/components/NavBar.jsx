import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { AuthConsumer } from './AuthContext'
import routes from '../routes'

export default () => (
  <AuthConsumer>
    {({ user, logout }) => (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to={routes.root} className="navbar-brand">
          <img src={logo} className="brand-logo" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to={routes.home} className="nav-link">
              Home
            </Link>
            <Link to={routes.news} className="nav-link">
              News
            </Link>
            <Link to={routes.profile} className="nav-link">
              Profile
            </Link>
          </Nav>
          {user ? (
            <Button variant="outline-success" onClick={logout()}>
              Sign Out
            </Button>
          ) : (
            <Link to={routes.login} className="btn btn-outline-success">
              Sign In
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    )}
  </AuthConsumer>
)
