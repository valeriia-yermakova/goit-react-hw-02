import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Description = ({ text }) => <p className={styles.description}>{text}</p>;

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;