import React from 'react';
import PropTypes from 'prop-types';

import { Photo } from './styled';

export default function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <Photo onClick={handleClick}>
      <img src={photo.url} alt={photo.title} />
      <span>{photo.views}</span>
    </Photo>
  );
}

FeedPhotosItem.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};
