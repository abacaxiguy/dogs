import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import Feed from '../../components/Feed';
import Head from '../../components/Head';

export default function Photos() {
  return (
    <Container>
      <Head />

      <Feed />
    </Container>
  );
}
