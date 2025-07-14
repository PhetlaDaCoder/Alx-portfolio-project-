import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from '../components/QuoteCard';

const Home = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://zenquotes.io/api/today')
      .then(res => setQuote(res.data[0].q + ' — ' + res.data[0].a))
      .catch(err => setQuote("Stay on track, Keep pushing!"));

  }, []);

  return (
    <div className="container mt-4">
      <h1>Welcome to Hey_Buddy 👋</h1>
      <blockquote className="blockquote mt-3">
        <p>{quote}</p>
      </blockquote>
      <div className="mt-5">
        <h4>Upcoming Tasks</h4>
        {/* Placeholder for task preview component */}
      </div>
    </div>
  );
};

export default Home;
