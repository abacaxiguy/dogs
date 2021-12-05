import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Modal,
  PhotoContent,
  PhotoImg,
  Details,
  Views,
  Author,
  Delete,
  PhotoRoute,
} from './styled';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Title } from '../../styles/GlobalStyles';
import Comments from './Comments';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import Image from '../Image';

export default function FeedModal({ photo, setModalPhoto, isPhotoRoute }) {
  const [photoData, setPhotoData] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector((state) => state.auth.user.username);

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

  async function handleDelete() {
    try {
      await axios.delete(`/photos/${photoData.id}`);
      toast.success('Photo deleted successfully');
      setInterval(() => window.location.reload(), 1000);
    } catch (e) {
      toast.error(e.response.data);
    }
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isPhotoRoute ? (
        <Modal onClick={handleOutsideClick}>
          <PhotoContent>
            <PhotoImg>
              <Image src={photoData.url} alt={photoData.title} />
            </PhotoImg>
            <Details>
              <div>
                <Author>
                  {user === photoData.author ? (
                    <Delete onClick={handleDelete}>Delete</Delete>
                  ) : (
                    <Link to={`/profile/${photoData.author}`}>
                      @{photoData.author}
                    </Link>
                  )}

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
      ) : (
        <PhotoRoute>
          <PhotoContent className="photoContent">
            <PhotoImg className="photoImg">
              <Image src={photoData.url} alt={photoData.title} />
            </PhotoImg>
            <Details className="details">
              <div>
                <Author>
                  {user === photoData.author ? (
                    <Delete onClick={handleDelete}>Delete</Delete>
                  ) : (
                    <Link to={`/profile/${photoData.author}`}>
                      @{photoData.author}
                    </Link>
                  )}

                  <Views>{photoData.views}</Views>
                </Author>
                <Title>
                  <span>{photoData.title}</span>
                </Title>
                <ul>
                  <li>{photoData.weight} kg</li>
                  <li>{photoData.age} years</li>
                </ul>
              </div>
            </Details>
            <Comments
              isPhotoRoute={isPhotoRoute}
              id={photo.id}
              comments={comments.reverse()}
            />
          </PhotoContent>
        </PhotoRoute>
      )}
    </>
  );
}

FeedModal.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  setModalPhoto: PropTypes.func,
  isPhotoRoute: PropTypes.bool,
};
