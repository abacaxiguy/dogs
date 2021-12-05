import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import history from '../../services/history';
import FeedModal from '../../components/Feed/FeedModal';
import { MainContainer } from '../../components/Feed/styled';
import { Container } from '../../styles/GlobalStyles';

export default function Photo({ match }) {
  const id = get(match, 'params.id', '');
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/photos/${id}`);
        setPhoto(response.data);
      } catch (e) {
        const errors = get(e, 'response.data.errors', []);

        if (errors.length > 0) {
          errors.map((error) => {
            if (error === 'Photo does not exist.') {
              history.push('/');
              toast.error('Photo does not exist.');
            }
          });
        } else {
          toast.error('Unknown error');
        }
      }
    };

    getData();
  }, [id]);

  return (
    <Container>
      <MainContainer>
        <FeedModal photo={photo} isPhotoRoute={true} />
      </MainContainer>
    </Container>
  );
}

Photo.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
