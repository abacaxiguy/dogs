import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useSelector } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import {
  InputContainer,
  Button,
  Animate,
  Title,
  Forms,
  LoginSection,
} from '../../styles/GlobalStyles';
import { Register, Form } from './styled';
import { toast } from 'react-toastify';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const isLoading = useSelector((state) => state.auth.isLoading);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      return toast.error('Invalid fields!');
    }

    dispatch(actions.loginRequest({ username, password, prevPath }));
  }

  return (
    <Animate>
      <LoginSection>
        <Forms>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                id="username"
                onChange={({ target }) => setUsername(target.value)}
              ></input>
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={({ target }) => setPassword(target.value)}
              ></input>
            </InputContainer>
            <Button disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
          </Form>
          <Register>
            <h2>Register</h2>
            <p>Still don&apos;t have an account? Create your account now.</p>
            <Link to="/login/register">
              <Button>Create account</Button>
            </Link>
          </Register>
        </Forms>
      </LoginSection>
    </Animate>
  );
}
