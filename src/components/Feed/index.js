import React, { useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

import { MainContainer } from './styled';

export default function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <MainContainer>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </MainContainer>
  );
}
