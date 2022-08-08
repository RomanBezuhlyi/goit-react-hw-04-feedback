import { useState } from 'react';
import { PageTitle } from 'components/PageTitle';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Satistics';
import { Footer } from 'components/Footer';
import { Notification } from 'components/Notification';
import { Application } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        console.log('No such a type of the feedback.');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <Application>
      <PageTitle title="Feedback" />

      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <Footer name="Roman Bezuhlyi" href="https://github.com/RomanBezuhlyi" />
    </Application>
  );
}
