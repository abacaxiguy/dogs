import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Head, Nav, Logo, Login, Account } from './styled';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { Button } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => {
    console.log(state.auth.isLoggedIn);
    return state.auth.isLoggedIn;
  });
  const username = useSelector((state) => state.auth.user.username);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    toast.info('You made logout successfully.');
    return history.push('/');
  };

  return (
    <Head>
      <Nav>
        <Logo to="/">
          <Dogs />
        </Logo>
        {!isLoggedIn ? (
          <Login to="/login">
            Login <FaUserAlt />
          </Login>
        ) : (
          <Account to="/account">
            {username} <Button onClick={handleLogout}>Logout</Button>
          </Account>
        )}
      </Nav>
    </Head>
  );
}
