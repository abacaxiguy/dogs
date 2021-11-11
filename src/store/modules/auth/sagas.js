import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('You are successfully logged in.');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push('/account');
  } catch (e) {
    toast.error('Username or password invalid!');

    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  const { username, email, password } = payload;

  try {
    yield call(axios.post, '/users', { username, email, password });

    toast.success('Account created successfully.');
    yield put(actions.registerSuccess({ username, email, password }));

    history.push('/account');
  } catch (e) {
    const errors = get(e, 'response.data.error', []);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Unknown error.');
    }

    yield put(actions.registerFailure({ username, email, password }));
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
