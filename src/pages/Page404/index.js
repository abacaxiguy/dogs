import React from 'react';
import Head from '../../components/Head';

import { Container, Title } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <Head title="Not Found" />
      <br />
      <Title>Error 404!</Title>
      <h3>The requested URL could not be found.</h3>
    </Container>
  );
}
