import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from '../../services/axios';
import FeedPhotosItem from './FeedPhotosItem';
import { PhotosContainer } from './styled';
import { Animate } from '../../styles/GlobalStyles';
import Loading from '../Loading';

export default function FeedPhotos({ setModalPhoto }) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/photos');
      setPhotos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Animate>
        <PhotosContainer>
          {photos.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </PhotosContainer>
      </Animate>
    </>
  );
}

FeedPhotos.propTypes = {
  setModalPhoto: PropTypes.func.isRequired,
};
