import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from '../../services/axios';
import FeedPhotosItem from './FeedPhotosItem';
import { PhotosContainer } from './styled';
import { Animate } from '../../styles/GlobalStyles';
import Loading from '../Loading';
import { useSelector } from 'react-redux';

export default function FeedPhotos({
  setModalPhoto,
  isFeedAccount,
  isFeedUser,
}) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.auth.user.username);

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
          {isFeedAccount
            ? photos.map((photo) => {
                if (photo.author === user)
                  return (
                    <FeedPhotosItem
                      key={photo.id}
                      photo={photo}
                      setModalPhoto={setModalPhoto}
                    />
                  );
              })
            : isFeedUser
            ? photos.map((photo) => {
                if (photo.author === isFeedUser)
                  return (
                    <FeedPhotosItem
                      key={photo.id}
                      photo={photo}
                      setModalPhoto={setModalPhoto}
                    />
                  );
              })
            : photos.map((photo) => (
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
  isFeedAccount: PropTypes.bool.isRequired,
  isFeedUser: PropTypes.string,
};
