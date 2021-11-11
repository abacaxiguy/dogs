import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function MyRoute({
  component: Component,
  isClosed,
  isLoggedOff,
  ...rest
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    toast.error('Login required');
    return <Redirect to={{ pathname: '/login' }} />;
  }

  if (isLoggedOff && isLoggedIn) {
    return <Redirect to={{ pathname: '/' }} />;
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
