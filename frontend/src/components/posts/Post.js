import React from 'react';
import PropTypes from 'prop-types';
import PostElement from './PostElement';
import PostModel from '../../models/Post';

const getHeaderStyle = (len) => {
  if (len < 22) return 'text-ml';
  if (len < 35) return 'text-md';
  return 'text-ms';
};

const Post = ({
  post, deletePost, selectedElement, deleteElem,
}) => (
  <div className={selectedElement >= 0 ? 'post preview' : 'post'}>
    <div className="post-heading">
      <h1 className={`${getHeaderStyle(post.title.length)}`}>{post.title}</h1>
      {selectedElement === -1 && (
        <button
          type="button"
          className="btn-reset red text-md post-delete"
          onClick={() => deletePost(post.id)}
        >
          &times;
        </button>
      )}
    </div>
    <div className="post-body">
      {post.body.map(elem => (
        <PostElement
          key={`${post.id}-body-${elem.order}`}
          elem={elem}
          isPreview={selectedElement !== -1}
          deleteElem={deleteElem}
          highlighted={elem.order === selectedElement}
        />
      ))}
      </div>
  </div>
);

Post.defaultProps = {
  deletePost: () => 0,
  deleteElem: () => {},
  selectedElement: -1,
};

Post.propTypes = {
  post: PostModel.isRequired,
  selectedElement: PropTypes.number,
  deleteElem: PropTypes.func,
  deletePost: PropTypes.func,
};

export default Post;
