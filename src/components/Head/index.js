import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Head(props) {
  useEffect(() => {
    document.title = !props.title ? 'Dogs' : props.title + ' - Dogs';
    if (props.description)
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', props.description);
  }, [props]);

  return <></>;
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
