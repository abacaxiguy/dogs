import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

import { MainContainer } from './styled';

export default function Feed() {
  return (
    <MainContainer>
      <FeedModal />
      <FeedPhotos />
    </MainContainer>
  );
}
