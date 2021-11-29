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

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* registerRequest({ payload }) {
  const { username, email, password } = payload;

  try {
    yield call(axios.post, '/users', { username, email, password });

    toast.success('Account created successfully.');
    yield put(actions.registerSuccess({ username, email, password }));

    history.push('/account');
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Unknown error.');
    }

    yield put(actions.registerFailure({ username, email, password }));
  }
}

function* registerSuccess({ payload }) {
  const { username, password } = payload;

  try {
    yield put(actions.loginRequest({ username, password }));
  } catch (e) {
    toast.error('Unknown error.');
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.REGISTER_SUCCESS, registerSuccess),
]);
