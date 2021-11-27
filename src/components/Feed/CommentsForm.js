import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { InputContainer } from '../../styles/GlobalStyles';
import { ReactComponent as Send } from '../../assets/send.svg';
import axios from '../../services/axios';

export default function CommentsForm({ id }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment.length);
    if (comment.length < 1 || comment.length > 50) {
      return toast.error('Comment invalid');
    }

    try {
      const response = await axios.post(`/comments/${id}`, {
        comment_content: comment,
      });

      console.log(response);

      toast.success('Comment added successfully');
      setComment('');
    } catch (e) {
      e.response.data.errors.map((err) => toast.error(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <input
          id="comment"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
      </InputContainer>
      <button>
        <Send />
      </button>
    </form>
  );
}

CommentsForm.propTypes = {
  id: PropTypes.number.isRequired,
};
