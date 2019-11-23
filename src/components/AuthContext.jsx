import React from 'react'
import { Cookies } from 'react-cookie'
import fakeUser from '../assets/fakeUser'
import { Redirect } from 'react-router-dom'
import history from '../lib/history'
import routes from '../routes'

const AuthContext = React.createContext()

const validUserName = 'reactUser'
const validPassword = 'landing'
const authCookie = 'isAuth'

const cookies = new Cookies()

class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    const isAuth = cookies.get(authCookie)
    this.state = {
      errMsg: '',
      user: isAuth ? fakeUser : null,
    }
  }

  login = (userName, password, redirectTo = routes.home) => () => {
    const isValidCredentials =
      userName === validUserName && password === validPassword
    const errMsg = isValidCredentials
      ? ''
      : 'User name or password are not correct'
    if (isValidCredentials) {
      cookies.set(authCookie, true, { maxAge: 3600, path: routes.root })
      this.setState({ user: fakeUser, errMsg })
      history.push(redirectTo)
    } else {
      this.setState({ errMsg })
    }
  }

  logout = (redirectTo = routes.home) => () => {
    cookies.remove(authCookie)
    this.setState({ errMsg: '', user: null })
    history.push(redirectTo)
  }

  closeErrMsg = () => {
    this.setState({ errMsg: '' })
  }

  render() {
    const { children } = this.props
    const { redirectTo, user, errMsg } = this.state
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          logout: this.logout,
          errMsg,
          closeErrMsg: this.closeErrMsg,
          user,
        }}
      >
        {redirectTo ? <Redirect to={redirectTo} /> : null}
        {children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
