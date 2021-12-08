import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { MainContainer } from './styled';

export default function Feed({ isFeedAccount = false, isFeedUser }) {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <MainContainer style={{ marginBottom: '2rem' }}>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos
        isFeedUser={isFeedUser}
        isFeedAccount={isFeedAccount}
        setModalPhoto={setModalPhoto}
      />
    </MainContainer>
  );
}

Feed.propTypes = {
  isFeedAccount: PropTypes.bool.isRequired,
  isFeedUser: PropTypes.string,
};
