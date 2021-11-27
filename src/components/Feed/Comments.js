import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CommentsForm from './CommentsForm';

export default function Comments(props) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <div>{isLoggedIn && <CommentsForm id={props.id} />}</div>;
}

Comments.propTypes = {
  id: PropTypes.number.isRequired,
};
