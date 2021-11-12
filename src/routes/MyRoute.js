import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function MyRoute({
  component: Component,
  isClosed,
  isLoggedOff,
  ...rest
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  if (isLoggedOff && isLoggedIn) {
    return <Redirect to={{ pathname: '/account' }} />;
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
  isLoggedOff: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
  isLoggedOff: PropTypes.bool,
};
