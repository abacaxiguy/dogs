import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CommentsForm from './CommentsForm';
import { CommentContainer } from './styled';

export default function Comments({ comments, id }) {
  const [commentList, setCommentList] = useState([]);
  const commentSection = useRef(null);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setCommentList(comments.reverse());
  }, [comments]);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [commentList]);

  return (
    <>
      <CommentContainer ref={commentSection}>
        {commentList === undefined ? (
          <></>
        ) : (
          commentList.map((comment) => {
            return (
              <li key={comment.id}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
              </li>
            );
          })
        )}
      </CommentContainer>
      {isLoggedIn ? <CommentsForm id={id} setComments={setCommentList} /> : ''}
    </>
  );
}

Comments.propTypes = {
  id: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
};
