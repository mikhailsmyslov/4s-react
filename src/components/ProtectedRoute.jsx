import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'
import routes from '../routes'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ user }) => (
      <Route
        render={props =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: routes.login, state: { from: props.location } }}
            />
          )
        }
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default ProtectedRoute
