import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import UserHeader from '../../components/UserHeader';
import Feed from '../../components/Feed';

export default function Account() {
  return (
    <Container>
      <UserHeader />
      <Feed />
    </Container>
  );
}
