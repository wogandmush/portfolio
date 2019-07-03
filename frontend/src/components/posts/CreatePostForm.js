import React from 'react';
import PropTypes from 'prop-types';
import { PostElementContent } from '../../models/Post';

const CreatePostForm = ({
  title,
  element,
  setElement,
  addElement,
  handleSubmit,
  elementType,
}) => (
  <form className="form-vert" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="create-post-title">
        Title
        <input
          id="create-post-title"
          type="text"
          className="form-control"
          name="title"
          {...title}
        />
      </label>
    </div>
    <div>
      <label htmlFor="create-post-element-type">
        element Type
        <select
          id="create-post-element-type"
          name="element-type"
          className="form-control"
          {...elementType}
        >
          <option value="p">Paragraph</option>
          <option value="img">Image</option>
          <option value="q">Quote</option>
        </select>
      </label>
    </div>
    <div className="flex-row">
      {elementType.value === 'p' && (
        <label htmlFor="create-post-content">
          Content
          <textarea
            name="content"
            id="create-post-content"
            className="form-control"
            value={element.content.text}
            onChange={(e) => {
              setElement({
                ...element,
                content: {
                  ...element.content,
                  text: e.target.value,
                },
              });
            }}
          />
        </label>
      )}
      {elementType.value === 'img' && (
        <>
          <label htmlFor="create-post-imgurl">
            Image url:
            <input
              name="content"
              id="create-post-imgurl"
              className="form-control"
              value={element.content.imageUrl}
              onChange={(e) => {
                setElement({
                  ...element,
                  content: {
                    ...element.content,
                    imageUrl: e.target.value,
                  },
                });
              }}
            />
          </label>
          <label htmlFor="create-post-imgalt">
            Image Description:
            <input
              name="image-alt"
              id="create-post-imgalt"
              className="form-control"
              value={element.content.imageAlt}
              onChange={(e) => {
                setElement({
                  ...element,
                  content: {
                    ...element.content,
                    imageAlt: e.target.value,
                  },
                });
              }}
            />
          </label>
        </>
      )}
      <button type="button" className="btn-blue" onClick={addElement}>
        Add
      </button>
    </div>
    <input className="btn-primary" type="submit" value="add post" />
  </form>
);

const formHook = PropTypes.shape({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
});

CreatePostForm.propTypes = {
  addElement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: formHook.isRequired,
  elementType: formHook.isRequired,
  element: PostElementContent.isRequired,
  setElement: PropTypes.func.isRequired,
};

export default CreatePostForm;
