import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal, PhotoContent, PhotoImg, Details, Views } from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Title } from '../../styles/GlobalStyles';

export default function FeedModal({ photo }) {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`/photos/${photo.id}`);
        setPhotoData(response.data);
      } catch (e) {
        toast.error(e);
      }
    }

    getData();
  }, [photo, photoData]);

  const { Comments } = photoData;

  return (
    <Modal>
      <PhotoContent>
        <PhotoImg>
          <img src={photoData.url} alt={photoData.title} />
        </PhotoImg>
        <Details>
          <div>
            <p>
              <Link to={`/profile/${photoData.author}`}>
                @{photoData.author}
                {Comments}
              </Link>
              <Views>{photoData.views}</Views>
            </p>
            <Title>
              <Link to={`/photo/${photoData.id}`}>{photoData.title}</Link>
            </Title>
            <ul>
              <li>{photoData.weight} kg</li>
              <li>{photoData.age} years</li>
            </ul>
          </div>
        </Details>
      </PhotoContent>
    </Modal>
  );
}

FeedModal.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
