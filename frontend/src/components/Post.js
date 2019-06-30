import React from 'react';
import PropTypes from 'prop-types';
import PostModel from '../models/Post';

const Post = ({ post, deletePost }) => (
  <div className="post">
    <div className="post-heading row">
      <h1 className="post-title text-ml">{post.title}</h1>
      {deletePost && (
        <button
          type="button"
          className="btn-reset red text-md float-right"
          onClick={() => deletePost(post.id)}
        >
          &times;
        </button>
      )}
    </div>
    <div>
      {post.body.map((elem) => {
        let content;
        switch (elem.type) {
          case 'p':
            content = <p>{elem.content}</p>;
            break;
          case 'img':
            content = <img src={elem.content} alt={elem.alt || ''} />;
            break;
          default:
            content = { elem };
            break;
        }
        return <div key={`${post.id}-body-${elem.order}`}>{content}</div>;
      })}
    </div>
  </div>
);

Post.defaultProps = {
  deletePost: () => 0,
};

Post.propTypes = {
  post: PostModel.isRequired,
  deletePost: PropTypes.func,
};

export default Post;
