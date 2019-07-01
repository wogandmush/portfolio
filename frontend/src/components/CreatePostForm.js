import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost as addPostAction } from '../actions/postActions';
import Post from './Post';

const CreatePostForm = ({ addPost, numPosts }) => {
  const [post, setPost] = useState({
    id: numPosts + 1,
    title: 'Title',
    body: [{ order: 0, type: 'p', content: 'penis' }],
  });
  const [selectedElement, setSelectedElement] = useState(0);
  const contentType = useRef();

  const deleteElem = (order) => {
    setPost({
      ...post,
      body: post.body.filter(x => x.order !== order),
    });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'title':
        setPost({
          ...post,
          title: e.target.value,
        });
        break;
      case 'content':
        setPost({
          ...post,
          body: post.body.map(elem => (elem.order === selectedElement
            ? { ...elem, content: e.target.value }
            : elem)),
        });
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    const type = contentType.current.value;
    setPost({
      ...post,
      body: [
        ...post.body,
        {
          type,
          order: post.body.length,
          content: 'penis',
        },
      ],
    });
    setSelectedElement(post.body.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    setPost({
      id: numPosts,
      title: 'Title',
      body: [{ order: 0, type: 'p', content: 'penis' }],
    });
  };

  return (
    <div id="create-post">
      <form className="form-vert" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="create-post-title">
            Title
            <input
              id="create-post-title"
              type="text"
              name="title"
              className="form-control"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex-row">
          <select
            ref={contentType}
            name="element-type"
            className="form-control"
          >
            <option value="p">Paragraph</option>
            <option value="img">Image</option>
            <option value="q">Quote</option>
          </select>
          <button type="button" className="btn-blue" onClick={handleClick}>
            Add Element
          </button>
        </div>
        <div>
          <label htmlFor="create-post-content">
            Content
            <textarea
              name="content"
              id="create-post-content"
              className="form-control"
              onChange={handleChange}
            />
          </label>
        </div>
        <input className="btn-primary" type="submit" value="add post" />
      </form>
      <Post post={post} deleteElem={deleteElem} isPreview />
    </div>
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
