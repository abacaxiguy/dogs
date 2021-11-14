import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Head, Nav } from './styled';
import { ReactComponent as MyPhotos } from '../../assets/feed.svg';
import { ReactComponent as EditProfile } from '../../assets/edit.svg';
import { ReactComponent as Create } from '../../assets/create.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { Title } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { NavLink, useLocation } from 'react-router-dom';

export default function UserHeader() {
  const [mobile, setMobile] = useState(null);
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    setTitle(
      location.pathname === '/account'
        ? 'My account'
        : location.pathname === '/account/edit'
        ? 'Edit profile'
        : location.pathname === '/account/create'
        ? 'Post your photo'
        : 'My account',
    );
  }, [location]);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    setMobile(false);
    toast.info('You made logout successfully.');
    return history.push('/');
  };

  return (
    <Head>
      <Title>{title}</Title>
      <Nav>
        <NavLink to="/account" exact={true}>
          <MyPhotos />
          {mobile && 'My Photos'}
        </NavLink>
        <NavLink to="/account/edit">
          <EditProfile />
          {mobile && 'Edit Profile'}
        </NavLink>
        <NavLink to="/account/create">
          <Create />
          {mobile && 'Create Post'}
        </NavLink>
        <button onClick={handleLogout}>
          <Logout />
          {mobile && 'Logout'}
        </button>
      </Nav>
    </Head>
  );
}
