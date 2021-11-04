import React, { useEffect, useState } from 'react';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/photos');
      setPhotos(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      {photos.map((photo) => {
        <div key={String(photo.id)}>
          <span>{photo.title}</span>
          ey
          <img src={photo.src} alt={photo.title} />
        </div>;
      })}
    </Container>
  );
}
