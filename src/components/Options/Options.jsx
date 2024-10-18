import PropTypes from 'prop-types';
import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, totalFeedback }) => (
  <div className={styles.options}>
    {options.map((option) => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
    {totalFeedback > 0 && (
      <button onClick={onReset} className={styles.reset}>
        Reset
      </button>
    )}
  </div>
);

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;