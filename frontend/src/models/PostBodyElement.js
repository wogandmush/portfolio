import PropTypes from 'prop-types';

export default PropTypes.shape({
  order: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['p', 'img']).isRequired,
  content: PropTypes.string.isRequired,
});
