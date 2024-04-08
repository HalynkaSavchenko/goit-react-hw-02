import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = localStorage.getItem('clickCounter');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback)
    }
    return {
      good: 0,
      neutral: 0, 
      bad: 0
    }
  });

  useEffect(() => {
    localStorage.setItem('clickCounter', JSON.stringify(clicks))
  },[clicks]);

  const {good, neutral, bad} = clicks;

  const total = good + neutral + bad;

  const update = (feedbackType) => {
    const updateClick = {...clicks};
    updateClick[feedbackType] += 1;
    setClicks(updateClick);
  };

  const reset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  };

  const positiveFeedback = Math.round((good/total) * 100)

    return(
        <>
          <Description/>
          <Options onUpdate={update} total={total} reset={reset}/>
          {total === 0 ? (<Notification/>) : (<Feedback feedback={clicks} total={total} positive={positiveFeedback}/>)}
        </>
    )
}


