import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { Head, Nav, Logo, Login } from './styled';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  console.log(botaoClicado);

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
