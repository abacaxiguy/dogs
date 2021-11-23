import React, { useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

import { MainContainer } from './styled';

export default function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <MainContainer>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </MainContainer>
  );
}
