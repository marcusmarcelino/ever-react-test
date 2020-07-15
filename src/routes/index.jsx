import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router';

import DinamicCart from '../pages/Home/HomePage';
import MainPage from '../components/templates/Main';

const isAuthenticated = () => true;

const PrivateRoute = ({ component: Component, name }) => (
  <Route
    render={
      (props) =>
        isAuthenticated() ? (
          <MainPage title={name}>
            <Component component />
          </MainPage>
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      // eslint-disable-next-line react/jsx-curly-newline
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={() => <h1>Login</h1>} />
    <PrivateRoute exact path="/" component={() => <h1>Home</h1>} />
    <PrivateRoute exact path="/cart" name="Carrinho Dinâmico" component={DinamicCart} />
  </Switch>
);

export default Routes;
