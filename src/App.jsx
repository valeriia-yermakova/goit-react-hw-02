import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';
import './App.css';

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 }
  );

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="app-container">
      <h1>Sip Happens Café</h1>
      <Description text="Please leave your feedback about our service by selecting one of the options below." />

      <Options
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
};

export default App;