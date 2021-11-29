import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  PhotoContent,
  PhotoImg,
  Details,
  Views,
  Author,
} from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Title } from '../../styles/GlobalStyles';
import Comments from './Comments';
import Loading from '../Loading';

export default function FeedModal({ photo, setModalPhoto }) {
  const [photoData, setPhotoData] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get(`/photos/${photo.id}`);
        setPhotoData(response.data);
        setComments(response.data.Comments);
        setIsLoading(false);
      } catch (e) {
        toast.error(e);
        setIsLoading(false);
      }
    }

    getData();
  }, [photo]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Modal onClick={handleOutsideClick}>
        <PhotoContent>
          <PhotoImg>
            <img src={photoData.url} alt={photoData.title} />
          </PhotoImg>
          <Details>
            <div>
              <Author>
                <Link to={`/profile/${photoData.author}`}>
                  @{photoData.author}
                </Link>
                <Views>{photoData.views}</Views>
              </Author>
              <Title>
                <Link to={`/photo/${photoData.id}`}>{photoData.title}</Link>
              </Title>
              <ul>
                <li>{photoData.weight} kg</li>
                <li>{photoData.age} years</li>
              </ul>
            </div>
          </Details>
          <Comments id={photo.id} comments={comments.reverse()} />
        </PhotoContent>
      </Modal>
    </>
  );
}

FeedModal.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func.isRequired,
};
