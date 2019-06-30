import React from 'react';
import PropTypes from 'prop-types';
import PostModel from '../models/Post';

const Post = ({ post, deletePost }) => (
  <div>
    <h1>{post.title}</h1>
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
    {deletePost && <i onClick={() => deletePost(post.id)}>&times;</i>}
  </div>
);

Post.defaultProps = {
  deletePost: () => console.log('cannot delete post'),
};

Post.propTypes = {
  post: PostModel.isRequired,
  deletePost: PropTypes.func,
};

export default Post;
