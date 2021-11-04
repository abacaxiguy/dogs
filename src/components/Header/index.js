import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { Head, Nav, Logo, Login } from './styled';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

export default function Header() {
  return (
    <Head>
      <Nav>
        <Logo to="/">
          <Dogs />
        </Logo>
        <Login to="/login">
          Login <FaUserAlt />
        </Login>
      </Nav>
    </Head>
  );
}
