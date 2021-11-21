import React, { useState, useEffect } from 'react';

import axios from '../../services/axios';
import FeedPhotosItem from './FeedPhotosItem';
import { PhotosContainer } from './styled';
import { Animate } from '../../styles/GlobalStyles';

export default function FeedPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/photos');
      setPhotos(response.data);
    }

    getData();
  }, []);

  return (
    <Animate>
      <PhotosContainer>
        {photos.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </PhotosContainer>
    </Animate>
  );
}
