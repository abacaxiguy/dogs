import React from 'react';
import PropTypes from 'prop-types';

import { Photo, ViewsSpan, CommentsSpan } from './styled';
import Image from '../Image';

export default function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <Photo onClick={handleClick}>
      <Image src={photo.url} alt={photo.title} />
      <span className="spanWrapper">
        <CommentsSpan>{photo.comment_count}</CommentsSpan>
        <ViewsSpan>{photo.views}</ViewsSpan>
      </span>
    </Photo>
  );
}

FeedPhotosItem.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    comment_count: PropTypes.number.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};
