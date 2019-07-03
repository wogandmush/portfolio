import React from 'react';
import PropTypes from 'prop-types';
import { PostBodyElement } from '../../models/Post';

const PostElement = ({
  elem, isPreview, deleteElem, highlighted,
}) => {
  let content;
  switch (elem.type) {
    case 'p':
      content = <p>{elem.content.text}</p>;
      break;
    case 'img':
      content = <img src={elem.content.imageUrl} alt={elem.content.imageAlt} />;
      break;
    default:
      content = null;
      break;
  }
  return (
    <div className={highlighted ? 'highlighted' : ''}>
      {isPreview && !highlighted && (
        <button
          type="button"
          onClick={() => deleteElem(elem.order)}
          className="float-right btn-reset red"
        >
          &times;
        </button>
      )}
      {content}
    </div>
  );
};

PostElement.defaultProps = {
  highlighted: false,
  deleteElem: () => {},
  isPreview: false,
};

PostElement.propTypes = {
  isPreview: PropTypes.bool,
  highlighted: PropTypes.bool,
  deleteElem: PropTypes.func,
  elem: PostBodyElement.isRequired,
};

export default PostElement;
