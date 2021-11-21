import React, { useEffect, useState } from 'react';

import axios from '../../services/axios';
import { MainContainer } from './styled';

export default function Feed() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/photos');
      setPhotos(response.data);
    }

    getData();
  }, []);

  return (
    <MainContainer>
      {photos.map((photo) => (
        <div key={String(photo.id)}>
          <span>{photo.title}</span>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
      Feed
    </MainContainer>
  );
}
