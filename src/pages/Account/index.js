import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import UserHeader from '../../components/UserHeader';
import Feed from '../../components/Feed';
import Head from '../../components/Head';

export default function Account() {
  const user = useSelector((state) => state.auth.user.username);

  return (
    <Container>
      <Head title={`${user}'s account`} />
      <UserHeader />
      <Feed isFeedAccount={true} />
    </Container>
  );
}
