import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { Head, Nav, Logo, Login, Account } from './styled';
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
          <Login to="/login">
            Login <FaUserAlt />
          </Login>
        ) : (
          <Account to="/account">
            {username} <FaUserAlt />
          </Account>
        )}
      </Nav>
    </Head>
  );
}
