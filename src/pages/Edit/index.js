import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { isEmail } from 'validator';

import {
  Animate,
  Container,
  Button,
  InputContainer,
} from '../../styles/GlobalStyles';

import UserHeader from '../../components/UserHeader';
import Head from '../../components/Head';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';
import { Info } from './styled';


export default function Edit() {
  const user = useSelector((state) => state.auth.user.username);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/users');

        setUsername(response.data.username);
        setEmail(response.data.email);

      } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        if (errors.length > 0) {
          errors.map((error) => toast.error(error));
        } else {
          toast.error('Unknown error.');
        }
      }
    };

    getData();
  }, []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

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

    if (password) {
      if (password.length < 6 || password.length > 50) {
        formErrors = true;
        toast.error('Password must be between 6 and 50 characters.');
      }

      if (cpassword !== password) {
        formErrors = true;
        toast.error('Passwords must be identical.');
      }
    }

    if (formErrors) return;

    dispatch(
      actions.editRequest({
        username,
        email,
        password,
      }),
    );
  };

  return (
    <Container>
      <Head title={`Edit at ${user}'s account`} />
      <UserHeader />
      <Animate>
        <form onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                disabled={!password}
                value={username}
                id="username"
                onChange={({ target }) => setUsername(target.value)}
              />
              {!password && <Info>To edit your username, put your password!</Info>}
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
              {isLoading ? 'Loading...' : 'Edit profile'}
            </Button>
          </form>
      </Animate>
    </Container>
  );
}
