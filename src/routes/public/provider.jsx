import React from 'react';
import LayoutProvider from 'layouts';
import { Route, Redirect } from 'react-router-dom';

const Provider = ({
  auth,
  layout,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      auth.authenticated && rest.restricted
        ? <Redirect to="/" />
        : (
          <LayoutProvider layout={layout}>
            <Component auth={auth} {...props} />
          </LayoutProvider>
        )
    )}
  />
);

export default Provider;
