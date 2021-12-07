import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Feed from '../../components/Feed';
import { MainContainer } from '../../components/Feed/styled';
import { Container, Title } from '../../styles/GlobalStyles';

export default function UserProfile({ match }) {
  const user = get(match, 'params.user', '');

  return (
    <Container>
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
