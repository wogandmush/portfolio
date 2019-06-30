import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deletePost as deletePostAction,
  fetchPost as fetchPostAction,
} from '../actions/postActions';
import PostModel from '../models/Post';

import Post from './Post';
import PostForm from './PostForm';

const Posts = ({ posts, deletePost, fetchPost }) => (
  <div>
    <button
      className="btn"
      type="button"
      onClick={() => fetchPost((Math.random() * 100) | 0)}
    >
      Fetch
    </button>
    {posts.map(post => (
      <Post key={`post-${post.id}`} deletePost={deletePost} post={post} />
    ))}
    <PostForm />
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PostModel),
};

export default connect(
  state => state.posts,
  { deletePost: deletePostAction, fetchPost: fetchPostAction },
)(Posts);
