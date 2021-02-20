import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useHistory, RouteProps } from 'react-router-dom';

import { getIsAuthenticated } from '../Reducer';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const history = useHistory();
  const isAuthenticated = useSelector(getIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/signin');
      return;
    }
  }, [history, isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props): React.ReactNode => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }

        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default PrivateRoute;
