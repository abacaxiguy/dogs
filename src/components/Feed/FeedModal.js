import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modal } from './styled';
import axios from '../../services/axios';

export default function FeedModal({ photo }) {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/photos/${photo.id}`);
      setPhotoData(response.data);
    }

    getData();
  }, [photo]);

  return (
    <Modal>
      <div>{photoData.title}</div>
    </Modal>
  );
}

FeedModal.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
