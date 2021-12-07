import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import {
  Animate,
  Button,
  Forms,
  InputContainer,
  LoginSection,
  Title,
} from '../../styles/GlobalStyles';
import { Form } from '../Login/styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import Head from '../../components/Head';

export default function Register() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    toast.error('You are already logged in.');
    history.push('/');
  }

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (username.length < 3 || username.length > 50) {
      formErrors = true;
      toast.error('Username must be between 3 and 50 characters.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Inavalid email address.');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Password must be between 6 and 50 characters.');
    }

    if (cpassword !== password) {
      formErrors = true;
      toast.error('Passwords must be identical.');
    }

    if (formErrors) return;

    dispatch(
      actions.registerRequest({
        username,
        email,
        password,
      }),
    );
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  return (
    <Animate>
      <Head
        title="Register your account"
        description="Create a new account now at Dogs"
      />
      <LoginSection>
        <Forms>
          <Title>Register</Title>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                id="username"
                onChange={({ target }) => setUsername(target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                value={email}
                id="email"
                onChange={({ target }) => setEmail(target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                value={cpassword}
                id="cpassword"
                onChange={({ target }) => setCpassword(target.value)}
              />
            </InputContainer>
            <Button disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Create account'}
            </Button>
          </Form>
        </Forms>
      </LoginSection>
    </Animate>
  );
}
