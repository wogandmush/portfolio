import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost as addPostAction } from '../actions/postActions';
import Post from './Post';

const CreatePostForm = ({ addPost, numPosts }) => {
  const [postTitle, setPostTitle] = useState('Title');
  const [postElems, setPostContent] = useState([
    {
      order: 0,
      type: 'p',
      content: 'anus face',
    },
  ]);

  const handleContentChange = (e) => {
    setPostContent(
      postElems.map((elem) => {
        if (elem.order === 0) {
          return {
            order: 0,
            type: 'p',
            content: e.target.value || 'content',
          };
        }
        return elem;
      }),
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: numPosts + 1, title: postTitle, body: postElems };
    addPost(newPost);
  };
  return (
    <>
      <Post post={{ id: numPosts + 1, title: postTitle, body: postElems }} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={e => setPostTitle(e.target.value || 'Title')}
        />
        <input type="text" name="body-content" onChange={handleContentChange} />
        <input type="submit" />
      </form>
    </>
  );
};

CreatePostForm.propTypes = {
  numPosts: PropTypes.number.isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({
  numPosts: posts.posts.length,
});

export default connect(
  mapStateToProps,
  { addPost: addPostAction },
)(CreatePostForm);
