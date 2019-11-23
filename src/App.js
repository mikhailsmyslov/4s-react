import React from 'react';
import { Container } from 'react-bootstrap';
import { Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import LogIn from './components/Login';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import history from './lib/history';
import routes from './routes'

export default () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <NavBar />
        <Container as="main" className="mt-5">
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.news} component={News} />
            <Route path={routes.login} component={LogIn} />
            <ProtectedRoute path={routes.profile} component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </AuthProvider>
    </Router>
  );
};
