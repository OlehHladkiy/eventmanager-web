import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { getIsAuthenticated } from '@modules/auth/AuthReducer';
import PrivateRoute from '@modules/auth/components/PrivateRoute';

// Auth pages.
const SignInPage = lazy(() => import('@modules/auth/pages/SignInPage'));
const SignUpPage = lazy(() => import('@modules/auth/pages/SignUpPage'));
// Settings pages.
const SettingsPage = lazy(() => import('@modules/settings/pages/SettingsPage'));
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
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/signup" component={SignUpPage} />
      <PrivateRoute
        exact
        path="/settings/:settingsId(user)"
        component={SettingsPage}
      />
      {/* Catch all routes */}
      <Route component={NotFoundPage} />
    </Switch>
  </>
);
