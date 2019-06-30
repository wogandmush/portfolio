import PropTypes from 'prop-types';
import PostBodyElement from './PostBodyElement';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PostBodyElement).isRequired,
});
