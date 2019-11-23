import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { AuthConsumer } from './AuthContext'

export default () => (
  <AuthConsumer>
    {({ user, logout }) => (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/" className="navbar-brand">
          <img src={logo} style={{ height: '5vmin' }} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/news" className="nav-link">
              News
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </Nav>
          {user ? (
            <Button variant="outline-success" onClick={logout()}>
              Sign Out
            </Button>
          ) : (
            <Link to="/login" className="btn btn-outline-success">
              Sign In
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    )}
  </AuthConsumer>
)
