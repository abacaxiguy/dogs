import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { MainContainer } from './styled';

export default function Feed({ isFeedAccount = false }) {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <MainContainer>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos isFeedAccount={isFeedAccount} setModalPhoto={setModalPhoto} />
    </MainContainer>
  );
}

Feed.propTypes = {
  isFeedAccount: PropTypes.bool.isRequired,
};
