import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Head, Nav, MobileButton, MobileNav } from './styled';
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
  const [mobileMenu, setMobileMenu] = useState(true);
  const [title, setTitle] = useState('');
  const { pathname } = useLocation();
  const location = useLocation();
  const dispatch = useDispatch();

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
    function watchResize() {
      const { matches } = window.matchMedia('(max-width: 40rem)');
      setMobile(matches);
    }
    watchResize();
    setMobileMenu(false);
    window.addEventListener('resize', watchResize);

    return () => {
      window.removeEventListener('resize', watchResize);
    };
  }, [location, pathname]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    toast.info('You made logout successfully.');
    return history.push('/');
  };

  return (
    <Head>
      <Title>{title}</Title>
      {mobile && (
        <MobileButton
          aria-label="Menu"
          isActive={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></MobileButton>
      )}
      {!mobile ? (
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
      ) : (
        <MobileNav isActive={mobileMenu}>
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
        </MobileNav>
      )}
    </Head>
  );
}
