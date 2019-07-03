import PropTypes from 'prop-types';

export const PostElementContent = PropTypes.shape({
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
});

export const PostBodyElement = PropTypes.shape({
  order: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['p', 'img', 'q']).isRequired,
  content: PostElementContent.isRequired,
});

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PostBodyElement).isRequired,
});
