import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import UserHeader from '../../components/UserHeader';
import Head from '../../components/Head';

export default function Edit() {
  const user = useSelector((state) => state.auth.user.username);

  return (
    <Container>
      <Head title={`Edit at ${user}'s account`} />
      <UserHeader />
      Editing
    </Container>
  );
}
