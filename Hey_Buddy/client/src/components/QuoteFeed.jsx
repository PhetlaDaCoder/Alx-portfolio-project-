import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from '../components/QuoteCard';

const QuoteFeed = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios.get('https://zenquotes.io/api/quotes')
      .then(res => setQuotes(res.data.slice(0, 10))) // Limit to 10 quotes
      .catch(() => setQuotes([]));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Quote Feed 🌟</h2>
      <div className="quote-carousel">
        {quotes.map((q, i) => (
          <div key={i} className="quote-card card p-3 mb-2">
            <p>{q.q}</p>
            <footer className="blockquote-footer">{q.a}</footer>
            {/* Save or Share button here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteFeed;
