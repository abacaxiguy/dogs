import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Img, Skeleton, Wrapper } from './styled';

export default function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setInterval(() => {
      setSkeleton(false);
      target.style.opacity = 1;
    }, 1000);
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <Img onLoad={handleLoad} alt={alt} {...props} />
    </Wrapper>
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
};
