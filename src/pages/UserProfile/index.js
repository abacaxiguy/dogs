import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Feed from '../../components/Feed';
import { MainContainer } from '../../components/Feed/styled';
import Head from '../../components/Head';
import { Container, Title } from '../../styles/GlobalStyles';

export default function UserProfile({ match }) {
  const user = get(match, 'params.user', '');

  return (
    <Container>
      <Head title={`@${user}'s photos`} />

      <MainContainer>
        <Title>{user}</Title>
        <Feed isFeedUser={user} />
      </MainContainer>
    </Container>
  );
}

UserProfile.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
