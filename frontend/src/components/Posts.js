import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deletePost as deletePostAction,
  addPost as addPostAction,
} from '../actions/postActions';
import PostModel from '../models/Post';

import Post from './Post';
import PostForm from './PostForm';

const Posts = ({ posts, deletePost, addPost }) => (
  <div>
    <button type="button" onClick={() => addPost((Math.random() * 100) | 0)}>
      Fetch
    </button>
    <ul>
      {posts.map(post => (
        <Post key={`post-${post.id}`} deletePost={deletePost} post={post} />
      ))}
    </ul>
    <PostForm />
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PostModel),
};

export default connect(
  state => state.posts,
  { deletePost: deletePostAction, addPost: addPostAction },
)(Posts);
