import React from 'react';
import { useSelector } from 'react-redux';

import { Head, Nav, Logo, Login } from './styled';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.user.username);

  return (
    <Head>
      <Nav>
        <Logo to="/">
          <Dogs />
        </Logo>
        {!isLoggedIn ? (
          <Login to="/login">Login / Register</Login>
        ) : (
          <Login to="/account">{username}</Login>
        )}
      </Nav>
    </Head>
  );
}
