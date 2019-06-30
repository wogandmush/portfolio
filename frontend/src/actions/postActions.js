import { Posts } from '../constants';

export const deletePost = id => ({
  type: Posts.DELETE_POST,
  payload: id,
});

export const addPost = index => (dispatch) => {
  fetch(`${process.env.API_URL}/posts/${index}`)
    .then(res => res.json())
    .then(post => dispatch({
      type: Posts.ADD_POST,
      payload: post,
    }));
};

export const updatePost = post => ({
  type: Posts.UPDATE_POST,
  payload: post,
});
