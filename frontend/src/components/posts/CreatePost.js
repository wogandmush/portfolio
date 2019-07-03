import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useFormInput } from '../hooks';
import { addPost as addPostAction } from '../../actions/postActions';
import Post from './Post';
import CreatePostForm from './CreatePostForm';
import { postReducer, postInitialState, defaultElement } from '../../reducers/SinglePostReducer';

const CreatePost = ({ addPost, numPosts }) => {
  const [title, resetTitle] = useFormInput(postInitialState.title);
  const [element, setElement] = useState({
    ...defaultElement,
  });
  const [elementType] = useFormInput('p');
  const [selectedElement, setSelectedElement] = useState(0);
  const [postState, postDispatch] = useReducer(postReducer, postInitialState);

  useEffect(() => {
    postDispatch({
      type: 'UPDATE_TITLE',
      payload: title.value,
    });
  }, [title.value]);

  useEffect(() => {
    postDispatch({
      type: 'UPDATE_ELEMENT',
      payload: element,
      index: selectedElement,
    });
  }, [element.content]);

  useEffect(() => {
    postDispatch({
      type: 'UPDATE_ELEMENT_TYPE',
      payload: elementType.value,
      index: selectedElement,
    });
  }, [elementType.value]);

  const addElem = () => {
    const elem = {
      ...defaultElement,
      order: selectedElement + 1,
    };
    postDispatch({
      type: 'ADD_ELEMENT',
      payload: elem,
    });
    setSelectedElement(selectedElement + 1);
    setElement({
      ...defaultElement,
      order: selectedElement,
    });
  };

  const deleteElem = (order) => {
    postDispatch({
      type: 'DELETE_ELEMENT',
      payload: order,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      ...postState,
      body: postState.body.slice(0, postState.body.length - 1),
      id: numPosts + 1,
    });
    postDispatch({ type: 'RESET' });
    resetTitle();
  };

  return (
    <div id="create-post">
      <CreatePostForm
        title={title}
        element={element}
        setElement={setElement}
        elementType={elementType}
        addElement={addElem}
        handleSubmit={handleSubmit}
      />
      <Post
        post={postState}
        selectedElement={selectedElement}
        deleteElem={deleteElem}
      />
    </div>
  );
};

CreatePost.propTypes = {
  numPosts: PropTypes.number.isRequired,
  addPost: PropTypes.func.isRequired,
};

const mapStateToProps = ({ posts }) => ({
  numPosts: posts.posts.length,
});

export default connect(
  mapStateToProps,
  { addPost: addPostAction },
)(CreatePost);
