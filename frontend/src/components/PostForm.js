import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost as updatePostAction } from '../actions/postActions';

const PostForm = ({ updatePost }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      updatePost({
        id: 1,
        title: "You're a cunt",
        body: 'Suck my cock you willy-monger',
      });
    }}
  >
    <button type="submit">Submit</button>
  </form>
);

PostForm.propTypes = {
  updatePost: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updatePost: updatePostAction },
)(PostForm);
