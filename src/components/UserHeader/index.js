import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Head, Nav } from './styled';
import { ReactComponent as MyPhotos } from '../../assets/feed.svg';
import { ReactComponent as EditProfile } from '../../assets/edit.svg';
import { ReactComponent as Create } from '../../assets/create.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { Button, Title } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';
import { NavLink } from 'react-router-dom';

export default function UserHeader() {
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
      <Title>{username}</Title>
      <Nav>
        <NavLink to="/account">
          <MyPhotos />
          My Photos
        </NavLink>
        <NavLink to="/account/edit">
          <EditProfile />
          Edit Profile
        </NavLink>
        <NavLink to="/account/create">
          <Create />
          Create Post
        </NavLink>
        <Button onClick={handleLogout}>
          <Logout />
          Logout
        </Button>
      </Nav>
    </Head>
  );
}
