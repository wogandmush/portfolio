import PropTypes from 'prop-types';
export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  Component: PropTypes.element,
});
