import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Photos from '../pages/Photos';
import Page404 from '../pages/Page404';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Photos} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/login/register" component={Register} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
