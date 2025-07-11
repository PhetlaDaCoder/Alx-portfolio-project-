import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteCard = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('/api/quotes/daily')
      .then(res => setQuote(res.data.quote))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card p-3 shadow-sm my-3">
      <h5>{quote}</h5>
    </div>
  );
};

export default QuoteCard;
