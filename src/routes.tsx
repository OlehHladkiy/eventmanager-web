import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { getIsAuthenticated } from '@modules/auth/Reducer';
import PrivateRoute from '@modules/auth/components/PrivateRoute';

// Auth pages.
const SignIn = lazy(() => import('@modules/auth/pages/SignIn'));
const SignUp = lazy(() => import('@modules/auth/pages/SignUp'));
// Settings pages.
const Setting = lazy(() => import('@modules/settings/pages/Settings'));
// Other pages.
const NotFoundPage = lazy(() => import('@components/NotFound'));

const RootRedirect = () => {
  const isAuth = useSelector(getIsAuthenticated);

  if (!isAuth) {
    return <Redirect to="/signin" />;
  }

  return <Redirect to={`/dashboard`} />;
};

export default (
  <>
    <Switch>
      <PrivateRoute exact path="/" component={RootRedirect} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute
        exact
        path="/settings/:settingsId(user)"
        component={Setting}
      />
      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </>
);
