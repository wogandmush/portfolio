import React from 'react';
import PropTypes from 'prop-types';
import PostModel from '../models/Post';

const Post = ({
  post, deletePost, isPreview, deleteElem,
}) => {
  let headerStyle;
  if (post.title.length < 22) headerStyle = 'text-ml';
  else if (post.title.length < 35) headerStyle = 'text-md';
  else headerStyle = 'text-ms';
  return (
    <div className="post">
      <div className="post-heading">
        <h1 className={headerStyle}>{post.title}</h1>
        {!isPreview && (
          <button
            type="button"
            className="btn-reset red text-md post-delete"
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
          return (
            <div className="row" key={`${post.id}-body-${elem.order}`}>
              {isPreview && (
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
        })}
      </div>
    </div>
  );
};

Post.defaultProps = {
  deletePost: () => 0,
  deleteElem: () => {},
  isPreview: false,
};

Post.propTypes = {
  post: PostModel.isRequired,
  isPreview: PropTypes.bool,
  deleteElem: PropTypes.func,
  deletePost: PropTypes.func,
};

export default Post;
