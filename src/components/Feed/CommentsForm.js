import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { InputContainer } from '../../styles/GlobalStyles';
import { ReactComponent as Send } from '../../assets/send.svg';
import axios from '../../services/axios';
import { Form } from './styled';

export default function CommentsForm({ id, setComments }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length < 1 || comment.length > 50) {
      return toast.error('Comment invalid');
    }

    try {
      const newComment = await axios.post(`/comments/${id}`, {
        comment_content: comment,
      });

      console.log(newComment);

      toast.success('Comment added successfully');

      setComment('');
      setComments((comments) => {
        return comments !== undefined
          ? [...comments, newComment.data]
          : [newComment.data];
      });
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}

CommentsForm.propTypes = {
  id: PropTypes.number.isRequired,
  setComments: PropTypes.func.isRequired,
};
